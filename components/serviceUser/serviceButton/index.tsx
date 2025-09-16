import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { TouchableOpacity } from "react-native";

interface ServiceButtonProps {
  ServiceIcon(): React.JSX.Element;
  name: string;
  action: () => void;
}

const ServiceButton = ({ ServiceIcon, name, action }: ServiceButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      className="w-[47%] flex justify-center items-center p-4 gap-1 bg-[#F8FAFC] rounded-[8px]"
    >
      <TouchableOpacity
        onPress={() => action()}
        className={`${name === "Emergency" ? "bg-[#FF00001A]" : "bg-[#2E8B571A]"} flex justify-center items-center w-[48px] h-[48px] rounded-full`}
      >
        <ServiceIcon />
      </TouchableOpacity>
      <ThemedText className="text-base text-[#333333] font-medium">
        {name}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default ServiceButton;
