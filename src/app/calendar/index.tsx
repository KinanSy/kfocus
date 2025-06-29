import DayTasksList from "@/components/dayTasksList";
import Calendar from "@/components/ui/calendar";
import Section from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";
import DayTasks from "@/types/dayTasks";
import {
    CalendarIcon,
    CheckCircleIcon,
    ClockIcon,
    SettingsIcon,
    HomeIcon,
    ClipboardListIcon,
} from "lucide-react-native";
export default function Page() {

    const tasksByDay: DayTasks[] = [
        {
            id: "day-1",
            date: "2025-06-27",
            tasks: [
                {
                    id: "task-1",
                    icon: HomeIcon,
                    label: "Morning Routine",
                    description: "Meditation and journaling",
                    status: "planned",
                },
                {
                    id: "task-2",
                    icon: ClipboardListIcon,
                    label: "Team Meeting",
                    description: "Discuss sprint progress at 10 AM",
                    status: "planned",
                },
                {
                    id: "task-3",
                    icon: CalendarIcon,
                    label: "Client Call",
                    description: "Review new requirements",
                    status: "completed",
                },
            ],
        },
        {
            id: "day-2",
            date: "2025-06-28",
            tasks: [
                {
                    id: "task-4",
                    icon: CheckCircleIcon,
                    label: "Code Review",
                    description: "Review PRs on GitHub",
                    status: "planned",
                },
                {
                    id: "task-5",
                    icon: ClockIcon,
                    label: "Focus Session",
                    description: "2-hour deep work on UI",
                    status: "planned",
                },
                {
                    id: "task-6",
                    icon: SettingsIcon,
                    label: "Dev Environment",
                    description: "Update dependencies",
                    status: "completed",
                },
            ],
        },
        {
            id: "day-3",
            date: "2025-06-29",
            tasks: [
                {
                    id: "task-7",
                    icon: ClipboardListIcon,
                    label: "Weekly Planning",
                    description: "Plan next week's tasks",
                    status: "planned",
                },
                {
                    id: "task-8",
                    icon: CalendarIcon,
                    label: "Doctor Appointment",
                    description: "Health check-up at 3 PM",
                    status: "planned",
                },
                {
                    id: "task-9",
                    icon: HomeIcon,
                    label: "Household Errands",
                    description: "Groceries and laundry",
                    status: "completed",
                },                {
                    id: "task-7",
                    icon: ClipboardListIcon,
                    label: "Weekly Planning",
                    description: "Plan next week's tasks",
                    status: "planned",
                },
                {
                    id: "task-8",
                    icon: CalendarIcon,
                    label: "Doctor Appointment",
                    description: "Health check-up at 3 PM",
                    status: "planned",
                },
                {
                    id: "task-9",
                    icon: HomeIcon,
                    label: "Household Errands",
                    description: "Groceries and laundry",
                    status: "completed",
                },                {
                    id: "task-7",
                    icon: ClipboardListIcon,
                    label: "Weekly Planning",
                    description: "Plan next week's tasks",
                    status: "planned",
                },
                {
                    id: "task-8",
                    icon: CalendarIcon,
                    label: "Doctor Appointment",
                    description: "Health check-up at 3 PM",
                    status: "planned",
                },
                {
                    id: "task-9",
                    icon: HomeIcon,
                    label: "Household Errands",
                    description: "Groceries and laundry",
                    status: "completed",
                },
            ],
        },
        
    ];

    return (
        <Section className="mt-5 px-4 pb-4">
            <Calendar></Calendar>
            <DayTasksList date="2025-06-29" tasksList={tasksByDay.find((e) => { return e.date == "2025-06-29" })} />
        </Section>
    )
}