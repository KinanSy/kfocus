import DayTasksList from "@/components/dayTasksList";
import Calendar from "@/components/ui/calendar";
import PageLayout from "@/components/ui/page";
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
import { useState } from "react";
export default function Page() {

    const [calendarDay, setCalendarDay] = useState<string>();

    const handleDaySelect = (date : string) => {
        setCalendarDay(date);
        console.log(date);
    }
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
                }, {
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
                }, {
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

    const buildMarkedDates = () => {
        const markedDates = []
        tasksByDay.map((e => {
            markedDates.push(e.date)
        }))
        return markedDates
    }
    return (
        <PageLayout>
            <Calendar onDaySelect={handleDaySelect} markedDates={buildMarkedDates()}></Calendar>
            
            {calendarDay && <DayTasksList date={calendarDay} tasksList={tasksByDay.find((e) => { return e.date == calendarDay }) ?? []} />}
        </PageLayout>
    )
}