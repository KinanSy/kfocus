import { LucideIcon } from "lucide-react-native";
import ItemsList from "./ui/tasksList";
import DayTasks from "@/types/dayTasks";

export default function DayTasksList({
    date,
    tasksList,
    editable = false
}: {
    date: string;
    tasksList: DayTasks;
    editable?: boolean
}) {

    return (
        <ItemsList items={tasksList.tasks} />
    )
}