import ClockIcon from "@/assets/icons/ClockIcon";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";

const TodaysVisitCard = ({
  active = false,
  time,
}: {
  active?: boolean;
  time: string;
}) => {
  return (
    <ThemedView
      className={`${active ? "bg-[#2E8B57]" : "bg-[#FFFFFF]"} rounded-[8px] p-3 flex gap-2 items-center w-[63.9375px]`}
    >
      <ClockIcon color={active ? "#ffffff" : "#64748B"} />
      <ThemedText
        className={`${active ? "text-[#ffffff]" : "text-[#64748B]"} font-medium`}
      >
        {time}
      </ThemedText>
    </ThemedView>
  );
};

export default TodaysVisitCard;
