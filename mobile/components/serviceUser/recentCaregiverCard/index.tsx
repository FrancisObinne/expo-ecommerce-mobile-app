import GreenStar from "@/assets/icons/GreenStar";
import GreyStar from "@/assets/icons/GreyStar";
import userProfile from "@/assets/images/userProfile.png";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface RecentCaregiverCardProps {
  recentCaregiverCardImage: string;
  rated: boolean;
  rating: number;
  name: string;
  profession: string;
  date: string;
}

const RecentCaregiverCard = ({
  recentCaregiverCardImage,
  rated,
  rating,
  date,
  name,
  profession,
}: RecentCaregiverCardProps) => {
  return (
    <ThemedView className="bg-[#fff] rounded-[12px] flex flex-row justify-between items-center p-4 shadow-subtle">
      <ThemedView className="flex flex-row items-center gap-5">
        <Image
          source={
            recentCaregiverCardImage
              ? { uri: recentCaregiverCardImage }
              : userProfile
          }
          style={{ width: 48, height: 48, borderRadius: 24 }}
        />

        <ThemedView>
          <ThemedText className="font-semibold text-lg pb-1">{name}</ThemedText>
          <ThemedText className="text-[#666666]">{profession}</ThemedText>
          <ThemedText className="text-[#666666]">{date}</ThemedText>
        </ThemedView>
      </ThemedView>

      {rated ? (
        <ThemedView className="flex flex-row gap-1">
          {[1, 2, 3, 4, 5].map((star) =>
            star <= rating ? <GreenStar key={star} /> : <GreyStar key={star} />
          )}
        </ThemedView>
      ) : (
        <TouchableOpacity className="bg-[#2E8B57] py-3 px-4 rounded-full">
          <ThemedText className="text-[#fff] font-medium text-base">
            Rate Now
          </ThemedText>
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};

export default RecentCaregiverCard;
