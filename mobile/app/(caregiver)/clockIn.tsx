import ClockInQrScanner from "@/components/caregiver/ClockInQrScanner";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import ManualClockIn from "../../components/caregiver/manualClockIn";

const ClockInPage = () => {
  const [showManual, setShowManual] = useState(false);
  const [qrData, setQrData] = useState<string | null>(null);
  const router = useRouter();

  const handleQrSuccess = (data: string) => {
    setQrData(data);
    router.push("/(caregiver)/clientDetail");
  };

  const handleManualClick = () => {
    setShowManual(true);
  };

  return (
    <ThemedView safe className="flex-1 bg-white">
      {showManual ? (
        <ManualClockIn qrData={qrData} setShowManual={setShowManual} />
      ) : (
        <ClockInQrScanner
          onSuccess={handleQrSuccess}
          onManualClick={handleManualClick}
        />
      )}
    </ThemedView>
  );
};

export default ClockInPage;
