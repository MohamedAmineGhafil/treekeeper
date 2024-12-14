import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Tree = {
  id: string;
  name: string;
  plantedDate: string;
  lastWatered: string;
  status: "Healthy" | "Needs Water" | "Check Required";
};

const SelectTreeScreen = () => {
  const router = useRouter();

  const trees: Tree[] = [
    {
      id: "1",
      name: "Oak Tree #127",
      plantedDate: "Jan 15, 2024",
      lastWatered: "2 days ago",
      status: "Healthy",
    },
    {
      id: "2",
      name: "Maple Tree #89",
      plantedDate: "Jan 10, 2024",
      lastWatered: "4 days ago",
      status: "Needs Water",
    },
    {
      id: "3",
      name: "Pine Tree #203",
      plantedDate: "Jan 20, 2024",
      lastWatered: "1 day ago",
      status: "Check Required",
    },
  ];

  const getStatusColor = (status: Tree["status"]) => {
    switch (status) {
      case "Healthy":
        return "#22C55E";
      case "Needs Water":
        return "#F59E0B";
      case "Check Required":
        return "#EF4444";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select Tree to Track</Text>
      </View>

      <ScrollView>
        {trees.map((tree) => (
          <TouchableOpacity
            key={tree.id}
            style={styles.treeItemContainer}
            onPress={() =>
              router.push({
                pathname: "/track",
                params: { id: tree.id },
              })
            }
          >
            <Card>
              <View style={styles.treeItem}>
                <View style={styles.treeIcon}>
                  <MaterialCommunityIcons
                    name="tree"
                    size={32}
                    color="#22C55E"
                  />
                </View>

                <View style={styles.treeInfo}>
                  <View style={styles.treeHeader}>
                    <Text style={styles.treeName}>{tree.name}</Text>
                    <View
                      style={[
                        styles.statusBadge,
                        { backgroundColor: `${getStatusColor(tree.status)}20` },
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusText,
                          { color: getStatusColor(tree.status) },
                        ]}
                      >
                        {tree.status}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.treeDetails}>
                    <Text style={styles.detailText}>
                      Planted: {tree.plantedDate}
                    </Text>
                    <Text style={styles.detailText}>
                      Last Watered: {tree.lastWatered}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  treeItemContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  treeItem: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    gap: 16,
  },
  treeIcon: {
    width: 56,
    height: 56,
    backgroundColor: "#22C55E20",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  treeInfo: {
    flex: 1,
  },
  treeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  treeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  treeDetails: {
    gap: 4,
  },
  detailText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
});

export default SelectTreeScreen;
