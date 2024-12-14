import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useColorScheme } from "@hooks/useColorScheme";

const SettingsScreen = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const settingsSections = [
    {
      title: "Account",
      items: [
        {
          icon: "account-edit",
          label: "Edit Profile",
          action: () => router.push("/settings/profile"),
          showArrow: true,
        },
        {
          icon: "bell-outline",
          label: "Notifications",
          action: () => router.push("/settings/notifications"),
          showArrow: true,
        },
        {
          icon: "shield-check-outline",
          label: "Privacy",
          action: () => router.push("/settings/privacy"),
          showArrow: true,
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: "theme-light-dark",
          label: "Dark Mode",
          action: toggleDarkMode,
          showArrow: false,
          custom: (
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ false: "#767577", true: "#22C55E" }}
              thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            />
          ),
        },
        {
          icon: "translate",
          label: "Language",
          action: () => router.push("/settings/language"),
          showArrow: true,
        },
        {
          icon: "map-marker-outline",
          label: "Location",
          action: () => router.push("/settings/location"),
          showArrow: true,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: "help-circle-outline",
          label: "Help Center",
          action: () => router.push("/settings/help"),
          showArrow: true,
        },
        {
          icon: "information-outline",
          label: "About",
          action: () => router.push("/settings/about"),
          showArrow: true,
        },
        {
          icon: "email-outline",
          label: "Contact Us",
          action: () => router.push("/settings/contact"),
          showArrow: true,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>

        {settingsSections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Card>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    styles.settingItem,
                    itemIndex !== section.items.length - 1 &&
                      styles.borderBottom,
                  ]}
                  onPress={item.action}
                >
                  <View style={styles.settingIcon}>
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={24}
                      color="#22C55E"
                    />
                  </View>
                  <Text style={styles.settingLabel}>{item.label}</Text>
                  {item.custom
                    ? item.custom
                    : item.showArrow && (
                        <MaterialCommunityIcons
                          name="chevron-right"
                          size={24}
                          color="#666"
                        />
                      )}
                </TouchableOpacity>
              ))}
            </Card>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

interface Styles {
  container: {
    flex: number;
    backgroundColor: string;
  };
  header: {
    padding: number;
  };
  headerText: {
    fontSize: number;
    fontWeight: "bold";
    color: string;
  };
  section: {
    paddingHorizontal: number;
    marginBottom: number;
  };
  sectionTitle: {
    fontSize: number;
    fontWeight: string;
    color: string;
    marginBottom: number;
    marginLeft: number;
  };
  settingItem: {
    flexDirection: "row";
    alignItems: "center";
    padding: number;
  };
  borderBottom: {
    borderBottomWidth: number;
    borderBottomColor: string;
  };
  settingIcon: {
    width: number;
  };
  settingLabel: {
    flex: number;
    fontSize: number;
    color: string;
    marginLeft: number;
  };
  logoutText: {
    color: string;
  };
  versionContainer: {
    padding: number;
    alignItems: "center";
  };
  versionText: {
    color: string;
    fontSize: number;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
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
    alignItems: "center",
    padding: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  settingIcon: {
    width: 40,
  },
  settingLabel: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 8,
  },
  logoutText: {
    color: "#EF4444",
  },
  versionContainer: {
    padding: 20,
    alignItems: "center",
  },
  versionText: {
    color: "#666",
    fontSize: 14,
  },
});

export default SettingsScreen;
