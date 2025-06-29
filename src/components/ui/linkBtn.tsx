import { useRouter } from "expo-router";
import { ChevronRightIcon } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
    label: string;
    href?: string;
    onPress?: () => void;
    className?: string;
    textClassName?: string;
};

export default function LinkBtn({
    label,
    onPress,
    href,
    className = "",
    textClassName = "text-black",
}: CustomButtonProps) {

    const router= useRouter();
    const handleLinkPress = () => {
        onPress && onPress();
        href && router.push(href);
    }
    return (
        <TouchableOpacity
            onPress={handleLinkPress}
            className={`flex justify-between flex-row p-4 items-center mt-4 ${className}`}
        >
            <Text className={`font-semibold ${textClassName}`}>{label}</Text>
            <ChevronRightIcon />
        </TouchableOpacity>
    );
}
