import React from "react";
import { View, Text } from "react-native";
import type { LucideIcon } from "lucide-react-native";

type Activity = {
    icon: LucideIcon; // icon component, not element
    label: string;
    description?: string;
};

type TimelineProps = {
    activities: Activity[];
};

export default function Timeline({ activities }: TimelineProps) {
    return (
        <View className="p-4">
            {activities.map((activity, index) => {
                const Icon = activity.icon;
                const isLast = index === activities.length - 1;
                return (
                    <View key={index} className="flex-row items-start">
                        <View className="items-center mr-8">
                            <Icon size={24} />
                            {!isLast && (
                                <View className="w-px bg-gray-400 flex-1 mt-1 mb-1" />
                            )}
                        </View>
                        <View className="pb-6">
                            <Text className="font-semibold text-base">{activity.label}</Text>
                            {activity.description && (
                                <Text className="text-gray-500 mt-1">
                                    {activity.description}
                                </Text>
                            )}
                        </View>
                    </View>
                );
            })}
        </View>
    );
}
