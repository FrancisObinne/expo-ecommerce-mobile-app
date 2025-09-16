import ArrowBack from "@/assets/icons/ArrowBack";
import CalendarArrowLeft from "@/assets/icons/CalendarArrowLeft";
import CalendarArrowRight from "@/assets/icons/CalendarArrowRight";
import { SettingIcon } from "@/assets/icons/SettingIcon";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";

interface Appointment {
  id: number;
  name: string;
  time: string;
  date: Date;
  startHour: number;
  duration: number;
  color: string;
}

const SchedulesPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);
  const [selectedWeek, setSelectedWeek] = useState(new Date());
  const router = useRouter();

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const appointments = [
    {
      id: 1,
      name: "Sarah J.",
      time: "8:00-10:00",
      date: new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() - 2 // last week (2 days before Sunday)
      ),
      startHour: 8,
      duration: 2,
      color: "bg-blue-200 border-blue-300",
    },
    {
      id: 2,
      name: "Emma W.",
      time: "12:00-15:00",
      date: new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() - 1 // last week (1 day before Sunday)
      ),
      startHour: 12,
      duration: 3,
      color: "bg-purple-200 border-purple-300",
    },
    {
      id: 3,
      name: "Michael L.",
      time: "9:00-11:00",
      date: new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() + 2 // this week
      ),
      startHour: 9,
      duration: 2,
      color: "bg-green-200 border-green-300",
    },
    {
      id: 4,
      name: "Daniel R.",
      time: "10:00-11:30",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 5
      ), // later this week
      startHour: 10,
      duration: 1.5,
      color: "bg-red-200 border-red-300",
    },
    {
      id: 5,
      name: "Olivia K.",
      time: "14:00-16:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 12
      ), // next week
      startHour: 14,
      duration: 2,
      color: "bg-yellow-200 border-yellow-300",
    },
    {
      id: 6,
      name: "James P.",
      time: "16:00-18:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 20
      ), // later this month
      startHour: 16,
      duration: 2,
      color: "bg-indigo-200 border-indigo-300",
    },
  ];

  const clients = [
    {
      id: 1,
      name: "Sarah",
      role: "RN",
      avatar:
        "https://i.pinimg.com/736x/e3/63/3c/e3633c3b513bfba9eb351b762ce7ae66.jpg",
    },
    {
      id: 2,
      name: "Michael",
      role: "CNA",
      avatar:
        "https://i.pinimg.com/736x/d8/f4/2d/d8f42d6099964a1a41960f7886662ed2.jpg",
    },
    {
      id: 3,
      name: "Emma",
      role: "LPN",
      avatar:
        "https://i.pinimg.com/736x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg",
    },
    {
      id: 4,
      name: "David",
      role: "RN",
      avatar:
        "https://i.pinimg.com/736x/85/9c/bd/859cbd7767e07229c4238efcbbd3716d.jpg",
    },
  ];

  const formatMonth = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const getWeekDays = (date: Date) => {
    const week: Date[] = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      week.push(d);
    }
    return week;
  };

  const weekDays = getWeekDays(selectedWeek);

  const navigateWeek = (direction: number) => {
    const newDate = new Date(selectedWeek);
    newDate.setDate(selectedWeek.getDate() + direction * 7);
    setSelectedWeek(newDate);
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedWeek(today);
  };

  const isSameDay = (date1: Date, date2: Date) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const isToday = (date: Date) => isSameDay(date, new Date());

  const getAppointmentForSlot = (date: Date, timeIndex: number) =>
    appointments.find(
      (apt) => isSameDay(apt.date, date) && apt.startHour === timeIndex + 6
    );

  const shouldRenderAppointment = (
    date: Date,
    timeIndex: number
  ): Appointment | undefined => {
    return appointments.find(
      (apt: Appointment) =>
        isSameDay(apt.date, date) && apt.startHour === timeIndex + 6
    );
  };

  const isTimeSlotOccupied = (
    date: Date,
    timeIndex: number
  ): Appointment | undefined => {
    return appointments.find((apt) => {
      if (!isSameDay(apt.date, date)) return false;
      const currentHour = timeIndex + 6;
      const endHour = apt.startHour + apt.duration;
      return currentHour >= apt.startHour && currentHour < endHour;
    });
  };

  return (
    <ThemedView safe className="flex-1 bg-white">
      <ThemedView className="flex-row items-center justify-between px-4 pt-6 pb-4 border-b border-[#F3F4F6] bg-white">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowBack />
        </TouchableOpacity>
        <ThemedText className="text-xl font-bold text-[#000]">
          Schedule Management
        </ThemedText>
        <SettingIcon />
      </ThemedView>

      <ThemedView className="flex-row items-center justify-between px-5 pt-4 py-3">
        <ThemedView className="flex-row items-center gap-6">
          <ThemedText className="text-lg font-semibold text-[#000]">
            {formatMonth(selectedWeek)}
          </ThemedText>
          <ThemedView className="flex-row gap-3">
            <TouchableOpacity onPress={() => navigateWeek(-1)}>
              <CalendarArrowLeft />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateWeek(1)}>
              <CalendarArrowRight />
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
        <TouchableOpacity onPress={goToToday}>
          <ThemedText className="text-green-600 font-medium text-lg">
            Today
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView className="flex-row bg-white border-b border-gray-100">
        <ThemedView className="w-[68px]" />
        {weekDays.map((date, index) => (
          <ThemedView key={index} className="flex-1 items-center py-3">
            <ThemedText className="text-sm font-medium text-gray-600">
              {daysOfWeek[index]}
            </ThemedText>
            {isToday(date) ? (
              <ThemedView className="bg-green-600 w-8 h-8 rounded-full items-center justify-center mt-1">
                <ThemedText className="text-white text-base font-medium">
                  {date.getDate()}
                </ThemedText>
              </ThemedView>
            ) : (
              <ThemedText className="text-lg font-medium mt-1 text-gray-900">
                {date.getDate()}
              </ThemedText>
            )}
          </ThemedView>
        ))}
      </ThemedView>

      <ScrollView className="flex-1 bg-white">
        {timeSlots.map((time, timeIndex) => (
          <ThemedView key={time} className="flex-row border-b border-gray-50">
            <ThemedView className="w-[68px] py-4 px-2">
              <ThemedText className="text-sm text-gray-500">
                {timeIndex < 6
                  ? `${timeIndex + 6}:00AM`
                  : timeIndex === 6
                    ? "12:00PM"
                    : `${timeIndex - 6}:00 PM`}
              </ThemedText>
            </ThemedView>

            {/* Days */}
            {weekDays.map((date, dayIndex) => {
              const appointmentToRender = shouldRenderAppointment(
                date,
                timeIndex
              );
              const isOccupied = isTimeSlotOccupied(date, timeIndex);

              return (
                <ThemedView
                  key={`${dayIndex}-${time}`}
                  className="flex-1 p-1 min-h-[60px] border-r border-gray-50 last:border-r-0"
                  // style={{
                  //   backgroundColor:
                  //     isOccupied && !appointmentToRender
                  //       ? "rgba(0, 0, 0, 0.05)"
                  //       : "transparent",
                  // }}
                >
                  {appointmentToRender && (
                    <ThemedView
                      className={`${appointmentToRender.color} w-[65px] rounded-lg p-2 border absolute z-10`}
                      style={{
                        height: appointmentToRender.duration * 60 - 8,
                        top: 4,
                      }}
                    >
                      <ThemedText className="font-medium text-gray-700 text-xs">
                        {appointmentToRender.name}
                      </ThemedText>
                      <ThemedText className="text-gray-600 text-xs">
                        {appointmentToRender.time}
                      </ThemedText>
                    </ThemedView>
                  )}
                </ThemedView>
              );
            })}
          </ThemedView>
        ))}
      </ScrollView>

      <ThemedView className="bg-white p-4 h-[28%]">
        <ThemedText className="text-xl font-bold text-[#333333] pb-4">
          Caregivers
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          <ThemedView className="flex-row gap-6">
            {clients.map((client) => (
              <ThemedView
                key={client.id}
                className="flex flex-col items-center gap-1.5 rounded-lg bg-[#FFFFFF] border border-[#F3F4F6] w-24 py-5 shadow-subtle"
              >
                <Image
                  source={{ uri: client.avatar }}
                  style={{ width: 40, height: 40, borderRadius: 25 }}
                />
                <ThemedText className="font-medium text-gray-900">
                  {client.name}
                </ThemedText>
                <ThemedText className="text-sm text-gray-500">
                  {client.role}
                </ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
};

export default SchedulesPage;
