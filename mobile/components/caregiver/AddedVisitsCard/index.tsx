import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";

export interface AddedVisitsCardProps {
  time: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  name: string;
  task: string;
}

const AddedVisitsCard = ({
  name,
  priority,
  task,
  time,
}: AddedVisitsCardProps) => {
  let priorityColor = "";
  switch (priority) {
    case "HIGH":
      priorityColor = "bg-[#FF3B301A] text-[#FF3B30]";
      break;
    case "LOW":
      priorityColor = "bg-[#8E8E931A] text-[#8E8E93]";
      break;
    case "MEDIUM":
      priorityColor = "bg-[#FFD6001A] text-[#FFD600]";
      break;
    default:
      priorityColor = "";
  }

  return (
    <ThemedView className="bg-[#FFFFFF] shadow-subtle rounded-[8px] py-3 px-5">
      <ThemedView className="flex justify-between items-center flex-row">
        <ThemedText className="text-base font-medium">{time}</ThemedText>
        <ThemedText className={`${priorityColor} rounded-full p-2 text-sm `}>
          {priority}
        </ThemedText>
      </ThemedView>

      <ThemedText className="text-base font-bold">{name}</ThemedText>
      <ThemedText className="text-sm text-[#6E6E73]">{task}</ThemedText>
    </ThemedView>
  );
};

export default AddedVisitsCard;
