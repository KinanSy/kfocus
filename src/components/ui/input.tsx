import React from "react";
import { TextInput, TextInputProps } from "react-native";

type CustomInputProps = TextInputProps & {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  className?: string;
};

export default function Input({
  value,
  onChangeText,
  placeholder = "Type here...",
  className = "",
  ...props
}: CustomInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#888"
      placeholderClassName="text-red-500"
      className={`border bg-white border-gray-300 rounded-lg p-4 font-semibold text-base ${className}`}
      {...props}
    />
  );
}
