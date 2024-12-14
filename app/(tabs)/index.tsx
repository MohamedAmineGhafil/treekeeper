import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

type IconItem = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  path: string;
};

type IconButtonProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, label }) => (
  <TouchableOpacity style={styles.iconButton}>
    <MaterialCommunityIcons name={icon} size={24} color="#22C55E" />
    <Text style={styles.iconLabel}>{label}</Text>
  </TouchableOpacity>
);

const Homescreen = () => {
  const router = useRouter();
  const icons = [
    {
      icon: "shopping-outline" as const,
      label: "Buy a Tree",
      onPress: () => router.push("/shop"),
    },
    {
      icon: "eye-outline" as const,
      label: "Track Tree",
      onPress: () => router.push("/track/select"),
    },
    {
      icon: "gift-outline" as const,
      label: "Give Tree",
      onPress: () => router.push("/give"),
    },
    {
      icon: "dots-horizontal" as const,
      label: "More",
      onPress: () => router.push("/more"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {/* Header */}
        <View style={styles.appHeaderSection}>
          <View style={styles.appLogoContainer}>
            <MaterialCommunityIcons name="leaf" size={24} color="#22C55E" />
            <Text style={styles.appLogoText}>TreeKeeper</Text>
          </View>
        </View>

        <View style={styles.header}>
          <Button
            style={styles.progressButton}
            onPress={() => router.push("/progress")}
          >
            <View style={styles.progressButtonContent}>
              <MaterialCommunityIcons
                name="chart-timeline-variant"
                size={20}
                color="#fff"
              />
              <Text style={styles.progressButtonText}>
                Check Today's Progress
              </Text>
            </View>
          </Button>
        </View>

        {/* Stats Section */}
        <View style={styles.section}>
          <Card>
            <View style={styles.statRow}>
              <View>
                <Text style={styles.statNumber}>34.6K</Text>
                <Text style={styles.statLabel}>Total Trees Planted</Text>
              </View>
              <Button
                variant="outline"
                onPress={() => router.push("/trees")} // Add this navigation
              >
                <Text style={styles.buttonText}>Visit</Text>
              </Button>
            </View>

            <View style={styles.statRow}>
              <View>
                <Text style={styles.statNumber}>127</Text>
                <Text style={styles.statLabel}>Your Own Personal Trees</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Icons Row */}
        <View style={styles.iconsContainer}>
          {icons.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconButton}
              onPress={item.onPress}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color="#22C55E"
              />
              <Text style={styles.iconLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Progress */}
        <View style={styles.section}>
          <Card>
            <View style={styles.quickProgress}>
              <Text style={styles.sectionTitle}>Quick progress</Text>
              <View style={styles.progressList}>
                <View style={styles.progressItem}>
                  <MaterialCommunityIcons
                    name="water"
                    size={24}
                    color="#60A5FA"
                    style={styles.progressIcon}
                  />
                  <Text style={styles.progressText}>12 Trees Watered</Text>
                </View>
                <View style={styles.progressItem}>
                  <MaterialCommunityIcons
                    name="tree"
                    size={24}
                    color="#22C55E"
                    style={styles.progressIcon}
                  />
                  <Text style={styles.progressText}>3 New Trees</Text>
                </View>
                <View style={styles.progressItem}>
                  <MaterialCommunityIcons
                    name="clipboard-check"
                    size={24}
                    color="#34D399"
                    style={styles.progressIcon}
                  />
                  <Text style={styles.progressText}>8 Health Checks</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appLogoContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  appLogoText: {
    color: "#22C55E",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "SpaceMono",
  },
  appHeaderSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressButton: {
    backgroundColor: "#22C55E",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  progressButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  progressButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statNumber: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.6)",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iconButton: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1A1A1A",
    borderRadius: 25,
    width: 80,
  },
  iconLabel: {
    color: "#fff",
    marginTop: 8,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  progressPlaceholder: {
    height: 120,
    backgroundColor: "#262626",
    borderRadius: 8,
  },
  quickProgress: {
    padding: 16,
  },
  progressList: {
    marginTop: 12,
    gap: 16,
  },
  progressItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressIcon: {
    marginRight: 12,
  },
  progressText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Homescreen;
