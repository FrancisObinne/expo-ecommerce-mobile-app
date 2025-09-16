import ArrowRight from "@/assets/icons/ArrowRight";
import ClockIcon from "@/assets/icons/ClockIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

interface UpcomingVisitsCardProps {
  statusColor: string;
  name: string;
  address: string;
  time: string;
}

const UpcomingVisitsCard = ({
  statusColor,
  name,
  address,
  time,
}: UpcomingVisitsCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/(caregiver)/clientReport")}
      className="flex flex-row justify-between items-center py-4"
    >
      <ThemedView className="flex flex-col gap-2">
        <ThemedView className="flex flex-row gap-3 items-center pl-1">
          <ThemedView className={`w-2.5 h-2.5 rounded-full ${statusColor}`} />
          <ThemedText className="text-[#1E293B] font-bold text-base">
            {name}
          </ThemedText>
        </ThemedView>

        <ThemedView className="flex flex-row gap-2 items-center">
          <LocationIcon />
          <ThemedText className="text-[#64748B] font-medium">
            {address}
          </ThemedText>
        </ThemedView>

        <ThemedView className="flex flex-row gap-2 items-center">
          <ClockIcon />
          <ThemedText className="text-[#64748B] font-medium">{time}</ThemedText>
        </ThemedView>
      </ThemedView>

      <ArrowRight />
    </TouchableOpacity>
  );
};

export default UpcomingVisitsCard;
