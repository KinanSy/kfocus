import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useMemo,
  useState,
} from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";
import Calendar from "./ui/calendar";
import IconBtn from "./ui/iconBtn";
import { CheckIcon } from "lucide-react-native";
import Section from "./ui/section";

export type AssignTaskSheetRef = {
  open: (taskId: string) => void;
  close: () => void;
};

type AssignTaskSheetProps = {
  onAssign: (taskId: string, date: string) => void;
};

const AssignTaskSheet = forwardRef<AssignTaskSheetRef, AssignTaskSheetProps>(
  ({ onAssign }, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [taskId, setTaskId] = useState<string | null>(null);

    const snapPoints = useMemo(() => ["40%"], []);

    useImperativeHandle(ref, () => ({
      open: (id: string) => {
        setTaskId(id);
        bottomSheetRef.current?.snapToIndex(0);
      },
      close: () => {
        bottomSheetRef.current?.close();
      },
    }));

    const handleConfirm = () => {
      if (taskId && selectedDate) {
        onAssign(taskId, selectedDate);
        bottomSheetRef.current?.close();
        setSelectedDate(null);
        setTaskId(null);
      }
    };

    const BottomSheetBackground = ({ style = {} }) => (
      <View
        style={[
          style,
          {
            backgroundColor: "white",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderColor: "#9ca3af",
            borderWidth: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 5,
          },
        ]}
      />
    );

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundComponent={(props) => <BottomSheetBackground {...props} />}
      >
        <BottomSheetView className="p-8">
          <Section className="flex flex-row justify-between">
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Assign Task to a Day
            </Text>
            <IconBtn icon={CheckIcon} onPress={handleConfirm} />
          </Section>
          <Section>
            <Calendar onDaySelect={(day) => setSelectedDate(day)} />
          </Section>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default AssignTaskSheet;
