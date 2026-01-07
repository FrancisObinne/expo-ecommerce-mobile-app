import ArrowBack from "@/assets/icons/ArrowBack";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import OutlineProfileIcon from "@/assets/icons/OutlineProfileIcon";
import StarIcon from "@/assets/icons/StarIcon";
import RecentTasksList from "@/components/caregiver/RecentTaskList";
import ReportCalendarPicker from "@/components/caregiver/ReportCalendarPicker";
import ReportCard from "@/components/caregiver/ReportCard";
import TaskDistributionPieChart from "@/components/caregiver/TaskDistributionPieChart";
import WeeklyHoursChart from "@/components/caregiver/WeeklyHoursChart";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";

export default function ReportPage() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [tempMonth, setTempMonth] = useState(date.getMonth());
  const [tempYear, setTempYear] = useState(date.getFullYear());

  const confirmSelection = () => {
    setDate(new Date(tempYear, tempMonth, 1));
    setShow(false);
  };

  const recentTaskLists = [
    {
      icon: "check",
      task: "Completed medication schedule for John Smith",
      time: "2 hours ago",
    },
    {
      icon: "clock",
      task: "Assisted with physical therapy exercises",
      time: "4 hours ago",
    },
    {
      icon: "home",
      task: "Prepared lunch and cleaned dining area",
      time: "5 hours ago",
    },
    {
      icon: "star",
      task: "Morning health checkup completed",
      time: "7 hours ago",
    },
  ];

  return (
    <ThemedView safe className="flex-1">
      <ThemedView className="flex flex-row items-center gap-5 px-4 pt-6 pb-4 border-b border-[#F3F4F6] bg-white">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowBack />
        </TouchableOpacity>
        <ThemedText className="text-xl font-bold text-[#000]">
          Report Summary
        </ThemedText>
      </ThemedView>

      <ThemedScrollView>
        <ThemedView className="bg-[#FFFFFF] flex-1 px-5 gap-3 pb-12">
          <ThemedView className="flex flex-row items-center justify-between pt-3 pb-2">
            <ThemedText className="text-[16px] font-medium">
              {date.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </ThemedText>

            <Pressable onPress={() => setShow(true)}>
              <CalendarIcon />
            </Pressable>
          </ThemedView>

          <ThemedView className="flex flex-row flex-wrap gap-5 justify-center items-center shadow-subtle border-t border-b border-[#F3F4F6] pt-4 pb-6">
            <ReportCard
              icon={<ClockIcon color="#2E8B57" />}
              report="124h"
              title="Total Hours"
            />
            <ReportCard
              icon={<OutlineProfileIcon />}
              report="18"
              title="Patients Served"
            />
            <ReportCard
              icon={<CheckIcon />}
              report="86"
              title="Tasks Completed"
            />
            <ReportCard icon={<StarIcon />} report="4.8/5" title="Rating" />
          </ThemedView>

          <ThemedView className="py-2 border-b border-[#F3F4F6] gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Weekly Hours
            </ThemedText>
            <WeeklyHoursChart />
          </ThemedView>

          <ThemedView className="py-2 border-b border-[#F3F4F6] gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Task Distribution
            </ThemedText>
            <TaskDistributionPieChart />
          </ThemedView>

          <ThemedView className="py-2 border-b border-[#F3F4F6] gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Recent Tasks
            </ThemedText>
            <ThemedView className="flex gap-5 pt-3 pb-2">
              {recentTaskLists.map((recentTaskList, id) => (
                <RecentTasksList
                  icon={recentTaskList.icon}
                  task={recentTaskList.task}
                  time={recentTaskList.time}
                  key={id}
                />
              ))}
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedScrollView>

      <ReportCalendarPicker
        show={show}
        tempMonth={tempMonth}
        tempYear={tempYear}
        setShow={setShow}
        setTempMonth={setTempMonth}
        setTempYear={setTempYear}
        confirmSelection={confirmSelection}
      />
    </ThemedView>
  );
}
