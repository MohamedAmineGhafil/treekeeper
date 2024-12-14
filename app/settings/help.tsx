import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Card } from "@components/ui/card";

type FAQItem = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

type FAQCategory = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  items: FAQItem[];
};

const HelpScreen = () => {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const faqCategories: FAQCategory[] = [
    {
      title: "Getting Started",
      icon: "rocket-launch",
      items: [
        {
          question: "How do I start tracking my first tree?",
          answer:
            "Navigate to the Track Tree section, click on 'Add New Tree', and follow the simple setup process to begin tracking your tree's growth and health.",
        },
        {
          question: "What information do I need to track a tree?",
          answer:
            "You'll need basic information like tree species, planting date, location, and an optional photo. Our system will help guide you through the process.",
        },
      ],
    },
    {
      title: "Tree Care",
      icon: "tree",
      items: [
        {
          question: "How often should I water my tree?",
          answer:
            "Watering frequency depends on the tree species, age, and climate. Generally, young trees need water every 7-10 days, while established trees need less frequent watering.",
        },
        {
          question: "How can I tell if my tree is healthy?",
          answer:
            "Look for signs like vibrant leaves, steady growth, and strong branches. Our app provides detailed health monitoring guides for different species.",
        },
      ],
    },
    {
      title: "Account & Settings",
      icon: "cog",
      items: [
        {
          question: "How do I update my profile?",
          answer:
            "Go to Settings > Edit Profile to update your personal information and preferences.",
        },
        {
          question: "Can I export my tree data?",
          answer:
            "Yes, you can export your data through Settings > Privacy > Download My Data.",
        },
      ],
    },
  ];

  const toggleItem = (categoryTitle: string, question: string) => {
    const key = `${categoryTitle}-${question}`;
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help Center</Text>
      </View>

      <ScrollView style={styles.content}>
        {faqCategories.map((category, categoryIndex) => (
          <View key={categoryIndex} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <MaterialCommunityIcons
                name={category.icon}
                size={24}
                color="#22C55E"
              />
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </View>

            {category.items.map((item, itemIndex) => {
              const isExpanded = expandedItems.has(
                `${category.title}-${item.question}`
              );
              return (
                <TouchableOpacity
                  key={itemIndex}
                  onPress={() => toggleItem(category.title, item.question)}
                >
                  <Card>
                    <View style={styles.faqItem}>
                      <View style={styles.questionRow}>
                        <Text style={styles.question}>{item.question}</Text>
                        <MaterialCommunityIcons
                          name={isExpanded ? "chevron-up" : "chevron-down"}
                          size={24}
                          color="#666"
                        />
                      </View>
                      {isExpanded && (
                        <Text style={styles.answer}>{item.answer}</Text>
                      )}
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {/* Additional Help Button */}
        <TouchableOpacity
          style={styles.supportButton}
          onPress={() => router.push("/settings/contact")}
        >
          <MaterialCommunityIcons
            name="message-question"
            size={24}
            color="#22C55E"
          />
          <Text style={styles.supportButtonText}>
            Need more help? Contact Support
          </Text>
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
  faqItem: {
    padding: 16,
  },
  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    flex: 1,
    marginRight: 16,
  },
  answer: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    marginTop: 12,
    lineHeight: 20,
  },
  supportButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
    padding: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 32,
  },
  supportButtonText: {
    color: "#22C55E",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HelpScreen;
