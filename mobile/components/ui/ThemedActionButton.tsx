import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  Text,
  TouchableOpacityProps,
} from "react-native";

type ThemedActionButtonProps = TouchableOpacityProps & {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
};

export const ThemedActionButton: React.FC<ThemedActionButtonProps> = ({
  title,
  onPress,
  disabled = false,
  className,
  textClassName,
  ...otherProps
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded-xl py-4 px-6 items-center justify-center shadow-md
        ${disabled ? "bg-gray-400" : "bg-[#2E8B57]"} ${className ?? ""}
        `}
      {...otherProps}
    >
      <Text
        onPress={onPress}
        className={`text-base font-semibold text-white ${textClassName ?? ""}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};
