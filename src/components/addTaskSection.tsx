import { useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "./ui/btn";
import Input from "./ui/input";
import Section from "./ui/section";
import { H3 } from "./ui/typography";
import { Picker } from '@react-native-picker/picker';
import Select from "./ui/select";
import formatDate from "@/lib/formatDate";

export default function AddTaskSection() {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [priority, setPriority] = useState<string>();
    const priorityOptions = [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
    ];

    const onChange = (event: any, selectedDate?: Date) => {
        setShowPicker(Platform.OS === "ios"); // for iOS, keep showing
        if (selectedDate) setDate(selectedDate);
    };

    return (
        <Section>
            <H3 className="font-extrabold">Add task</H3>
            <Section>
                <Input
                    className="border border-gray-300 rounded-lg p-4 text-base mt-4"
                    placeholder="Label"
                />
                <Input
                    className="border border-gray-300 rounded-lg p-4 text-base mt-4"
                    placeholder="Description"
                />
            </Section>
            <Section>
                <Select
                    value={priority}
                    onValueChange={itemValue => setPriority(itemValue)}
                    options={priorityOptions}
                    placeholder="Select Priority"
                />
            </Section>
            <Section>
                <Input
                    className="border border-gray-300 rounded-lg p-4 text-base mt-4"
                    placeholder="Date"
                    readOnly
                    value={formatDate(date.toISOString())}
                />
                <Btn label="Pick Date" onPress={() => setShowPicker(true)} />

                {showPicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </Section>

            <Section>
                <Btn label="Add New Task" />
            </Section>
        </Section>
    );
}
