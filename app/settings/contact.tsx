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
import { Card } from "@components/ui/card";

const ContactScreen = () => {
  const router = useRouter();

  const contactMethods = [
    {
      icon: "email-outline",
      title: "Email Us",
      description: "support@treekeeper.com",
      action: () => console.log("Email pressed"),
    },
    {
      icon: "chat-outline",
      title: "Live Chat",
      description: "Available Mon-Fri, 9AM-5PM",
      action: () => console.log("Chat pressed"),
    },
    {
      icon: "phone-outline",
      title: "Call Us",
      description: "+1 (555) 123-4567",
      action: () => console.log("Phone pressed"),
    },
  ];

  const socialLinks = [
    { icon: "twitter", label: "Twitter" },
    { icon: "instagram", label: "Instagram" },
    { icon: "facebook", label: "Facebook" },
    { icon: "linkedin", label: "LinkedIn" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Get in Touch</Text>

        {/* Contact Methods */}
        <View style={styles.methodsContainer}>
          {contactMethods.map((method, index) => (
            <TouchableOpacity key={index} onPress={method.action}>
              <Card>
                <View style={styles.methodCard}>
                  <MaterialCommunityIcons
                    name={method.icon}
                    size={28}
                    color="#22C55E"
                  />
                  <Text style={styles.methodTitle}>{method.title}</Text>
                  <Text style={styles.methodDescription}>
                    {method.description}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Social Media */}
        <Text style={[styles.subtitle, styles.socialTitle]}>Follow Us</Text>
        <View style={styles.socialContainer}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity key={index} style={styles.socialButton}>
              <MaterialCommunityIcons
                name={social.icon}
                size={24}
                color="#22C55E"
              />
              <Text style={styles.socialLabel}>{social.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Office Info */}
        <Card>
          <View style={styles.officeInfo}>
            <Text style={styles.officeTitle}>Main Office</Text>
            <Text style={styles.officeAddress}>
              123 Green Street{"\n"}
              Eco City, EC 12345{"\n"}
              United States
            </Text>
          </View>
        </Card>
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
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 16,
  },
  methodsContainer: {
    gap: 12,
    marginBottom: 32,
  },
  methodCard: {
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  methodDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
  },
  socialTitle: {
    marginTop: 8,
  },
  socialContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 32,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 8,
  },
  socialLabel: {
    color: "#fff",
    fontSize: 14,
  },
  officeInfo: {
    padding: 16,
  },
  officeTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  officeAddress: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    lineHeight: 20,
  },
});

export default ContactScreen;
