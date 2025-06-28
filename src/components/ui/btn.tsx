import React from "react";
import { TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
  label: string;
  onPress?: () => void;
  className?: string;
  textClassName?: string;
};

export default function Btn({
  label,
  onPress,
  className = "bg-blue-500",
  textClassName = "text-white",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`p-4 rounded-lg items-center mt-4 ${className}`}
    >
      <Text className={`font-semibold ${textClassName}`}>{label}</Text>
    </TouchableOpacity>
  );
}
