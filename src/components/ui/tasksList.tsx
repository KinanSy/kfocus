import { LucideIcon } from "lucide-react-native";
import Section from "./section";
import MutedText, { H3 } from "./typography";
import { Text, TouchableOpacity, View } from "react-native";
import Task from "@/types/task";
import { useRef } from "react";
import AssignTaskSheet, { AssignTaskSheetRef } from "../assignTaskSheet";


type TasksListProps = {
    items: Task[];
    onLongPress? : (id: string) => void;
    editable?: boolean;
}
export default function TasksList({ items,onLongPress, editable = false }: TasksListProps) {



    return (
        <Section className="gap-y-6">
            {items.map((task, index) => {
                const Icon = task.icon;
                const taskAssignable = editable && task.status == "backlog"

                return (
                    <TouchableOpacity key={index} onLongPress={() => onLongPress && onLongPress(task.id)}>
                        <View className="flex flex-row">
                            <View className="p-4 rounded-lg flex justify-center items-center bg-gray-200/40">
                                <Icon></Icon>
                            </View>
                            <View className="ml-4 p-1">
                                <Text className="font-semibold text-lg">{task.label}</Text>
                                <MutedText>{task.description}</MutedText>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </Section>
    )
}