import { useEffect, useState } from "react";
import { Calendar as CalendarInstance } from "react-native-calendars"

type CalendarProps = {
    onDaySelect?: (date: string) => void,
}

export default function Calendar({
    onDaySelect,
    ...props
}
    : CalendarProps) {

    const [selectedDate, setSelectedDate] = useState<string>();

    useEffect(() => {
        onDaySelect && onDaySelect(selectedDate);
    }, [selectedDate])

    const handleDayPress = (day) => {
        const dayDate = day.dateString;
        setSelectedDate(dayDate);
    }
    return (
        <CalendarInstance
            onDayPress={handleDayPress}
            markedDates={
                selectedDate
                    ? { [selectedDate]: { selected: true } }
                    : {}
            }
            {...props}
        />

    )
}