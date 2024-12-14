import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCart } from "../../context/CartContext";

export default function ShopScreen() {
  const router = useRouter();
  const { addToCart, getItemCount } = useCart();

  const trees = [
    {
      id: 1,
      name: "Oak Tree",
      price: 29.99,
      co2: "500kg",
      lifespan: "100+ years",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      name: "Pine Tree",
      price: 24.99,
      co2: "400kg",
      lifespan: "80+ years",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "Maple Tree",
      price: 34.99,
      co2: "450kg",
      lifespan: "90+ years",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Shop Trees</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push("/shop/cart")}
        >
          <MaterialCommunityIcons name="cart" size={24} color="#fff" />
          {getItemCount() > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{getItemCount()}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Card>
            <View style={styles.featuredCard}>
              <Text style={styles.featuredTitle}>Plant a Tree, Plant Hope</Text>
              <Text style={styles.featuredText}>
                Each tree you plant helps combat climate change
              </Text>
              <View style={styles.featuredStats}>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="tree"
                    size={24}
                    color="#22C55E"
                  />
                  <Text style={styles.statText}>1000+ Trees</Text>
                </View>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="earth"
                    size={24}
                    color="#22C55E"
                  />
                  <Text style={styles.statText}>50+ Locations</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Trees</Text>
          {trees.map((tree) => (
            <TouchableOpacity key={tree.id} style={styles.treeCard}>
              <Card>
                <View style={styles.treeContent}>
                  <View style={styles.treeImageContainer}>
                    <View style={styles.treePlaceholder} />
                  </View>
                  <View style={styles.treeInfo}>
                    <Text style={styles.treeName}>{tree.name}</Text>
                    <View style={styles.treeStats}>
                      <Text style={styles.treeStat}>CO₂: {tree.co2}</Text>
                      <Text style={styles.treeStat}>{tree.lifespan}</Text>
                    </View>
                    <View style={styles.priceRow}>
                      <Text style={styles.price}>${tree.price}</Text>
                      <TouchableOpacity
                        style={styles.addButton}
                        onPress={() =>
                          addToCart({
                            id: tree.id,
                            name: tree.name,
                            price: tree.price,
                          })
                        }
                      >
                        <Text style={styles.addButtonText}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    position: "relative",
    marginLeft: "auto", // This will push the cart to the right
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#22C55E",
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
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
  section: {
    padding: 20,
  },
  featuredCard: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  featuredText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: 16,
  },
  featuredStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  statItem: {
    alignItems: "center",
    gap: 8,
  },
  statText: {
    color: "#fff",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 16,
  },
  treeCard: {
    marginBottom: 16,
  },
  treeContent: {
    flexDirection: "row",
    padding: 12,
  },
  treeImageContainer: {
    marginRight: 16,
  },
  treePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#262626",
    borderRadius: 8,
  },
  treeInfo: {
    flex: 1,
  },
  treeName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  treeStats: {
    marginBottom: 8,
  },
  treeStat: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22C55E",
  },
  addButton: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
