// location.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const LocationScreen = () => {
  const router = useRouter();
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [preciseLocation, setPreciseLocation] = useState(false);
  const [backgroundLocation, setBackgroundLocation] = useState(false);

  const regions = [
    { id: 1, name: "North Forest", selected: true },
    { id: 2, name: "Central Park", selected: false },
    { id: 3, name: "River Valley", selected: false },
    { id: 4, name: "Urban Area", selected: false },
  ];

  const [selectedRegions, setSelectedRegions] = useState(regions);

  const toggleRegion = (id: number) => {
    setSelectedRegions(
      selectedRegions.map((region) =>
        region.id === id ? { ...region, selected: !region.selected } : region
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Location</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Location Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location Services</Text>
          <Card>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Location Services</Text>
                <Text style={styles.settingDescription}>
                  Enable location services for tree tracking
                </Text>
              </View>
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: "#767577", true: "#22C55E" }}
                thumbColor={locationEnabled ? "#fff" : "#f4f3f4"}
              />
            </View>

            {locationEnabled && (
              <>
                <View style={[styles.settingItem, styles.borderTop]}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingTitle}>Precise Location</Text>
                    <Text style={styles.settingDescription}>
                      Use GPS for accurate tree positions
                    </Text>
                  </View>
                  <Switch
                    value={preciseLocation}
                    onValueChange={setPreciseLocation}
                    trackColor={{ false: "#767577", true: "#22C55E" }}
                    thumbColor={preciseLocation ? "#fff" : "#f4f3f4"}
                  />
                </View>

                <View style={[styles.settingItem, styles.borderTop]}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingTitle}>Background Location</Text>
                    <Text style={styles.settingDescription}>
                      Track trees while app is closed
                    </Text>
                  </View>
                  <Switch
                    value={backgroundLocation}
                    onValueChange={setBackgroundLocation}
                    trackColor={{ false: "#767577", true: "#22C55E" }}
                    thumbColor={backgroundLocation ? "#fff" : "#f4f3f4"}
                  />
                </View>
              </>
            )}
          </Card>
        </View>

        {/* Regions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferred Regions</Text>
          <Card>
            {selectedRegions.map((region, index) => (
              <TouchableOpacity
                key={region.id}
                onPress={() => toggleRegion(region.id)}
                style={[
                  styles.regionItem,
                  index !== selectedRegions.length - 1 && styles.borderBottom,
                ]}
              >
                <Text style={styles.regionName}>{region.name}</Text>
                <MaterialCommunityIcons
                  name={
                    region.selected
                      ? "checkbox-marked"
                      : "checkbox-blank-outline"
                  }
                  size={24}
                  color={region.selected ? "#22C55E" : "#666"}
                />
              </TouchableOpacity>
            ))}
          </Card>
        </View>

        {/* Location Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Location</Text>
          <Card>
            <View style={styles.locationInfo}>
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color="#22C55E"
              />
              <View style={styles.locationDetails}>
                <Text style={styles.locationTitle}>North Forest Region</Text>
                <Text style={styles.locationDescription}>
                  Latitude: 40.7128° N, Longitude: 74.0060° W
                </Text>
              </View>
            </View>
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
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#22C55E",
    marginBottom: 10,
    marginLeft: 4,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  regionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  regionName: {
    fontSize: 16,
    color: "#fff",
  },
  locationInfo: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    gap: 12,
  },
  locationDetails: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 4,
  },
  locationDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
});

export default LocationScreen;
