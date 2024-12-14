// context/CartContext.tsx
import React, { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.id === item.id);
      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getItemCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
