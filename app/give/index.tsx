import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

type GiftOption = {
  type: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  description: string;
  impact: string;
  price: number;
  color: string;
};

interface GiftCardProps {
  gift: GiftOption;
}

const giftTrees: GiftOption[] = [
  {
    type: "Birthday Gift",
    icon: "cake-variant",
    description: "Give the gift of life on their special day",
    impact: "Offsets 1 ton of CO₂",
    price: 29.99,
    color: "#F472B6",
  },
  {
    type: "Anniversary",
    icon: "heart",
    description: "Grow love and nature together",
    impact: "Creates habitat for wildlife",
    price: 34.99,
    color: "#EC4899",
  },
  {
    type: "New Home",
    icon: "home",
    description: "A tree grows with their new beginning",
    impact: "Improves local air quality",
    price: 39.99,
    color: "#60A5FA",
  },
  {
    type: "Memorial",
    icon: "flower",
    description: "A living tribute to honor memories",
    impact: "Lasting legacy for generations",
    price: 49.99,
    color: "#8B5CF6",
  },
];

const GiftCard: React.FC<GiftCardProps> = ({ gift }) => (
  <TouchableOpacity style={styles.giftCard}>
    <Card>
      <View style={styles.giftContent}>
        <View
          style={[styles.iconContainer, { backgroundColor: `${gift.color}20` }]}
        >
          <MaterialCommunityIcons
            name={gift.icon}
            size={32}
            color={gift.color}
          />
        </View>
        <Text style={styles.giftType}>{gift.type}</Text>
        <Text style={styles.giftDescription}>{gift.description}</Text>
        <Text style={styles.giftImpact}>{gift.impact}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${gift.price}</Text>
          <TouchableOpacity
            style={[styles.selectButton, { backgroundColor: gift.color }]}
          >
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);

const GiveScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Give a Tree</Text>
      </View>

      <View style={styles.impactMessage}>
        <Text style={styles.impactTitle}>Give the Gift of Nature</Text>
        <Text style={styles.impactDescription}>
          Each tree you gift helps combat climate change and creates a lasting
          impact
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.giftContainer}
        showsVerticalScrollIndicator={false}
      >
        {giftTrees.map((gift, index) => (
          <GiftCard key={index} gift={gift} />
        ))}

        <TouchableOpacity style={styles.customGiftCard}>
          <Card>
            <View style={styles.customGiftContent}>
              <MaterialCommunityIcons
                name="gift-outline"
                size={32}
                color="#22C55E"
              />
              <Text style={styles.customGiftText}>Create Custom Gift</Text>
              <Text style={styles.customGiftDescription}>
                Design your own tree gifting experience
              </Text>
            </View>
          </Card>
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
  impactMessage: {
    padding: 20,
    marginBottom: 10,
  },
  impactTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  impactDescription: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: 24,
  },
  giftContainer: {
    padding: 20,
  },
  giftCard: {
    marginBottom: 16,
  },
  giftContent: {
    padding: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  giftType: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  giftDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: 8,
  },
  giftImpact: {
    fontSize: 14,
    color: "#22C55E",
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  selectButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  customGiftCard: {
    marginTop: 8,
  },
  customGiftContent: {
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  customGiftText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  customGiftDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
  },
});

export default GiveScreen;
