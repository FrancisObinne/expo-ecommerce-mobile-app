import ClockIcon from "@/assets/icons/ClockIcon";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";

interface TodayScheduleCardProps {
  time?: string;
  title?: string;
}

const TodayScheduleCard = ({ time, title }: TodayScheduleCardProps) => {
  return (
    <ThemedView className="flex-row items-center gap-2 bg-white p-4 rounded-lg shadow-subtle border-b border-b-[#F3F4F6]">
      <ClockIcon color="#2E8B57" />
      <ThemedView>
        <ThemedText className="text-[#111827] text-lg font-semibold">
          {time}
        </ThemedText>
        <ThemedText className="text-lg text-[#4B5563]">{title}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default TodayScheduleCard;
