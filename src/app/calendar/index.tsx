import DayTasksList from "@/components/dayTasksList";
import Calendar from "@/components/ui/calendar";
import Section from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";
import {
    CalendarIcon,
    CheckCircleIcon,
    ClockIcon,
    SettingsIcon,
    HomeIcon,
    ClipboardListIcon,
} from "lucide-react-native";
export default function Page(){

        const tasksByDay = [
        {
            date: "2025-06-27",
            tasks: [
                {
                    icon: HomeIcon,
                    label: "Morning Routine",
                    description: "Meditation and journaling",
                },
                {
                    icon: ClipboardListIcon,
                    label: "Team Meeting",
                    description: "Discuss sprint progress at 10 AM",
                },
                {
                    icon: CalendarIcon,
                    label: "Client Call",
                    description: "Review new requirements",
                },
            ],
        },
        {
            date: "2025-06-28",
            tasks: [
                {
                    icon: CheckCircleIcon,
                    label: "Code Review",
                    description: "Review PRs on GitHub",
                },
                {
                    icon: ClockIcon,
                    label: "Focus Session",
                    description: "2-hour deep work on UI",
                },
                {
                    icon: SettingsIcon,
                    label: "Dev Environment",
                    description: "Update dependencies",
                },
            ],
        },
        {
            date: "2025-06-29",
            tasks: [
                {
                    icon: ClipboardListIcon,
                    label: "Weekly Planning",
                    description: "Plan next week's tasks",
                },
                {
                    icon: CalendarIcon,
                    label: "Doctor Appointment",
                    description: "Health check-up at 3 PM",
                },
                {
                    icon: HomeIcon,
                    label: "Household Errands",
                    description: "Groceries and laundry",
                },
            ],
        }
    ]

    return(
        <Section className="mt-0">
            <Calendar></Calendar>
            <DayTasksList date="2025-06-29" tasksList={tasksByDay.find((e) => {return e.date == "2025-06-29"})} />
        </Section>
    )
}