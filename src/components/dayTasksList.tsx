import { LucideIcon } from "lucide-react-native";
import ItemsList from "./ui/tasksList";
import DayTasks from "@/types/dayTasks";
import Section from "./ui/section";
import MutedText, { H3 } from "./ui/typography";
import formatDate from "@/lib/formatDate";

export default function DayTasksList({
    date,
    tasksList,
    editable = false
}: {
    date: string;
    tasksList: DayTasks | [];
    editable?: boolean
}) {

    const dateText = formatDate(date)
    return (
        <Section>
            <H3>{dateText}</H3>
            {!Array.isArray(tasksList) ? <ItemsList items={tasksList.tasks} /> : <MutedText>No tasks scheduled yet.</MutedText>}
        </Section>
    )
}