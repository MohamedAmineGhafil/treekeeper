import React, { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

type Language = {
  code: "en" | "fr";
  name: string;
  localName: string;
};

const languages: Language[] = [
  { code: "en", name: "English", localName: "English" },
  { code: "fr", name: "French", localName: "Français" },
];

const LanguageScreen = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("userLanguage");
      if (savedLanguage) {
        setSelectedLanguage(savedLanguage);
      }
    } catch (error) {
      console.error("Error loading language:", error);
    }
  };

  const selectLanguage = async (langCode: string) => {
    try {
      await AsyncStorage.setItem("userLanguage", langCode);
      setSelectedLanguage(langCode);
      // Here you would typically trigger a language change in your app
    } catch (error) {
      console.error("Error saving language:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Language</Text>
      </View>

      {/* Language Options */}
      <View style={styles.languageContainer}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageOption,
              selectedLanguage === lang.code && styles.selectedOption,
            ]}
            onPress={() => selectLanguage(lang.code)}
          >
            <View style={styles.languageInfo}>
              <Text style={styles.languageName}>{lang.name}</Text>
              <Text style={styles.localName}>{lang.localName}</Text>
            </View>
            {selectedLanguage === lang.code && (
              <MaterialCommunityIcons
                name="check-circle"
                size={24}
                color="#22C55E"
              />
            )}
          </TouchableOpacity>
        ))}
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
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  languageContainer: {
    padding: 20,
  },
  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#1A1A1A",
    marginBottom: 12,
    borderRadius: 12,
  },
  selectedOption: {
    backgroundColor: "#22C55E20",
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  localName: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
});

export default LanguageScreen;
