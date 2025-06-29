import React from "react";
import { Picker, PickerProps } from "@react-native-picker/picker";
import { View } from "react-native";

type Option = {
  label: string;
  value: string;
};

type SelectProps = PickerProps & {
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  className?: string;
};

export default function Select({
  value,
  onValueChange,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <View className={`border border-gray-300 rounded-lg  mt-4 bg-white ${className}`}>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        {...props}
      >
        {options.map((opt) => (
          <Picker.Item key={opt.value} label={opt.label} value={opt.value} style={{fontSize:14}}/>
        ))}
      </Picker>
    </View>
  );
}
