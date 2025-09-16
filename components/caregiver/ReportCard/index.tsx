import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";

interface ReportCardProps {
  icon: React.ReactNode;
  report: string;
  title: string;
}

const ReportCard = ({ report, icon, title }: ReportCardProps) => {
  return (
    <ThemedView className="shadow-subtle rounded-[12px] bg-[#FFFFFF] border border-[#F3F4F6] p-4 flex gap-1 w-[47%]">
      {icon}
      <ThemedText className="font-bold text-[19px] py-0.5">{report}</ThemedText>
      <ThemedText className="text-[#666666] text-base">{title}</ThemedText>
    </ThemedView>
  );
};

export default ReportCard;
