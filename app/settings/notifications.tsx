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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Card } from "@components/ui/card";

type NotificationSetting = {
  title: string;
  description: string;
  enabled: boolean;
};

type NotificationCategory = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  settings: NotificationSetting[];
};

const NotificationsScreen = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<NotificationCategory[]>([
    {
      title: "Tree Care",
      icon: "tree",
      settings: [
        {
          title: "Watering Reminders",
          description: "Get notified when it's time to water your trees",
          enabled: true,
        },
        {
          title: "Health Checks",
          description: "Reminders for regular tree health inspections",
          enabled: true,
        },
      ],
    },
    {
      title: "Community",
      icon: "account-group",
      settings: [
        {
          title: "New Followers",
          description: "When someone follows your forest",
          enabled: true,
        },
        {
          title: "Mentions",
          description: "When someone mentions you in a comment",
          enabled: false,
        },
      ],
    },
    {
      title: "Updates",
      icon: "bell",
      settings: [
        {
          title: "App Updates",
          description: "New features and improvements",
          enabled: true,
        },
        {
          title: "Tips & Tricks",
          description: "Helpful tree care advice",
          enabled: true,
        },
      ],
    },
  ]);

  const toggleNotification = (categoryIndex: number, settingIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].settings[settingIndex].enabled =
      !newCategories[categoryIndex].settings[settingIndex].enabled;
    setCategories(newCategories);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <ScrollView style={styles.content}>
        {categories.map((category, categoryIndex) => (
          <View key={categoryIndex} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <MaterialCommunityIcons
                name={category.icon}
                size={24}
                color="#22C55E"
              />
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </View>

            <Card>
              {category.settings.map((setting, settingIndex) => (
                <View
                  key={settingIndex}
                  style={[
                    styles.settingItem,
                    settingIndex !== category.settings.length - 1 &&
                      styles.borderBottom,
                  ]}
                >
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingTitle}>{setting.title}</Text>
                    <Text style={styles.settingDescription}>
                      {setting.description}
                    </Text>
                  </View>
                  <Switch
                    value={setting.enabled}
                    onValueChange={() =>
                      toggleNotification(categoryIndex, settingIndex)
                    }
                    trackColor={{ false: "#767577", true: "#22C55E" }}
                    thumbColor={setting.enabled ? "#fff" : "#f4f3f4"}
                  />
                </View>
              ))}
            </Card>
          </View>
        ))}

        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear All Notifications</Text>
        </TouchableOpacity>
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
  categorySection: {
    marginBottom: 24,
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
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
  clearButton: {
    marginTop: 8,
    marginBottom: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  clearButtonText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default NotificationsScreen;
