import ActiveCareIcon from "@/assets/icons/ActiveCareIcon";
import { BookCareIcon } from "@/assets/icons/BookCareIcon";
import CallIcon from "@/assets/icons/CallIcon";
import EmergencyIcon from "@/assets/icons/EmergencyIcon";
import { NotificationIcon } from "@/assets/icons/NotificationIcon";
import ServiceButtonMessagesIcon from "@/assets/icons/ServiceButtonMessagesIcon";
import userProfile from "@/assets/images/userProfile.png";
import RecentCaregiverCard from "@/components/serviceUser/recentCaregiverCard";

import ServiceButton from "@/components/serviceUser/serviceButton";
import StatsCard from "@/components/serviceUser/statsCard";
import UpcomingCard from "@/components/serviceUser/upcomingCard";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, TouchableOpacity } from "react-native";

export default function ServiceUserHomePage() {
  const currentlyCaring = true;
  const router = useRouter();
  const cards = [
    {
      id: 1,
      time: "Today • 9:00 AM",
      name: "Dr. Sarah Johnson",
      profession: "Cardiologist",
    },
    {
      id: 2,
      time: "Today • 11:30 AM",
      name: "Dr. Michael Lee",
      profession: "Dermatologist",
    },
    {
      id: 3,
      time: "Today • 2:00 PM",
      name: "Dr. Emily Davis",
      profession: "Pediatrician",
    },
    {
      id: 4,
      time: "Today • 4:15 PM",
      name: "Dr. James Wilson",
      profession: "Orthopedic Surgeon",
    },
    {
      id: 5,
      time: "Tomorrow • 8:00 AM",
      name: "Dr. Olivia Brown",
      profession: "Physical Therapist",
    },
    {
      id: 6,
      time: "Tomorrow • 10:45 AM",
      name: "Dr. Daniel Martinez",
      profession: "Neurologist",
    },
    {
      id: 7,
      time: "Tomorrow • 1:30 PM",
      name: "Dr. Sophia Taylor",
      profession: "Psychiatrist",
    },
    {
      id: 8,
      time: "Friday • 3:00 PM",
      name: "Dr. William Anderson",
      profession: "General Practitioner",
    },
  ];

  return (
    <ThemedView safe className="flex-1">
      <ThemedView className="flex-row items-center justify-between p-4 bg-white">
        <ThemedView className="flex-row items-center gap-3">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/13/37/69/133769dd59076e20c08191f2a7597331.jpg",
            }}
            style={{ width: 55, height: 55, borderRadius: 25 }}
          />

          <ThemedView>
            <ThemedText className="text-gray-600 text-lg font-bold">
              Welcome back,
            </ThemedText>
            <ThemedText className="text-green-700 text-lg font-semibold">
              Sarah Johnson
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <TouchableOpacity className="p-2">
          <NotificationIcon size={28} color="#2E8B57" />
        </TouchableOpacity>
      </ThemedView>
      <ThemedScrollView>
        <ThemedView className="bg-[#F8F8F8] flex-1 px-5 pt-7 pb-20 gap-7">
          <ThemedView className="bg-[#FFFFFF] p-4 rounded-[12px] flex flex-row flex-wrap gap-3 justify-center items-center shadow-subtle">
            <ServiceButton
              ServiceIcon={BookCareIcon}
              name="Book Care"
              action={() => router.push("/(service-users)/bookCare")}
            />
            <ServiceButton
              ServiceIcon={ActiveCareIcon}
              name="Active Care"
              action={() => ""}
            />
            <ServiceButton
              ServiceIcon={ServiceButtonMessagesIcon}
              name="Messages"
              action={() => router.push("/(service-users)/messages")}
            />
            <ServiceButton
              ServiceIcon={EmergencyIcon}
              action={() => ""}
              name="Emergency"
            />
          </ThemedView>

          {currentlyCaring ? (
            <ThemedView className="bg-[#2E8B571A] border border-[#2E8B57] rounded-[12px] flex flex-row justify-between items-center p-4 shadow-subtle">
              <ThemedView className="flex flex-row items-center gap-5">
                <Image
                  source={{
                    uri: "https://i.pinimg.com/736x/06/15/2b/06152b24dc6e14e6cdc06d6f7fcf7f6e.jpg",
                  }}
                  style={{ width: 48, height: 48, borderRadius: 25 }}
                />

                <ThemedView>
                  <ThemedText className="font-semibold text-lg pb-1">
                    Dr. Emily Wilson
                  </ThemedText>
                  <ThemedText className="text-[#2E8B57] text-base">
                    Currently Caring
                  </ThemedText>
                  <ThemedText className="text-[#666666]">
                    2 hours remaining
                  </ThemedText>
                </ThemedView>
              </ThemedView>

              <TouchableOpacity>
                <CallIcon />
              </TouchableOpacity>
            </ThemedView>
          ) : (
            <ThemedView className="bg-[#2E8B571A] rounded-[12px] flex flex-row justify-between items-center p-4 shadow-subtle">
              <ThemedView className="flex flex-row items-center gap-5">
                <Image
                  source={userProfile}
                  style={{ width: 48, height: 48, borderRadius: 25 }}
                />

                <ThemedView>
                  <ThemedText className="font-semibold text-lg pb-1">
                    Dr. Emily Wilson
                  </ThemedText>
                  <ThemedText className="text-[#666666]">
                    Today, 2:00 PM - 4:00 PM
                  </ThemedText>
                </ThemedView>
              </ThemedView>

              <Pressable>
                <ThemedText className="text-[#2E8B57] font-medium text-base">
                  View Details
                </ThemedText>
              </Pressable>
            </ThemedView>
          )}

          <ThemedView className="flex gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Recent Caregivers
            </ThemedText>

            <RecentCaregiverCard
              recentCaregiverCardImage={
                "https://i.pinimg.com/1200x/a0/eb/af/a0ebaf9ad27cf8b48d739d298a9ed02c.jpg"
              }
              rated={true}
              rating={4}
              name="Sarah Smith"
              date="Yesterday"
              profession="Physical Therapist"
            />

            <RecentCaregiverCard
              recentCaregiverCardImage={
                "https://i.pinimg.com/736x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg"
              }
              rated={false}
              rating={4}
              name="John Davis"
              date="2 days ago"
              profession="Home Nurse"
            />

            <RecentCaregiverCard
              recentCaregiverCardImage={
                "https://i.pinimg.com/736x/2e/da/a1/2edaa12086aa4d953389e64bdb8bd6c3.jpg"
              }
              rated={true}
              rating={5}
              name="Emma Doe"
              date="3 days ago"
              profession="Physical Therapist"
            />

            <RecentCaregiverCard
              recentCaregiverCardImage={
                "https://i.pinimg.com/736x/6a/9f/f2/6a9ff2a46729549abd2fecbe26afa78c.jpg"
              }
              rated={true}
              rating={3}
              name="Maria Rodriguez"
              date="4 days ago"
              profession="Caregiver"
            />
          </ThemedView>

          <ThemedView className="flex flex-row justify-between items-center">
            <StatsCard name="Care Hours" stats="48h" />
            <StatsCard name="Sessions" stats="12" />
            <StatsCard name="Avg Rating" stats="4.8" />
          </ThemedView>

          <ThemedView className="flex gap-3">
            <ThemedText className="text-xl font-bold text-[#333333]">
              Upcoming Appointments
            </ThemedText>

            <ThemedScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 16,
                paddingRight: cards.length > 0 ? 16 : 0,
              }}
            >
              {cards.map((card, index) => (
                <UpcomingCard
                  key={index}
                  name={card.name}
                  profession={card.profession}
                  time={card.time}
                  id={card.id}
                />
              ))}
            </ThemedScrollView>
          </ThemedView>
        </ThemedView>
      </ThemedScrollView>
    </ThemedView>
  );
}
