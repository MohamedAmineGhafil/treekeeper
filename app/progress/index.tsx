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
import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ProgressScreen: React.FC = () => {
  const router = useRouter();

  const todayStats = {
    watered: 12,
    newTrees: 3,
    carbonOffset: "2.5kg",
    healthChecks: 8,
  };

  const recentActivities = [
    {
      action: "Watered Oak Tree #127",
      time: "2 hours ago",
      icon: "water",
      color: "#60A5FA",
    },
    {
      action: "Health Check - Maple #89",
      time: "4 hours ago",
      icon: "clipboard-check",
      color: "#34D399",
    },
    {
      action: "New Pine Tree Planted",
      time: "6 hours ago",
      icon: "tree",
      color: "#22C55E",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Today's Progress</Text>
      </View>

      <ScrollView>
        {/* Today's Stats */}
        <View style={styles.statsGrid}>
          <Card>
            <View style={styles.statsContainer}>
              <Text style={styles.statsTitle}>Today's Impact</Text>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="water"
                    size={24}
                    color="#60A5FA"
                  />
                  <Text style={styles.statNumber}>{todayStats.watered}</Text>
                  <Text style={styles.statLabel}>Trees Watered</Text>
                </View>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="tree"
                    size={24}
                    color="#22C55E"
                  />
                  <Text style={styles.statNumber}>{todayStats.newTrees}</Text>
                  <Text style={styles.statLabel}>New Trees</Text>
                </View>
              </View>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="molecule-co2"
                    size={24}
                    color="#F59E0B"
                  />
                  <Text style={styles.statNumber}>
                    {todayStats.carbonOffset}
                  </Text>
                  <Text style={styles.statLabel}>Carbon Offset</Text>
                </View>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="clipboard-check"
                    size={24}
                    color="#34D399"
                  />
                  <Text style={styles.statNumber}>
                    {todayStats.healthChecks}
                  </Text>
                  <Text style={styles.statLabel}>Health Checks</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        {/* Recent Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <Card>
            {recentActivities.map((activity, index) => (
              <View
                key={index}
                style={[
                  styles.activityItem,
                  index !== recentActivities.length - 1 && styles.borderBottom,
                ]}
              >
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: `${activity.color}20` },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={activity.icon}
                    size={24}
                    color={activity.color}
                  />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>{activity.action}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            ))}
          </Card>
        </View>
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
  statsGrid: {
    padding: 20,
  },
  statsContainer: {
    padding: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
    gap: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
  },
});

export default ProgressScreen;
