import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import "../global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync("authToken");

      if (!token) {
        if (segments[0] !== "(auth)") {
          router.replace("/(auth)/login");
        }
      } else if (token === "caregiver-token") {
        if (segments[0] !== "(caregiver)") {
          router.replace("/(caregiver)");
        }
      } else if (token === "service-user-token") {
        if (segments[0] !== "(service-users)") {
          router.replace("/(service-users)");
        }
      }

      setCheckingAuth(false);
    };

    checkAuth();
  }, [segments]);

  if (!loaded || checkingAuth) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#2E8B57" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(caregiver)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(service-users)"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <Toast />
      </>
    </>
  );
}
