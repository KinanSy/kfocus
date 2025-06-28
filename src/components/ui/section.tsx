
import React, { ReactNode } from "react";
import { View } from "react-native";

type SectionProps = {
    className?: string;
    children?: ReactNode;
};

export default function Section({
    className = "",
    children
}: SectionProps) {
    return (
        <View className={`mt-4 ${className}`}>
            {children}
        </View>
    );
}