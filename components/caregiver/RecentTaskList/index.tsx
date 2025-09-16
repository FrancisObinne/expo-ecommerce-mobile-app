import CheckIcon from "@/assets/icons/CheckIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import OutlinedHomeIcon from "@/assets/icons/OutlinedHomeIcon";
import StarIcon from "@/assets/icons/StarIcon";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";
interface RecentTasksListProps {
  icon: string;
  task: string;
  time: string;
}

const iconMap: Record<string, React.ReactNode> = {
  check: <CheckIcon />,
  clock: <ClockIcon color="#2E8B57" />,
  home: <OutlinedHomeIcon />,
  star: <StarIcon />,
};

const RecentTasksList = ({ icon, time, task }: RecentTasksListProps) => {
  return (
    <ThemedView className="flex-row gap-4">
      <ThemedView className="w-12 h-12 rounded-full p-4 bg-[#E3F2FD] flex justify-center items-center">
        {iconMap[icon]}
      </ThemedView>

      <ThemedView>
        <ThemedText className="text-[15px]">{task}</ThemedText>
        <ThemedText className="text-base text-[#666666]">{time}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default RecentTasksList;
