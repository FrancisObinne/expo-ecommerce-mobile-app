import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";

interface StatsCardProps {
  name: string;
  stats: string;
}

const StatsCard = ({ name, stats }: StatsCardProps) => {
  return (
    <ThemedView className="w-[30%] p-4 bg-[#fff] rounded-[8px]">
      <ThemedText className="text-[#666666] text-lg font-medium">
        {name}
      </ThemedText>
      <ThemedText className="text-[#2E8B57] text-xl font-bold">
        {stats}
      </ThemedText>
    </ThemedView>
  );
};

export default StatsCard;
