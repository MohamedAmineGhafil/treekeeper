import React from "react";
import { View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export const Card = ({ children, style, ...props }: CardProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#1A1A1A",
          borderRadius: 16,
          padding: 20,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
