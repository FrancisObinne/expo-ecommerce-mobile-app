import ArrowBack from "@/assets/icons/ArrowBack";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const ClientReport = () => {
  const router = useRouter();

  const clientData = {
    name: "Sarah Johnson",
    age: 68,
    keyCode: "CRTH",
    status: "Active Client",
    profileImage:
      "https://i.pinimg.com/736x/ae/5d/67/ae5d672905ba6fb2c0a31250d2fdf8c3.jpg",
    careDate: "September 15, 2023",
    careTime: "9:00 AM - 5:00 PM",
    caregiver: "Mary Smith",
    vitalSigns: {
      bloodPressure: "120/80",
      temperature: "98.6°F",
    },
    tasksCompleted: [
      { name: "Morning Medication", time: "9:15 AM", completed: true },
      { name: "Personal Hygiene", time: "10:00 AM", completed: true },
      { name: "Physical Exercise", time: "11:30 AM", completed: true },
      { name: "Lunch", time: "12:30 PM", completed: true },
    ],
    careNotes:
      "Patient had a good morning routine. Completed all exercises as planned. Appetite is normal.",
    careNotesTime: "Added at 1:30 PM",
    medications: [
      { name: "Lisinopril", dosage: "10mg", time: "9:15 AM", taken: true },
      { name: "Metformin", dosage: "500mg", time: "12:30 PM", taken: true },
    ],
    nextVisit: {
      date: "September 16, 2023",
      time: "9:00 AM - 5:00 PM",
      caregiver: "Mary Smith",
    },
  };

  type Task = {
    name: string;
    time: string;
    completed: boolean;
  };

  const TaskItem = ({ task }: { task: Task }) => (
    <ThemedView className="flex-row items-center py-3 border-b border-gray-100">
      <ThemedView className="w-8 h-8 rounded-full bg-green-100 items-center justify-center mr-3">
        <Ionicons name="checkmark" size={18} color="#22c55e" />
      </ThemedView>
      <ThemedView className="flex-1">
        <Text className="text-base font-medium text-gray-900 mb-0.5">
          {task.name}
        </Text>
        <Text className="text-sm text-gray-500">{task.time}</Text>
      </ThemedView>
    </ThemedView>
  );

  type Medication = {
    name: string;
    dosage: string;
    time: string;
    taken: boolean;
  };

  const MedicationItem = ({ medication }: { medication: Medication }) => (
    <ThemedView className="flex-row items-center justify-between py-3 border-b border-gray-100">
      <ThemedView className="flex-1">
        <Text className="text-base font-medium text-gray-900 mb-0.5">
          {medication.name}
        </Text>
        <Text className="text-sm text-gray-500 mb-0.5">
          {medication.dosage}
        </Text>
        <Text className="text-xs text-gray-500">{medication.time}</Text>
      </ThemedView>
      <ThemedView className="ml-3">
        <Ionicons name="checkmark-circle" size={24} color="#22c55e" />
      </ThemedView>
    </ThemedView>
  );

  return (
    <ThemedView safe className="flex-1 bg-gray-50">
      {/* Header */}
      <ThemedView className="flex flex-row items-center gap-5 px-4 pt-4 pb-2 border-b border-[#F3F4F6]">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowBack />
        </TouchableOpacity>
        <ThemedText className="text-2xl text-center w-[80%] font-bold text-[#000]">
          Client Report
        </ThemedText>
      </ThemedView>

      <ThemedScrollView grow contentContainerStyle={{ paddingBottom: 35 }}>
        <ThemedView>
          <ThemedView className="flex-row border-b border-[#F3F4F6] p-5 rounded-xl mt-5 shadow-sm">
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/13/37/69/133769dd59076e20c08191f2a7597331.jpg",
              }}
              className="w-24 h-24 rounded-full mr-4"
            />

            <ThemedView className="flex-1">
              <Text className="text-xl font-semibold text-black mb-1">
                {clientData.name}
              </Text>
              <Text className="text-base text-gray-500 mb-0.5">
                {clientData.age} years old
              </Text>
              <Text className="text-sm text-gray-500 mb-2">
                Key Safe: {clientData.keyCode}
              </Text>
              <ThemedView className="flex-row items-center">
                <ThemedView className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                <Text className="text-sm text-green-600 font-medium">
                  {clientData.status}
                </Text>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          {/* Today's Care Summary */}
          <ThemedView className="border-b border-[#F3F4F6] p-5 rounded-xl mt-4 shadow-sm">
            <Text className="text-lg font-semibold text-black mb-3">
              {`Today's Care Summary`}
            </Text>
            <Text className="text-base text-gray-900 mb-1">
              {clientData.careDate}
            </Text>
            <Text className="text-base text-gray-900 mb-1">
              {clientData.careTime}
            </Text>
            <Text className="text-sm text-gray-500">
              by {clientData.caregiver}
            </Text>
          </ThemedView>

          {/* Vital Signs */}
          <ThemedView className="border-b border-[#F3F4F6] p-5 rounded-xl mt-4 shadow-sm">
            <Text className="text-lg font-semibold text-black mb-3">
              Vital Signs
            </Text>
            <ThemedView className="flex-row justify-between">
              <ThemedView className="flex-1  bg-[#F5F5F5] p-4 rounded-lg items-start mx-1">
                <Ionicons name="heart-outline" size={24} color="#ef4444" />
                <Text className="text-xl font-semibold text-black mt-2 mb-1">
                  {clientData.vitalSigns.bloodPressure}
                </Text>
                <Text className="text-xs text-gray-500 text-center">
                  Blood Pressure
                </Text>
              </ThemedView>
              <ThemedView className="flex-1  bg-[#F5F5F5] p-4 rounded-lg items-start mx-1">
                <Ionicons
                  name="thermometer-outline"
                  size={24}
                  color="#22c55e"
                />
                <Text className="text-xl font-semibold text-black mt-2 mb-1">
                  {clientData.vitalSigns.temperature}
                </Text>
                <Text className="text-xs text-gray-500 text-center">
                  Temperature
                </Text>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          {/* Tasks Completed */}
          <ThemedView className="p-5 rounded-xl mt-4 shadow-sm">
            <Text className="text-lg font-semibold text-black mb-3">
              Tasks Completed
            </Text>
            {clientData.tasksCompleted.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </ThemedView>

          {/* Care Notes */}
          <ThemedView className="border-b border-[#F3F4F6] p-5 rounded-xl mt-4 shadow-sm">
            <Text className="text-lg font-semibold text-black mb-3">
              Care Notes
            </Text>
            <ThemedView className="bg-[#F5F5F5] p-4 rounded-lg">
              <Text className="text-base text-gray-900 leading-6 mb-2">
                {clientData.careNotes}
              </Text>
              <Text className="text-xs text-gray-500">
                {clientData.careNotesTime}
              </Text>
            </ThemedView>
          </ThemedView>

          {/* Medication Log */}
          <ThemedView className="border-b border-[#F3F4F6] p-5 rounded-xl mt-4 shadow-sm">
            <Text className="text-lg font-semibold text-black mb-3">
              Medication Log
            </Text>
            {clientData.medications.map((medication, index) => (
              <MedicationItem key={index} medication={medication} />
            ))}
          </ThemedView>

          {/* Next Visit */}
          <ThemedView className="bg-green-100 px-3 py-4 rounded-xl mt-4 mx-3">
            <Text className="text-lg font-semibold text-black mb-2">
              Next Visit
            </Text>
            <Text className="text-base text-gray-900 mb-1">
              {clientData.nextVisit.date}
            </Text>
            <Text className="text-base text-gray-900 mb-1">
              {clientData.nextVisit.time}
            </Text>
            <Text className="text-sm text-green-700">
              Caregiver: {clientData.nextVisit.caregiver}
            </Text>
          </ThemedView>

          <TouchableOpacity className="bg-green-600 flex-row items-center justify-center p-4 rounded-xl mt-4 mb-10 mx-3">
            <Ionicons name="download-outline" size={20} color="#fff" />
            <Text className="text-white text-base font-semibold ml-2">
              Download Report
            </Text>
          </TouchableOpacity>
        </ThemedView>
      </ThemedScrollView>
    </ThemedView>
  );
};

export default ClientReport;
