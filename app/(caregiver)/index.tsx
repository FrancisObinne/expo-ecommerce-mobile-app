import CareReportIcon from "@/assets/icons/CareReportIcon";
import ClientNoteIcon from "@/assets/icons/ClientNoteIcon";
import ClockInIcon from "@/assets/icons/ClockInIcon";
import { NotificationIcon } from "@/assets/icons/NotificationIcon";
import SignOutIcon from "@/assets/icons/SignOutIcon";
import userProfile from "@/assets/images/userProfile.png";
import AddedVisitsCard, {
  AddedVisitsCardProps,
} from "@/components/caregiver/AddedVisitsCard";
import TodaysVisitCard from "@/components/caregiver/TodaysVisitCard";
import UpcomingVisitsCard from "@/components/caregiver/UpcomingVisitsCard";
import ServiceButton from "@/components/serviceUser/serviceButton";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default function CaregiverPage() {
  const router = useRouter();

  const schedule = [
    {
      statusColor: "bg-green-500",
      name: "Sarah Johnson",
      address: "47 Rosewood Gardens, Kensington",
      time: "09:30 - 10:30",
    },
    {
      statusColor: "bg-orange-500",
      name: "Ahmed Hassan",
      address: "128 Victoria Park Road, Hackney",
      time: "11:00 - 12:00",
    },
    {
      statusColor: "bg-purple-500",
      name: "Eleanor Wright",
      address: "23 Primrose Hill Avenue, Camden",
      time: "13:00 - 15:00",
    },
  ];

  const addedVisits: AddedVisitsCardProps[] = [
    {
      name: "Robert Chen",
      priority: "HIGH",
      task: "Personal Care & Mobility Support",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "Patricia Williams",
      priority: "MEDIUM",
      task: "Medication Administration",
      time: "4:30 PM - 5:30 PM",
    },
    {
      name: "James O'Connor",
      priority: "LOW",
      task: "Companionship & Light Housework",
      time: "6:00 PM - 8:00 PM",
    },
  ];
  const logout = useLogout();

  return (
    <ThemedView safe className="flex-1">
      <ThemedView className="flex-row items-center justify-between p-4 bg-white">
        <ThemedView className="flex-row items-center gap-3">
          <Image
            source={userProfile}
            style={{ width: 55, height: 55, borderRadius: 25 }}
          />

          <ThemedView>
            <ThemedText className="text-gray-600 text-lg font-bold">
              Welcome back,
            </ThemedText>
            <ThemedText className="text-green-700 text-lg font-semibold">
              Maria Rodriguez
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <TouchableOpacity className="p-2">
          <NotificationIcon size={28} color="#2E8B57" />
        </TouchableOpacity>
      </ThemedView>
      <ThemedScrollView>
        <ThemedView className="bg-[#F8F8F8] flex-1 px-5 pt-7 pb-20 gap-7">
          <ThemedView className="bg-[#FFFFFF] p-4 rounded-[12px] flex flex-row flex-wrap gap-4 justify-center items-center shadow-subtle">
            <ServiceButton
              ServiceIcon={ClockInIcon}
              name="Clock In"
              action={() => router.push("/(caregiver)/clockIn")}
            />
            <ServiceButton
              ServiceIcon={SignOutIcon}
              name="Sign Out"
              action={() => {
                logout();
                router.replace("/(auth)/login");
              }}
            />
            <ServiceButton
              ServiceIcon={ClientNoteIcon}
              name="Client Notes"
              action={() => router.push("/(caregiver)/clientNote")}
            />
            <ServiceButton
              ServiceIcon={CareReportIcon}
              name="Reports"
              action={() => router.push("/(caregiver)/report")}
            />
          </ThemedView>

          <ThemedView>
            <ThemedText className="text-xl font-bold text-[#333333] mb-3">
              {`Today's Visits`}
            </ThemedText>

            <ThemedScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 16,
                paddingRight: 16,
              }}
            >
              <TodaysVisitCard time="08:00" />
              <TodaysVisitCard time="09:30" active />
              <TodaysVisitCard time="11:00" />
              <TodaysVisitCard time="14:00" />
              <TodaysVisitCard time="16:30" />
              <TodaysVisitCard time="18:00" />
              <TodaysVisitCard time="20:00" />
            </ThemedScrollView>
          </ThemedView>

          <ThemedView className="flex gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Upcoming Visits
            </ThemedText>

            <ThemedView className="bg-[#FFFFFF] rounded-[12px]">
              {schedule.map((item, index) => (
                <ThemedView
                  key={index}
                  className={`px-4 ${index !== schedule.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}
                >
                  <UpcomingVisitsCard {...item} />
                </ThemedView>
              ))}
            </ThemedView>
          </ThemedView>

          <ThemedView className="flex gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Added Visits
            </ThemedText>

            {addedVisits.map((addedVisit, index) => (
              <AddedVisitsCard
                name={addedVisit.name}
                priority={addedVisit.priority}
                task={addedVisit.task}
                time={addedVisit.time}
                key={index}
              />
            ))}
          </ThemedView>
        </ThemedView>
      </ThemedScrollView>
    </ThemedView>
  );
}
