import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export const Button = ({
  children,
  variant = "default",
  style,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          padding: 12,
          borderRadius: 8,
          backgroundColor: variant === "default" ? "#22C55E" : "transparent",
          borderWidth: variant === "outline" ? 1 : 0,
          borderColor: variant === "outline" ? "#22C55E" : undefined,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
