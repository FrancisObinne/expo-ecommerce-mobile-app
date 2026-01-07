import { ThemedActionButton } from "@/components/ui/ThemedActionButton";
import ThemedLogo from "@/components/ui/ThemedLogo";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedInput } from "@/components/ui/ThemedTextInput";
import { ThemedView } from "@/components/ui/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // 🔹 Hardcoded login details
  const caregiverCreds = {
    email: "caregiver@appcare.com",
    password: "care123",
  };
  const serviceUserCreds = { email: "user@appcare.com", password: "user123" };

  const handleLogin = async () => {
    if (
      email === caregiverCreds.email &&
      password === caregiverCreds.password
    ) {
      await SecureStore.setItemAsync("authToken", "caregiver-token");
      // Toast.show({
      //   type: "success",
      //   text1: "Login Successful",
      //   text2: "Welcome back, Caregiver!",
      //   position: "top",
      //   visibilityTime: 2000,
      //   autoHide: true,
      //   swipeable: true,
      // });
      router.replace("/(caregiver)");
    } else if (
      email === serviceUserCreds.email &&
      password === serviceUserCreds.password
    ) {
      await SecureStore.setItemAsync("authToken", "service-user-token");
      // Toast.show({
      //   type: "success",
      //   text1: "Login Successful",
      //   text2: "Welcome back!",
      //   position: "top",
      //   visibilityTime: 2000,
      //   autoHide: true,
      //   swipeable: true,
      // });
      router.replace("/(service-users)");
    } else {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: "Invalid email or password. Please try again.",
        position: "top",
        visibilityTime: 2000,
        autoHide: true,
        swipeable: true,
      });
    }
  };

  return (
    <ThemedView safe className="flex-1 bg-white justify-center px-6">
      <View className="items-center mb-6">
        <ThemedLogo />
      </View>

      <View className="mb-6">
        <ThemedText className="font-semibold text-[#1A1A1A] text-center text-[24px] mb-1">
          Welcome back!
        </ThemedText>
        <ThemedText className="text-[#666666] text-center">
          Please sign in to continue
        </ThemedText>
      </View>

      <ThemedInput
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        labelClassName="font-semibold"
      />

      <ThemedInput
        label="Password"
        placeholder="Enter your password"
        secureToggle
        onChangeText={setPassword}
        value={password}
        labelClassName="font-semibold"
      />

      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => setRememberMe(!rememberMe)}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center">
            <View
              className={`w-6 h-6 mr-3 rounded-full border-2 flex items-center justify-center ${
                rememberMe ? "bg-[#2E8B57] border-[#2E8B57]" : "border-gray-400"
              }`}
            >
              {rememberMe && (
                <Text className="text-white text-sm font-bold">✓</Text>
              )}
            </View>
            <Text className="text-[#666666]">Remember me</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/forgotten-password")}>
          <Text className="text-[#2E8B57] font-medium">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Single Login Button */}
      <ThemedActionButton
        title="Sign In"
        onPress={handleLogin}
        className="py-4 mb-5"
        textClassName="text-lg"
      />
      <View className="flex-row items-center mb-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-4 text-[#666666]">Or continue with</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Login */}
      <View className="flex-row justify-between">
        <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-gray-300 rounded-xl py-3 mr-2 gap-2">
          <Ionicons name="logo-google" size={20} color={"#000000"} />
          <Text className="font-medium">Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-gray-300 rounded-xl py-3 ml-2 gap-2">
          <Ionicons name="logo-apple" size={20} color={"#000000"} />
          <Text className="font-medium">Apple</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}
