import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Modal, Pressable } from "react-native";

interface ReportCalendarPickerProp {
  show: boolean;
  tempMonth: number;
  tempYear: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTempMonth: React.Dispatch<React.SetStateAction<number>>;
  setTempYear: React.Dispatch<React.SetStateAction<number>>;
  confirmSelection: () => void;
}

const ReportCalendarPicker = ({
  show,
  setShow,
  setTempMonth,
  setTempYear,
  tempYear,
  tempMonth,
  confirmSelection,
}: ReportCalendarPickerProp) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 41 }, (_, i) => currentYear - 15 + i);

  return (
    <Modal visible={show} transparent animationType="slide">
      <Pressable className="flex-1 justify-end" onPress={() => setShow(false)}>
        <Pressable
          className="bg-gray-100 rounded-t-2xl p-4"
          onPress={(e) => e.stopPropagation()}
        >
          <ThemedView className="flex-row justify-between mb-2">
            <Pressable onPress={() => setShow(false)}>
              <ThemedText className="text-red-500 font-semibold text-lg">
                Cancel
              </ThemedText>
            </Pressable>
            <Pressable onPress={confirmSelection}>
              <ThemedText className="text-[#2E8B57] font-semibold text-lg">
                Done
              </ThemedText>
            </Pressable>
          </ThemedView>

          <ThemedView className="flex-row">
            <ThemedView className="flex-1">
              <Picker
                selectedValue={tempYear}
                onValueChange={(val: number) => setTempYear(val)}
              >
                {years.map((y) => (
                  <Picker.Item key={y} label={y.toString()} value={y} />
                ))}
              </Picker>
            </ThemedView>

            <ThemedView className="flex-1">
              <Picker
                selectedValue={tempMonth}
                onValueChange={(val: number) => setTempMonth(val)}
              >
                {months.map((m, idx) => (
                  <Picker.Item key={m} label={m} value={idx} />
                ))}
              </Picker>
            </ThemedView>
          </ThemedView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ReportCalendarPicker;
