import React from "react";
import { View, Text } from "react-native";
import { CheckIcon, type LucideIcon } from "lucide-react-native";
import MutedText from "./typography";

type Activity = {
    icon: LucideIcon; // icon component, not element
    label: string;
    description?: string;
    hour: number;
    minute: number;
    done?: boolean;
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
                const previousIndex = index - 1 <= 0 ? 0 : index - 1;
                const previousActivity = activities[previousIndex]
                return (
                    <View key={index} className="flex-row items-start">
                        <View className="items-center mr-8">
                            {activity.done ? (
                                <CheckIcon size={24} color="#2b7fff" />
                            ) : (
                                <Icon size={24} />
                            )}

                            {!isLast && (
                                <View
                                    className={`w-px flex-1 mt-1 mb-1 ${activity.done ? "bg-blue-500" : "bg-gray-400"
                                        }`}
                                />
                            )}
                        </View>

                        <View className="pb-6">
                            <Text className="font-semibold text-base">{activity.label}</Text>
                            {activity.description && (
                                <Text className="text-gray-500 mt-1">{activity.description}</Text>
                            )}
                            <MutedText>
                                {activity.hour}h{activity.minute}
                            </MutedText>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}
