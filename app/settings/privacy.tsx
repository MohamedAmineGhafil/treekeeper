// privacy.tsx
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

const PrivacyScreen = () => {
  const router = useRouter();
  const [locationSharing, setLocationSharing] = useState(true);
  const [activitySharing, setActivitySharing] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Privacy</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Privacy Controls */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Controls</Text>
          <Card>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Location Sharing</Text>
                <Text style={styles.settingDescription}>
                  Share tree locations with community
                </Text>
              </View>
              <Switch
                value={locationSharing}
                onValueChange={setLocationSharing}
                trackColor={{ false: "#767577", true: "#22C55E" }}
                thumbColor={locationSharing ? "#fff" : "#f4f3f4"}
              />
            </View>

            <View style={[styles.settingItem, styles.borderTop]}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Activity Sharing</Text>
                <Text style={styles.settingDescription}>
                  Share planting activity with followers
                </Text>
              </View>
              <Switch
                value={activitySharing}
                onValueChange={setActivitySharing}
                trackColor={{ false: "#767577", true: "#22C55E" }}
                thumbColor={activitySharing ? "#fff" : "#f4f3f4"}
              />
            </View>

            <View style={[styles.settingItem, styles.borderTop]}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Analytics</Text>
                <Text style={styles.settingDescription}>
                  Help improve app with usage data
                </Text>
              </View>
              <Switch
                value={analyticsEnabled}
                onValueChange={setAnalyticsEnabled}
                trackColor={{ false: "#767577", true: "#22C55E" }}
                thumbColor={analyticsEnabled ? "#fff" : "#f4f3f4"}
              />
            </View>
          </Card>
        </View>

        {/* Data Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Management</Text>
          <Card>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={() => console.log("Download data")}
            >
              <View style={styles.actionContent}>
                <MaterialCommunityIcons
                  name="download"
                  size={24}
                  color="#22C55E"
                />
                <View style={styles.actionInfo}>
                  <Text style={styles.actionTitle}>Download My Data</Text>
                  <Text style={styles.actionDescription}>
                    Get a copy of your TreeKeeper data
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#666"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionItem, styles.borderTop]}
              onPress={() => console.log("Delete data")}
            >
              <View style={styles.actionContent}>
                <MaterialCommunityIcons
                  name="delete"
                  size={24}
                  color="#EF4444"
                />
                <View style={styles.actionInfo}>
                  <Text style={[styles.actionTitle, styles.deleteText]}>
                    Delete Account
                  </Text>
                  <Text style={styles.actionDescription}>
                    Permanently delete your account and data
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#666"
              />
            </TouchableOpacity>
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
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  actionContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  actionInfo: {
    marginLeft: 12,
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  deleteText: {
    color: "#EF4444",
  },
});

export default PrivacyScreen;
