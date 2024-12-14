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

type FeatureOption = {
  title: string;
  description: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
};

const features: FeatureOption[] = [
  {
    title: "Tree Community",
    description: "Connect with fellow tree planters",
    icon: "account-group",
    color: "#22C55E",
  },
  {
    title: "Impact Reports",
    description: "View detailed environmental impact data",
    icon: "chart-bar",
    color: "#3B82F6",
  },
  {
    title: "Tree Encyclopedia",
    description: "Learn about different tree species",
    icon: "book-open-variant",
    color: "#F59E0B",
  },
  {
    title: "Events",
    description: "Join local tree planting events",
    icon: "calendar",
    color: "#EC4899",
  },
  {
    title: "Achievements",
    description: "View your earned badges and rewards",
    icon: "trophy",
    color: "#8B5CF6",
  },
  {
    title: "Carbon Calculator",
    description: "Calculate your carbon footprint",
    icon: "calculator",
    color: "#10B981",
  },
];

const MoreScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Explore More</Text>
      </View>

      <ScrollView>
        {/* Features Grid */}
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={styles.featureCard}
              onPress={() => console.log(`Selected ${feature.title}`)}
            >
              <Card>
                <View style={styles.featureContent}>
                  <View
                    style={[
                      styles.iconContainer,
                      { backgroundColor: `${feature.color}20` },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={feature.icon}
                      size={28}
                      color={feature.color}
                    />
                  </View>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>
                    {feature.description}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Resources Section */}
        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>Resources</Text>
          <Card>
            <View style={styles.resourcesContent}>
              <TouchableOpacity style={styles.resourceItem}>
                <MaterialCommunityIcons
                  name="frequently-asked-questions"
                  size={24}
                  color="#22C55E"
                />
                <Text style={styles.resourceText}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resourceItem}>
                <MaterialCommunityIcons
                  name="newspaper-variant"
                  size={24}
                  color="#22C55E"
                />
                <Text style={styles.resourceText}>Blog</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resourceItem}>
                <MaterialCommunityIcons
                  name="video"
                  size={24}
                  color="#22C55E"
                />
                <Text style={styles.resourceText}>Tutorials</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <View style={styles.bottomPadding} />
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
  featuresGrid: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  featureCard: {
    width: "47%", // Slightly less than half to account for gap
  },
  featureContent: {
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    lineHeight: 16,
  },
  resourcesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },
  resourcesContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  resourceItem: {
    alignItems: "center",
    gap: 8,
  },
  resourceText: {
    color: "#fff",
    fontSize: 14,
  },
  bottomPadding: {
    height: 40,
  },
});

export default MoreScreen;
