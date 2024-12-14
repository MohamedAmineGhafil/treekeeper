import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Card } from "@components/ui/card";

const ProfileScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Tree enthusiast and environmental advocate",
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
        <TouchableOpacity onPress={() => console.log("Save changes")}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Picture */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <MaterialCommunityIcons name="account" size={60} color="#666" />
          </View>
          <TouchableOpacity style={styles.changePhotoButton}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <Card>
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, name: text })
                }
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
                keyboardType="email-address"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                value={formData.phone}
                onChangeText={(text) =>
                  setFormData({ ...formData, phone: text })
                }
                keyboardType="phone-pad"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                value={formData.location}
                onChangeText={(text) =>
                  setFormData({ ...formData, location: text })
                }
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Bio</Text>
              <TextInput
                style={[styles.input, styles.bioInput]}
                value={formData.bio}
                onChangeText={(text) => setFormData({ ...formData, bio: text })}
                multiline
                numberOfLines={4}
                placeholderTextColor="#666"
              />
            </View>
          </View>
        </Card>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => console.log("Delete account")}
        >
          <Text style={styles.deleteButtonText}>Delete Account</Text>
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
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  saveButton: {
    color: "#22C55E",
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#1A1A1A",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  changePhotoButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#22C55E20",
    borderRadius: 20,
  },
  changePhotoText: {
    color: "#22C55E",
    fontSize: 14,
    fontWeight: "500",
  },
  formContainer: {
    padding: 16,
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    fontSize: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: "top",
  },
  deleteButton: {
    marginTop: 24,
    marginBottom: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#EF444420",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
