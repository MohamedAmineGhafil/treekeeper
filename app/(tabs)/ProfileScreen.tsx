import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Activity = {
  action: string;
  date: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

const ProfileScreen = () => {
  const activities: Activity[] = [
    {
      action: "Planted a Pine Tree",
      date: "2 days ago",
      icon: "tree",
    },
    {
      action: "Earned Green Badge",
      date: "5 days ago",
      icon: "badge-account",
    },
    {
      action: "Shared Forest Location",
      date: "1 week ago",
      icon: "map-marker",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <MaterialCommunityIcons
                name="account-circle"
                size={80}
                color="#666"
              />
            </View>
            <View style={styles.badgeContainer}>
              <MaterialCommunityIcons name="leaf" size={24} color="#22C55E" />
            </View>
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.title}>Tree Guardian</Text>
        </View>

        {/* Impact Stats */}
        <View style={styles.statsContainer}>
          <Card>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>127</Text>
                <Text style={styles.statLabel}>Trees Planted</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2.4T</Text>
                <Text style={styles.statLabel}>CO₂ Saved</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>15</Text>
                <Text style={styles.statLabel}>Achievements</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Card>
            {activities.map((activity, index) => (
              <View
                key={index}
                style={[
                  styles.activityItem,
                  index !== activities.length - 1 && styles.activityBorder,
                ]}
              >
                <MaterialCommunityIcons
                  name={activity.icon}
                  size={24}
                  color="#22C55E"
                />
                <View style={styles.activityText}>
                  <Text style={styles.activityTitle}>{activity.action}</Text>
                  <Text style={styles.activityDate}>{activity.date}</Text>
                </View>
              </View>
            ))}
          </Card>
        </View>

        {/* Environmental Impact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Environmental Impact</Text>
          <Card>
            <View style={styles.impactItem}>
              <MaterialCommunityIcons
                name="molecule-co2"
                size={24}
                color="#22C55E"
              />
              <View style={styles.impactText}>
                <Text style={styles.impactTitle}>Carbon Offset</Text>
                <Text style={styles.impactValue}>2.4 Tons of CO₂</Text>
              </View>
            </View>
            <View style={[styles.impactItem, styles.noBorder]}>
              <MaterialCommunityIcons name="water" size={24} color="#22C55E" />
              <View style={styles.impactText}>
                <Text style={styles.impactTitle}>Water Saved</Text>
                <Text style={styles.impactValue}>1,200 Liters</Text>
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
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#22C55E",
  },
  badgeContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    padding: 8,
    borderWidth: 3,
    borderColor: "#000",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: "#22C55E",
    marginBottom: 20,
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  activityBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  activityText: {
    marginLeft: 15,
  },
  activityTitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  impactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  impactText: {
    marginLeft: 15,
  },
  impactTitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  impactValue: {
    fontSize: 14,
    color: "#22C55E",
  },
  noBorder: {
    borderBottomWidth: 0,
  },
});

export default ProfileScreen;
