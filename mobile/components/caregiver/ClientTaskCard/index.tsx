import TaskCheckIcon from "@/assets/icons/TaskCheckIcon";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { Pressable, Text } from "react-native";

type TaskCardProps = {
  title: string;
  time: string;
  completed?: boolean;
  onPress?: () => void;
};

const ClientTaskCard: React.FC<TaskCardProps> = ({
  title,
  time,
  completed,
  onPress,
}) => {
  return (
    <Pressable
      className="flex-row items-center p-4 rounded-2xl border border-gray-200 mb-3"
      onPress={onPress}
    >
      <Pressable
        onPress={onPress}
        className={`w-7 h-7 mr-3 rounded-full border-2 flex items-center justify-center ${
          completed ? "bg-[#2E8B57] border-[#2E8B57]" : "border-gray-400"
        }`}
      >
        {completed && <TaskCheckIcon />}
      </Pressable>

      <Pressable onPress={onPress} className="flex-1">
        <ThemedText
          className="text-base font-semibold text-black w-fit"
          numberOfLines={1}
        >
          {title}
        </ThemedText>
        <Text className="text-sm text-gray-500">{time}</Text>
      </Pressable>
    </Pressable>
  );
};

export default ClientTaskCard;
