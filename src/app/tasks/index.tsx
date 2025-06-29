import AddTaskSection from "@/components/addTaskSection";
import ItemsList from "@/components/ui/tasksList";
import Section from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";
import { CalendarIcon, ClipboardListIcon, HomeIcon, HospitalIcon } from "lucide-react-native";
import TasksList from "@/components/ui/tasksList";
import Task from "@/types/task";
import AssignTaskSheet, { AssignTaskSheetRef } from "@/components/assignTaskSheet";
import { useEffect, useRef } from "react";
import { View } from "react-native";


export default function Page() {
    const assignTaskSheetRef = useRef<AssignTaskSheetRef>(null);

    const exampleItems: Task[] = [
        {
            id: "task-7",
            icon: ClipboardListIcon,
            label: "Weekly Planning",
            description: "Plan next week's tasks",
            status: "backlog",
        },
        {
            id: "task-8",
            icon: CalendarIcon,
            label: "Doctor Appointment",
            description: "Health check-up at 3 PM",
            status: "backlog",
        },
        {
            id: "task-9",
            icon: HomeIcon,
            label: "Household Errands",
            description: "Groceries and laundry",
            status: "backlog",
        },

    ]
    const handleAssignDate = (taskId: string, date: string) => {
        console.log("Assigning task to:", date);
    };
    const handleTaskLongPress = (taskId: string) => {
        console.log("Long pressed task id:", taskId);
        if (assignTaskSheetRef.current)
            assignTaskSheetRef.current.open(taskId);
    };
    return (
        <View className="flex-1 h-full p-4">
            <Section className="mt-0">
                <H2 className="text-center mt-0">Backlog</H2>
                <TasksList items={exampleItems} onLongPress={handleTaskLongPress}></TasksList>
            </Section>
            <Section className="mt-20">
                <AddTaskSection />
            </Section>
            <AssignTaskSheet ref={assignTaskSheetRef} onAssign={handleAssignDate}/>
        </View>
    )
}