// app/shop/cart.tsx
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
import { Card } from "@components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCart } from "../../context/CartContext";

export default function CartScreen() {
  const router = useRouter();
  const { items, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Cart</Text>
        </View>
        <View style={styles.emptyCart}>
          <MaterialCommunityIcons name="cart-outline" size={64} color="#666" />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => router.back()}
          >
            <Text style={styles.shopButtonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <ScrollView style={styles.cartContent}>
        {items.map((item) => (
          <Card key={item.id} style={styles.cartItem}>
            <View style={styles.itemContent}>
              <View style={styles.itemInfo}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                  >
                    <MaterialCommunityIcons
                      name="close"
                      size={20}
                      color="#666"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemQuantity}>
                  Quantity: {item.quantity}
                </Text>
                <Text style={styles.itemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          </Card>
        ))}

        <Card style={styles.summaryCard}>
          <View style={styles.summaryContent}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>
                ${getTotalPrice().toFixed(2)}
              </Text>
            </View>
            <View style={[styles.summaryRow, styles.borderTop]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                ${getTotalPrice().toFixed(2)}
              </Text>
            </View>
          </View>
        </Card>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => console.log("Proceed to checkout")}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  cartContent: {
    padding: 20,
  },
  cartItem: {
    marginBottom: 12,
  },
  itemContent: {
    padding: 16,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  itemQuantity: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#22C55E",
  },
  removeButton: {
    padding: 4,
  },
  summaryCard: {
    marginTop: 20,
    marginBottom: 20,
  },
  summaryContent: {
    padding: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
    marginTop: 8,
    paddingTop: 16,
  },
  summaryLabel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.6)",
  },
  summaryValue: {
    fontSize: 16,
    color: "#fff",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22C55E",
  },
  checkoutButton: {
    backgroundColor: "#22C55E",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: "#666",
    marginVertical: 16,
  },
  shopButton: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  shopButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
