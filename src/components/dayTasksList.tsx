import { LucideIcon } from "lucide-react-native";
import ItemsList from "./ui/ItemsList";

type Item = {
    icon: LucideIcon;
    label: string;
    description?: string;
}

type dayTasksList = {
    date: string;
    tasks: Item[];
}
export default function DayTasksList({
    date,
    tasksList,
    editable = false
}: {
    date: string;
    tasksList: dayTasksList;
    editable?: boolean
}) {

    return (
        <ItemsList items={tasksList.tasks} />
    )
}