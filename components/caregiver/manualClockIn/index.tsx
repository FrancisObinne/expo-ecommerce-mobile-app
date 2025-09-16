import ClockInIcon from "@/assets/icons/ClockInIcon";
import OutlinedScheduleIcon from "@/assets/icons/OutlinedScheduleIcon";
import RequestTimeOff from "@/assets/icons/RequestTimeOff";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import {
  formatElapsed,
  getFormattedDate,
  getFormattedDateWithoutYear,
  getFormattedTime,
} from "@/utils/general";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, TouchableOpacity } from "react-native";
import TodayScheduleCard from "../TodayScheduleCard";

const ManualClockIn = ({
  qrData,
  setShowManual,
}: {
  qrData?: string | null;
  setShowManual: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [clockIn, setClockIn] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState("");
  const router = useRouter();
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [clockOutTime, setClockOutTime] = useState<Date | null>(null);
  const [qrUsed, setQrUsed] = useState(false);
  const [clockingIn, setClockingIn] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (clockIn && clockInTime) {
      interval = setInterval(() => {
        setElapsed(formatElapsed(clockInTime));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [clockIn, clockInTime]);

  useEffect(() => {
    if (qrData && !clockIn && !qrUsed) {
      const now = new Date();
      setClockIn(true);
      setClockInTime(now);
      setClockOutTime(null);
      setQrUsed(true);
    }
  }, [qrData, clockIn, qrUsed]);

  const handleClockToggle = () => {
    if (!clockIn) {
      const now = new Date();
      setClockingIn(true);
      setClockIn(true);
      setClockInTime(now);
      setClockOutTime(null);
      setTimeout(() => {
        setClockingIn(false);
        router.push("/(caregiver)/clientDetail");
      }, 3000);
    } else {
      const now = new Date();
      setClockIn(false);
      setClockOutTime(now);
    }
  };

  if (clockingIn) {
    return (
      <ThemedView className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#16A34A" />
        <ThemedText className="mt-4 text-lg font-semibold text-black">
          Processing clock-in...
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="flex-1 w-full">
      <ThemedView className="p-4 pr-5 flex-row items-center justify-between">
        <ThemedView>
          <ThemedText className="text-2xl text-black font-bold">
            Clock In
          </ThemedText>
          <ThemedText className="text-[#4B5563]">
            {getFormattedDate()}
          </ThemedText>
        </ThemedView>
        <TouchableOpacity onPress={() => setShowManual(false)}>
          <ClockInIcon />
        </TouchableOpacity>
      </ThemedView>

      <ThemedScrollView>
        <ThemedView className="py-6 bg-[#F9FAFB] rounded-lg items-center">
          <ThemedText className="text-4xl font-bold">
            {getFormattedTime()}
          </ThemedText>
          <ThemedText className="text-[#4B5563] text-lg">
            {getFormattedDateWithoutYear()}
          </ThemedText>
        </ThemedView>

        <ThemedView className="py-8 px-4 flex justify-center items-center">
          <Pressable
            onPress={handleClockToggle}
            className={`w-40 h-40 rounded-full shadow-subtle ${
              clockIn ? "bg-red-600" : "bg-[#2E8B57]"
            } flex justify-center items-center`}
          >
            <ThemedText className="text-white font-bold text-2xl">
              {clockIn ? "Clock Out" : "Clock In"}
            </ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView className="bg-[#F9FAFB] p-4 rounded-lg shadow-subtle">
          {clockIn ? (
            <ThemedView>
              <ThemedView className="flex flex-row items-center gap-2">
                <ThemedView className="w-3 h-3 rounded-full bg-[#2E8B57]" />
                <ThemedText className="text-black text-lg font-medium">
                  Clocked In
                </ThemedText>
              </ThemedView>
              <ThemedText className="text-base text-[#4B5563] font-medium">
                {elapsed} ago
              </ThemedText>
            </ThemedView>
          ) : (
            <ThemedView>
              <ThemedView className="flex flex-row items-center gap-2">
                <ThemedView className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <ThemedText className="text-black text-lg font-medium">
                  Not Clocked In
                </ThemedText>
              </ThemedView>
              {clockOutTime && (
                <ThemedText className="text-base text-[#4B5563] font-medium">
                  Last clock out:{" "}
                  {clockOutTime.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  at{" "}
                  {clockOutTime.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </ThemedText>
              )}
            </ThemedView>
          )}
        </ThemedView>

        <ThemedView className="p-4">
          <ThemedText className="text-xl font-semibold text-[#111827]">
            {`Today's Schedule`}
          </ThemedText>

          <ThemedView>
            <TodayScheduleCard time="9:00 AM" title="Team Stand-up Meeting" />
            <TodayScheduleCard time="11:00 AM" title="Project Review" />
            <TodayScheduleCard time="1:00 PM" title="Client Presentation" />
            <TodayScheduleCard time="3:00 PM" title="Team Stand-up Meeting" />
            <TodayScheduleCard time="6:00 PM" title="Team Stand-up Meeting" />
            <TodayScheduleCard time="8:00 PM" title="Team Stand-up Meeting" />
          </ThemedView>
        </ThemedView>

        <ThemedView className="p-4 items-center justify-center flex-row gap-5 pb-24">
          <TouchableOpacity className="w-[50%] items-center gap-3 bg-[#F9FAFB] rounded-lg px-4 py-3 shadow-subtle">
            <RequestTimeOff />
            <ThemedText className="font-medium">Request Time Off</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(caregiver)/clientDetail")}
            className="w-[50%] items-center gap-3 bg-[#F9FAFB] rounded-lg px-4 py-3 shadow-subtle"
          >
            <OutlinedScheduleIcon />
            <ThemedText className="font-medium">View Client Report</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedScrollView>
    </ThemedView>
  );
};

export default ManualClockIn;
