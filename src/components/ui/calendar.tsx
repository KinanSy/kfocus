import { Calendar as CalendarInstance } from "react-native-calendars"

type CalendarProps = {
    onDayPress? : () => void
}

export default function Calendar({
    onDayPress
}
: CalendarProps) {

    return (
        <CalendarInstance
            onDayPress={onDayPress}
        />

    )
}