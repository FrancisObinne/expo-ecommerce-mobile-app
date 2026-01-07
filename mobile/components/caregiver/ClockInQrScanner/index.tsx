import ArrowBack from "@/assets/icons/ArrowBack";
import FlashLightIcon from "@/assets/icons/FlashLightIcon";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import {
  CameraView,
  scanFromURLAsync,
  useCameraPermissions,
} from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ClockInQrScannerProps {
  onSuccess: (data: string) => void;
  onManualClick: () => void;
}

export default function ClockInQrScanner({
  onSuccess,
  onManualClick,
}: ClockInQrScannerProps) {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!permission) {
    return (
      <ThemedView className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#000" />
      </ThemedView>
    );
  }

  if (!permission.granted) {
    return (
      <Modal animationType="fade" transparent visible={!permission.granted}>
        <View className="flex-1 justify-center items-center bg-black/40">
          <View className="bg-white rounded-2xl p-6 w-4/5 shadow-lg">
            <Text className="text-black text-lg mb-6 text-center">
              Camera permission required for QR scanning
            </Text>

            <TouchableOpacity
              className="bg-green-600 px-6 py-3 rounded-xl"
              onPress={requestPermission}
            >
              <Text className="text-white font-semibold text-center">
                Grant Permission
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  const triggerSuccessWithDelay = (data: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(data);
    }, 2500);
  };

  const handleBarcodeScanned = (result: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      triggerSuccessWithDelay(result.data);
    }
  };

  const pickImageAndScanQR = async () => {
    try {
      setIsProcessing(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
      });

      if (!result.canceled && result.assets[0]) {
        const scannedData = await scanFromURLAsync(result.assets[0].uri, [
          "qr",
        ]);
        if (scannedData?.length > 0) {
          triggerSuccessWithDelay(scannedData[0].data);
          setScanned(true);
        } else {
          Alert.alert("No QR Code Found");
        }
      }
    } catch (error) {
      Alert.alert("Error", "Could not scan QR code");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <ThemedView className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#16A34A" />
        <Text className="mt-4 text-lg font-semibold text-black">
          Processing clock-in...
        </Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="flex-1 bg-white w-full">
      <ThemedView className="flex-row items-center justify-between py-3 px-5 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowBack />
        </TouchableOpacity>
        <ThemedText className="text-xl font-bold text-[#000]">
          Scan QR Code
        </ThemedText>
        <TouchableOpacity onPress={() => setTorchOn((prev) => !prev)}>
          <FlashLightIcon color={torchOn ? "green" : "black"} />
        </TouchableOpacity>
      </ThemedView>

      <View className="bg-white w-full items-center justify-center">
        <CameraView
          style={{ width: "100%", height: 500 }}
          facing="back"
          enableTorch={torchOn}
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        />
        <View className="absolute w-[23rem] h-[25rem] border-2 border-white rounded-lg" />
      </View>

      <View className="py-4 px-6 items-center">
        <Text className="text-xl tracking-wide font-semibold text-black mb-1">
          Position the QR code within the frame
        </Text>
        <Text className="text-lg text-gray-500 mb-4">
          The scan will happen automatically
        </Text>

        <ThemedText className="text-sm pb-3 text-[#4B5563] text-left w-full">{`Can't scan?`}</ThemedText>

        <TouchableOpacity
          onPress={pickImageAndScanQR}
          disabled={isProcessing}
          className={`flex-row items-center justify-center px-6 py-4 rounded-xl w-full mb-3 ${
            isProcessing ? "bg-gray-400" : "bg-green-600"
          }`}
        >
          {isProcessing ? (
            <>
              <ActivityIndicator size="small" color="white" />
              <Text className="ml-2 text-lg text-white font-semibold">
                Processing...
              </Text>
            </>
          ) : (
            <>
              <Ionicons name="cloud-upload" size={18} color="white" />
              <Text className="ml-2 text-lg text-white font-semibold">
                Upload QR Code
              </Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onManualClick}
          className="flex-row items-center justify-center border border-green-600 px-6 py-4 rounded-xl w-full"
        >
          <Ionicons name="grid" size={18} color="#16A34A" />
          <Text className="ml-2 text-lg text-green-600 font-semibold">
            Clock In Manually
          </Text>
        </TouchableOpacity>

        <Text className="mt-2 text-xs text-gray-500 text-center">
          Camera permission required for QR scanning
        </Text>
      </View>
    </ThemedView>
  );
}
