import { LucideIcon } from "lucide-react-native";
import Section from "./section";
import MutedText, { H3 } from "./typography";
import { Text, View } from "react-native";
import AddTaskSection from "../addTaskSection";

type Item = {
    icon: LucideIcon;
    label: string;
    description?: string;
}

type ItemsListProps = {
    items: Item[];
}
export default function ItemsList({ items }: ItemsListProps) {


    return (
        <>
            <Section className="gap-y-6">
                {items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <View key={index} className="flex flex-row">
                            <View className="p-4 rounded-lg flex justify-center items-center bg-gray-200/40">
                                <Icon></Icon>
                            </View>
                            <View className="ml-4 p-1">
                                <Text className="font-semibold text-lg">{item.label}</Text>
                                <MutedText>{item.description}</MutedText>
                            </View>
                        </View>
                    )
                })}
            </Section>
        </>
    )
}