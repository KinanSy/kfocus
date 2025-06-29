import { useEffect, useState } from "react";
import { Calendar as CalendarInstance } from "react-native-calendars";

type CalendarProps = {
  onDaySelect?: (date: string) => void;
  markedDates?: string[];
  selectToday?: boolean;
};

export default function Calendar({
  onDaySelect,
  markedDates = [],
  selectToday = true,
  ...props
}: CalendarProps) {
  const today = new Date().toISOString().split("T")[0];
  const defaultDay = selectToday ? today : null;
  const [selectedDate, setSelectedDate] = useState<string | null>(defaultDay);

  useEffect(() => {
    if (selectedDate && onDaySelect) {
      onDaySelect(selectedDate);
    }
  }, [selectedDate]);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  const buildMarkedDates = () => {
    const result: Record<string, any> = {};

    markedDates.forEach((date) => {
      result[date] = { marked: true };
    });

    if (selectedDate) {
      result[selectedDate] = {
        ...(result[selectedDate] || {}),
        selected: true,
      };
    }

    return result;
  };

  return (
    <CalendarInstance
      onDayPress={handleDayPress}
      markedDates={buildMarkedDates()}
      {...props}
    />
  );
}
