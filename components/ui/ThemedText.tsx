import React from "react";
import { Text, type TextProps } from "react-native";

export type ThemedViewProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedText = ({ ...otherProps }: ThemedViewProps) => {
  return <Text {...otherProps} />;
};

export default ThemedText;
