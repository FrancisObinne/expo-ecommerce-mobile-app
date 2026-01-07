import ThemedText from "@/components/ui/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

type ThemedInputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  secureToggle?: boolean;
};

export const ThemedInput: React.FC<ThemedInputProps> = ({
  label,
  error,
  containerClassName,
  inputClassName,
  labelClassName,
  secureToggle = false,
  secureTextEntry,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = secureToggle || secureTextEntry;

  return (
    <View className={`mb-4 ${containerClassName ?? ""}`}>
      {label && (
        <ThemedText
          className={`text-[#666666] text-[16.5px] mb-1  ${labelClassName ?? ""}`}
        >
          {label}
        </ThemedText>
      )}

      <View
        className={`flex-row items-center border border-gray-200 rounded-xl bg-gray-50 px-4`}
      >
        <TextInput
          placeholderTextColor="#9ca3af"
          secureTextEntry={isPassword && !showPassword}
          className={`flex-1 py-4 text-base text-gray-800 ${inputClassName ?? ""}`}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#6b7280"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <ThemedText className="mt-1 text-sm text-red-500">{error}</ThemedText>
      )}
    </View>
  );
};
