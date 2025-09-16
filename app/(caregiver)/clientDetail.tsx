import ArrowBack from "@/assets/icons/ArrowBack";
import CancelIcon from "@/assets/icons/CancelIcon";
import ClockFilledIcon from "@/assets/icons/ClockFilledIcon";
import DeclineIcon from "@/assets/icons/DeclineIcon";
import FrustratedVisitIcon from "@/assets/icons/FrustratedVisitIcon";
import LogObservationIcon from "@/assets/icons/LogObservationIcon";
import TaskEmergencyIcon from "@/assets/icons/TaskEmergencyIcon";
import UnallocatedVisitIcon from "@/assets/icons/UnallocatedVisitIcon";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ClientTaskCard from "../../components/caregiver/ClientTaskCard";

interface Task {
  id: number;
  title: string;
  time: string;
  completed: boolean;
}

const ClientDetailPage = () => {
  const router = useRouter();
  const screenHeight = Dimensions.get("window").height;
  const taskListHeight = screenHeight * 0.35;

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Glucose Level Check", time: "10:00 AM", completed: true },
    { id: 2, title: "Brunch Preparation", time: "11:00 AM", completed: false },
    { id: 3, title: "Medication Reminder", time: "12:30 PM", completed: false },
    {
      id: 4,
      title: "Physiotherapy Session",
      time: "02:00 PM",
      completed: false,
    },
    { id: 5, title: "Afternoon Walk", time: "04:00 PM", completed: false },
    { id: 6, title: "Dinner Preparation", time: "06:30 PM", completed: false },
    { id: 7, title: "Evening Medication", time: "08:00 PM", completed: false },
    { id: 8, title: "Bedtime Routine", time: "09:30 PM", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const allCompleted = completedCount === tasks.length;

  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? completedCount / totalTasks : 0;
  const insets = useSafeAreaInsets();

  return (
    <ThemedView safe className="flex-1 bg-[#F9FAFB]">
      <ThemedView className="flex flex-row items-center gap-5 px-4 pt-4 pb-2 border-b border-[#F3F4F6]">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowBack />
        </TouchableOpacity>
        <ThemedText className="text-2xl text-center w-[80%] font-bold text-[#000]">
          Client Details
        </ThemedText>
      </ThemedView>

      <ThemedView className="flex-1 p-4">
        <ThemedView className="flex-row items-center gap-4">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/13/37/69/133769dd59076e20c08191f2a7597331.jpg",
            }}
            style={{ width: 78, height: 78, borderRadius: 25 }}
          />
          <ThemedView className="gap-1">
            <ThemedText className="text-xl font-semibold">
              Sarah Johnson
            </ThemedText>
            <ThemedText className="text-[#4B5563] text-base truncate">
              456 Health Avenue, Suite 101
            </ThemedText>
            <ThemedView className="flex-row items-center gap-2">
              <ClockFilledIcon />
              <ThemedText className="text-[#2E8B57] text-base font-semibold">
                3:00 hrs
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Tasks title */}
        <ThemedText className="text-xl font-bold text-[#333333] mt-4 mb-2">
          {`Today's Tasks`}
        </ThemedText>

        {/* Scrollable tasks */}
        <ThemedView className="flex-1">
          <ThemedScrollView
            contentContainerStyle={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
          >
            {tasks.map((task) => (
              <ClientTaskCard
                key={task.id}
                title={task.title}
                time={task.time}
                completed={task.completed}
                onPress={() => toggleTask(task.id)}
              />
            ))}
          </ThemedScrollView>
        </ThemedView>

        {/* Progress bar stays below scrollable tasks */}
        <ThemedView>
          <ThemedText className="text-base text-[#4B5563] mt-2">
            Tasks Completed {completedCount}/{totalTasks} (
            {(progress * 100).toFixed(0)}%)
          </ThemedText>

          {/* <Progress.Bar
              progress={progress}
              width={null}
              height={10}
              borderRadius={8}
              color="#2E8B57"
              unfilledColor="#E5E7EB"
            /> */}
        </ThemedView>
      </ThemedView>

      {/* Bottom actions pinned */}
      <ThemedView className="px-4 pb-4 pt-2 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <Pressable
          disabled={!allCompleted}
          onPress={() => router.push("/(caregiver)/clockIn")}
          className={`py-4 rounded-lg ${
            allCompleted ? "bg-[#2E8B57]" : "bg-gray-400"
          }`}
        >
          <ThemedText
            onPress={() => router.push("/(caregiver)/clockIn")}
            className="text-white text-center font-semibold text-lg"
          >
            Clock Out
          </ThemedText>
        </Pressable>
        <ThemedText className="text-center text-gray-500 mt-2">
          All Tasks must be completed before clock out
        </ThemedText>

        <ThemedView
          className={`mt-4 flex-row flex-wrap gap-2 justify-between ${Platform.OS === "ios" && "mb-16"}`}
        >
          {[
            {
              label: "Cancel",
              icon: <CancelIcon />,
              color: "bg-[#FFF]",
              text: "text-black",
              border: "border border-[#E5E7EB]",
            },
            {
              label: "Pend Visit",
              icon: <DeclineIcon />,
              color: "bg-[#bbf7d0]",
              text: "text-black",
              border: "border border-[#E5E7EB]",
            },
            {
              label: "Frustrated Visit",
              icon: <FrustratedVisitIcon />,
              color: "bg-[#FFF]",
              text: "text-black",
              border: "border border-[#E5E7EB]",
            },
            {
              label: "Log Observation",
              icon: <LogObservationIcon />,
              color: "bg-[#FFF]",
              text: "text-black",
              border: "border border-[#E5E7EB]",
            },
            {
              label: "Emergency",
              icon: <TaskEmergencyIcon />,
              color: "bg-[#FF3B30]",
              text: "text-white",
              border: "",
            },
            {
              label: "Unallocated Visit",
              icon: <UnallocatedVisitIcon />,
              color: "bg-[#FFF]",
              text: "text-black",
              border: "border border-[#E5E7EB]",
            },
          ].map((btn) => (
            <Pressable
              key={btn.label}
              className={`w-[32%] h-[106px] px-2 py-4 justify-start items-center gap-1 rounded-lg ${btn.border} ${btn.color}`}
            >
              {btn.icon}
              <ThemedText
                className={`${btn.text} text-lg text-center font-semibold`}
              >
                {btn.label}
              </ThemedText>
            </Pressable>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default ClientDetailPage;
