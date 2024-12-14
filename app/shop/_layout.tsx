import { Stack } from "expo-router";
import { CartProvider } from "../../context/CartContext";

export default function ShopLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="cart" />
      </Stack>
    </CartProvider>
  );
}
