import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AboutScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>About</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons name="tree" size={64} color="#22C55E" />
        </View>

        <Text style={styles.appName}>TreeKeeper</Text>
        <Text style={styles.version}>Version 1.0.0</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100K+</Text>
            <Text style={styles.statLabel}>Trees Planted</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
        </View>

        <Text style={styles.description}>
          TreeKeeper helps individuals and communities track their tree planting
          journey while contributing to global reforestation efforts.
        </Text>
      </View>
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
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 32,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#22C55E",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});

export default AboutScreen;
