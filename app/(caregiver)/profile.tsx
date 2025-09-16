import { ThemedView } from "@/components/ui/ThemedView";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

export default function ProfilePage() {
  const router = useRouter();
  const logout = useLogout();

  return (
    <ThemedView
      safe
      className="flex-1 bg-white justify-center items-center px-6"
    >
      <Text className="text-3xl font-bold mb-6">Profile Page</Text>

      <Pressable
        onPress={() => {
          logout();
          router.replace("/(auth)/login");
        }}
        className="bg-[#2E8B57] px-6 py-3 rounded-lg"
      >
        <Text className="text-white text-lg">Go to Login</Text>
      </Pressable>
    </ThemedView>
  );
}
