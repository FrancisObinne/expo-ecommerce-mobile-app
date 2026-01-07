import Dot from "@/assets/icons/Dot";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";

interface upcomingCardProps {
  name: string;
  time: string;
  profession: string;
  id: number;
}
const UpcomingCard = ({ name, profession, time, id }: upcomingCardProps) => {
  return (
    <ThemedView className="w-[310px] bg-[#fff] rounded-[12px] p-5">
      <ThemedView className="flex flex-row items-center gap-2">
        <ThemedText>
          <Dot />{" "}
        </ThemedText>
        <ThemedText className="text-lg text-[#2E8B57] font-semibold">
          {time} {id}
        </ThemedText>
      </ThemedView>

      <ThemedText className="font-semibold text-lg pb-1">{name}</ThemedText>
      <ThemedText className="text-[#666666] text-base">{profession}</ThemedText>
    </ThemedView>
  );
};

export default UpcomingCard;
