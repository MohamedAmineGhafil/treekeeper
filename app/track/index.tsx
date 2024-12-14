import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TrackScreen = () => {
  const router = useRouter();

  // Mock data for demonstration
  const healthMetrics = {
    overall: "Healthy",
    lastWatered: "2 days ago",
    soilQuality: "Good",
    sunlight: "Optimal",
  };

  const growthData = [
    { week: "Week 1", height: "10cm" },
    { week: "Week 2", height: "12cm" },
    { week: "Week 3", height: "15cm" },
    { week: "Week 4", height: "18cm" },
  ];

  const treePhotos = [
    { date: "Jan 15, 2024", placeholder: true },
    { date: "Jan 22, 2024", placeholder: true },
    { date: "Jan 29, 2024", placeholder: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Track Your Tree</Text>
      </View>

      <ScrollView>
        {/* Health Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Status</Text>
          <Card>
            <View style={styles.healthContainer}>
              <View style={styles.healthStatus}>
                <MaterialCommunityIcons name="tree" size={32} color="#22C55E" />
                <Text style={styles.healthText}>
                  Status: {healthMetrics.overall}
                </Text>
              </View>

              <View style={styles.metricsGrid}>
                <View style={styles.metricItem}>
                  <MaterialCommunityIcons
                    name="water"
                    size={24}
                    color="#60A5FA"
                  />
                  <Text style={styles.metricLabel}>Last Watered</Text>
                  <Text style={styles.metricValue}>
                    {healthMetrics.lastWatered}
                  </Text>
                </View>

                <View style={styles.metricItem}>
                  <MaterialCommunityIcons
                    name="grass"
                    size={24}
                    color="#34D399"
                  />
                  <Text style={styles.metricLabel}>Soil Quality</Text>
                  <Text style={styles.metricValue}>
                    {healthMetrics.soilQuality}
                  </Text>
                </View>

                <View style={styles.metricItem}>
                  <MaterialCommunityIcons
                    name="white-balance-sunny"
                    size={24}
                    color="#FBBF24"
                  />
                  <Text style={styles.metricLabel}>Sunlight</Text>
                  <Text style={styles.metricValue}>
                    {healthMetrics.sunlight}
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        {/* Growth Tracking Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Growth Progress</Text>
          <Card>
            <View style={styles.growthContainer}>
              {growthData.map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.growthItem,
                    index !== growthData.length - 1 && styles.borderBottom,
                  ]}
                >
                  <Text style={styles.growthWeek}>{data.week}</Text>
                  <Text style={styles.growthHeight}>{data.height}</Text>
                </View>
              ))}
            </View>
          </Card>
        </View>

        {/* Photo Timeline Section */}
        <View style={styles.section}>
          <View style={styles.photoHeader}>
            <Text style={styles.sectionTitle}>Photo Timeline</Text>
            <TouchableOpacity style={styles.addPhotoButton}>
              <MaterialCommunityIcons
                name="camera-plus"
                size={24}
                color="#22C55E"
              />
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.photoScroll}
          >
            {treePhotos.map((photo, index) => (
              <View key={index} style={styles.photoCard}>
                <View style={styles.photoPlaceholder}>
                  <MaterialCommunityIcons name="image" size={32} color="#666" />
                </View>
                <Text style={styles.photoDate}>{photo.date}</Text>
              </View>
            ))}
          </ScrollView>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  healthContainer: {
    padding: 16,
  },
  healthStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  healthText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  metricsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricItem: {
    alignItems: "center",
    gap: 8,
  },
  metricLabel: {
    color: "#666",
    fontSize: 12,
  },
  metricValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  growthContainer: {
    padding: 16,
  },
  growthItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  growthWeek: {
    color: "#fff",
    fontSize: 16,
  },
  growthHeight: {
    color: "#22C55E",
    fontSize: 16,
    fontWeight: "600",
  },
  photoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  addPhotoButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addPhotoText: {
    color: "#22C55E",
    fontSize: 14,
  },
  photoScroll: {
    flexDirection: "row",
  },
  photoCard: {
    marginRight: 16,
    alignItems: "center",
  },
  photoPlaceholder: {
    width: 120,
    height: 160,
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  photoDate: {
    color: "#666",
    fontSize: 12,
  },
});

export default TrackScreen;
