import ArrowBack from "@/assets/icons/ArrowBack";
import CalendarArrowLeft from "@/assets/icons/CalendarArrowLeft";
import CalendarArrowRight from "@/assets/icons/CalendarArrowRight";
import { SettingIcon } from "@/assets/icons/SettingIcon";
import ThemedScrollView from "@/components/ui/ThemedScrollView";

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
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedWeek, setSelectedWeek] = useState(new Date());
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
      name: "Sophia M.",
      time: "09:00-11:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 6
      ),
      startHour: 9,
      duration: 2,
      color: "bg-pink-200 border-pink-300",
    },
    {
      id: 2,
      name: "Liam C.",
      time: "13:00-15:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 4
      ),
      startHour: 13,
      duration: 2,
      color: "bg-teal-200 border-teal-300",
    },
    {
      id: 3,
      name: "Ava B.",
      time: "10:00-12:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 2
      ),
      startHour: 10,
      duration: 2,
      color: "bg-orange-200 border-orange-300",
    },

    {
      id: 4,
      name: "Sarah J.",
      time: "08:00-10:00",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()), // today
      startHour: 8,
      duration: 2,
      color: "bg-blue-200 border-blue-300",
    },
    {
      id: 5,
      name: "Emma W.",
      time: "12:00-15:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      ),
      startHour: 12,
      duration: 3,
      color: "bg-purple-200 border-purple-300",
    },
    {
      id: 6,
      name: "Michael L.",
      time: "09:00-11:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 2
      ),
      startHour: 9,
      duration: 2,
      color: "bg-green-200 border-green-300",
    },
    {
      id: 7,
      name: "Daniel R.",
      time: "10:00-11:30",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 3
      ),
      startHour: 11,
      duration: 1.5,
      color: "bg-red-200 border-red-300",
    },
    {
      id: 8,
      name: "Olivia K.",
      time: "14:00-16:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 7
      ),
      startHour: 14,
      duration: 2,
      color: "bg-yellow-200 border-yellow-300",
    },
    {
      id: 9,
      name: "James P.",
      time: "16:00-18:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 14
      ),
      startHour: 16,
      duration: 2,
      color: "bg-indigo-200 border-indigo-300",
    },
    {
      id: 10,
      name: "Isabella T.",
      time: "11:00-13:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 21
      ),
      startHour: 11,
      duration: 2,
      color: "bg-cyan-200 border-cyan-300",
    },
    {
      id: 11,
      name: "Ethan H.",
      time: "15:00-17:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 25
      ),
      startHour: 15,
      duration: 2,
      color: "bg-lime-200 border-lime-300",
    },
    {
      id: 12,
      name: "Mia D.",
      time: "09:30-11:00",
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 27
      ),
      startHour: 9.5,
      duration: 1.5,
      color: "bg-rose-200 border-rose-300",
    },
  ];

  const clients = [
    {
      id: 1,
      name: "Sarah",
      role: "RN",
      avatar:
        "https://i.pinimg.com/736x/13/37/69/133769dd59076e20c08191f2a7597331.jpg",
    },
    {
      id: 2,
      name: "Roseline",
      role: "CNA",
      avatar:
        "https://i.pinimg.com/736x/cd/c3/cb/cdc3cb2aea084907892133daa37a6663.jpg",
    },
    {
      id: 3,
      name: "Ella",
      role: "LPN",
      avatar:
        "https://i.pinimg.com/1200x/82/07/58/820758be8a418e23a08826a4e19bdbca.jpg",
    },
    {
      id: 4,
      name: "Stella",
      role: "RN",
      avatar:
        "https://i.pinimg.com/736x/73/30/70/73307097d0a3a8fc8cbed454023c4426.jpg",
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
        <ThemedView className="flex flex-row items-center gap-5">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowBack />
          </TouchableOpacity>
          <ThemedText className="text-xl font-bold text-[#000]">
            My Schedule
          </ThemedText>
        </ThemedView>

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
          Service Clients
        </ThemedText>
        <ThemedScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        >
          {clients.map((client) => (
            <ThemedView
              key={client.id}
              className="flex flex-col items-center gap-1.5 rounded-lg bg-[#FFFFFF] border border-[#F3F4F6] w-24 py-5 shadow-subtle mr-4"
            >
              <Image
                source={{
                  uri: client.avatar,
                }}
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
        </ThemedScrollView>
      </ThemedView>
    </ThemedView>
  );
};

export default SchedulesPage;
