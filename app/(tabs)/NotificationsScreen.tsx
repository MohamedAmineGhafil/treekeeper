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

type NotificationType = {
  id: number;
  type: "achievement" | "reminder" | "social" | "milestone";
  title: string;
  message: string;
  time: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  read: boolean;
};

const NotificationsScreen = () => {
  const notifications: NotificationType[] = [
    {
      id: 1,
      type: "achievement",
      title: "New Achievement!",
      message: "You've planted your 10th tree! Keep growing!",
      time: "2h ago",
      icon: "trophy",
      read: false,
    },
    {
      id: 2,
      type: "reminder",
      title: "Time to Water",
      message: "Your Oak tree needs attention",
      time: "5h ago",
      icon: "water",
      read: false,
    },
    {
      id: 3,
      type: "social",
      title: "New Supporter",
      message: "Alex started following your forest",
      time: "1d ago",
      icon: "account-plus",
      read: true,
    },
    {
      id: 4,
      type: "milestone",
      title: "Impact Milestone",
      message: "Your trees have sequestered 1 ton of CO₂!",
      time: "2d ago",
      icon: "leaf",
      read: true,
    },
  ];

  const getIconColor = (type: NotificationType["type"], read: boolean) => {
    if (read) return "#666";
    switch (type) {
      case "achievement":
        return "#FCD34D";
      case "reminder":
        return "#60A5FA";
      case "social":
        return "#F472B6";
      case "milestone":
        return "#22C55E";
      default:
        return "#22C55E";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notifications</Text>
          <TouchableOpacity>
            <Text style={styles.markAllRead}>Mark all as read</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notificationsContainer}>
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={styles.notificationWrapper}
            >
              <Card>
                <View style={styles.notification}>
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor: `${getIconColor(
                          notification.type,
                          notification.read
                        )}20`,
                      },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={notification.icon}
                      size={24}
                      color={getIconColor(notification.type, notification.read)}
                    />
                  </View>
                  <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                      <Text
                        style={[
                          styles.title,
                          notification.read && styles.readText,
                        ]}
                      >
                        {notification.title}
                      </Text>
                      {!notification.read && <View style={styles.unreadDot} />}
                    </View>
                    <Text
                      style={[
                        styles.message,
                        notification.read && styles.readText,
                      ]}
                    >
                      {notification.message}
                    </Text>
                    <Text style={styles.time}>{notification.time}</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
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
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  markAllRead: {
    color: "#22C55E",
    fontSize: 14,
  },
  notificationsContainer: {
    paddingHorizontal: 20,
  },
  notificationWrapper: {
    marginBottom: 12,
  },
  notification: {
    flexDirection: "row",
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginLeft: 8,
  },
  readText: {
    opacity: 0.6,
  },
});

export default NotificationsScreen;
