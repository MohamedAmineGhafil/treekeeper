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

const TreesScreen: React.FC = () => {
  const router = useRouter();

  const treeStats = {
    total: 34600,
    thisMonth: 1240,
    avgSurvivalRate: "94%",
    mostCommonSpecies: "Oak",
  };

  const regions = [
    { name: "North Forest", count: 12450, health: "Excellent" },
    { name: "Central Park", count: 8930, health: "Good" },
    { name: "River Valley", count: 7220, health: "Excellent" },
    { name: "Urban Area", count: 6000, health: "Good" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Total Trees Planted</Text>
      </View>

      <ScrollView>
        {/* Overview Card */}
        <View style={styles.section}>
          <Card>
            <View style={styles.overviewCard}>
              <View style={styles.bigStat}>
                <Text style={styles.bigNumber}>
                  {treeStats.total.toLocaleString()}
                </Text>
                <Text style={styles.bigLabel}>Total Trees</Text>
              </View>

              <View style={styles.statsGrid}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>
                    {treeStats.thisMonth.toLocaleString()}
                  </Text>
                  <Text style={styles.statLabel}>This Month</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>
                    {treeStats.avgSurvivalRate}
                  </Text>
                  <Text style={styles.statLabel}>Survival Rate</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>
                    {treeStats.mostCommonSpecies}
                  </Text>
                  <Text style={styles.statLabel}>Most Common</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        {/* Distribution by Region */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Distribution by Region</Text>
          <Card>
            {regions.map((region, index) => (
              <View
                key={index}
                style={[
                  styles.regionItem,
                  index !== regions.length - 1 && styles.borderBottom,
                ]}
              >
                <View>
                  <Text style={styles.regionName}>{region.name}</Text>
                  <Text style={styles.regionCount}>
                    {region.count.toLocaleString()} trees
                  </Text>
                </View>
                <View
                  style={[
                    styles.healthTag,
                    {
                      backgroundColor:
                        region.health === "Excellent"
                          ? "#22C55E20"
                          : "#F59E0B20",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.healthText,
                      {
                        color:
                          region.health === "Excellent" ? "#22C55E" : "#F59E0B",
                      },
                    ]}
                  >
                    {region.health}
                  </Text>
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
  section: {
    padding: 20,
  },
  overviewCard: {
    padding: 20,
  },
  bigStat: {
    alignItems: "center",
    marginBottom: 24,
  },
  bigNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  bigLabel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.6)",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  regionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  regionName: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  regionCount: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  healthTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  healthText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default TreesScreen;
