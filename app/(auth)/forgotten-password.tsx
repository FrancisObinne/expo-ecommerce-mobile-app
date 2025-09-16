import { ThemedActionButton } from "@/components/ui/ThemedActionButton";
import { ThemedInput } from "@/components/ui/ThemedTextInput";
import { ThemedView } from "@/components/ui/ThemedView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import ArrowBackIcon from "../../assets/icons/arrow-back.svg";
import ResetPasswordIcon from "../../assets/icons/reset-password.svg";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <ThemedView
      safe
      className="flex-1 bg-white justify-start items-center px-6 gap-5"
    >
      <View className="flex-row justify-start pt-4 pb-8 w-full">
        <Pressable onPress={() => router.push("/login")}>
          <ArrowBackIcon />
        </Pressable>
        <Text className="font-bold text-2xl w-[80%] text-center">
          Reset Password
        </Text>
      </View>
      <ResetPasswordIcon />

      <Text className="text-[#666666] text-[19.5px] text-center pt-3 tracking-wide leading-7">
        {`Enter your email address and we'll send you instructions to reset your  password.`}
      </Text>

      <ThemedInput
        label="Email address"
        placeholder="Enter your email address"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        labelClassName="font-semibold"
        containerClassName="w-full"
      />

      <ThemedActionButton
        title="Send Reset Instructions"
        onPress={() => {
          console.log("email", email);

          router.push("/");
        }}
        className="py-4 mb-6 w-full"
        textClassName="text-lg"
      />

      <View className="flex-row text-center gap-1.5">
        <Text className="text-[#666666] text-lg">{`Didn't receive the email?`}</Text>
        <Text className="text-[#2E8B57] text-lg">{`Contact Support`}</Text>
      </View>

      <Pressable onPress={() => router.push("/login")}>
        <Text className="text-lg font-semibold text-[#2E8B57]">
          Back to Login
        </Text>
      </Pressable>
    </ThemedView>
  );
};

export default ForgottenPassword;
