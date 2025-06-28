import React, { ReactNode } from "react";
import { Text } from "react-native";

type TypographyProps = {
    children: ReactNode;
    className?: string;
};

export function H1({ children, className = "" }: TypographyProps) {
    return (
        <Text className={`text-4xl font-bold my-4 ${className}`}>
            {children}
        </Text>
    );
}


export default function MutedText({ children, className = "" }: TypographyProps) {
  return (
    <Text className={`text-sm text-gray-500 ${className}`}>
      {children}
    </Text>
  );
}
export function H2({ children, className = "" }: TypographyProps) {
    return (
        <Text className={`text-3xl font-semibold my-3 ${className}`}>
            {children}
        </Text>
    );
}

export function H3({ children, className = "" }: TypographyProps) {
    return (
        <Text className={`text-2xl font-medium my-2 ${className}`}>
            {children}
        </Text>
    );
}

export function Paragraph({ children, className = "" }: TypographyProps) {
    return (
        <Text className={`text-base my-1 ${className}`}>
            {children}
        </Text>
    );
}
