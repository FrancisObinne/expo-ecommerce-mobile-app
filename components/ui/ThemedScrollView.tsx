import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";

type ThemedScrollViewProps = ScrollViewProps & {
  children: React.ReactNode;
  grow?: boolean; // 👈 new prop
};

export default function ThemedScrollView({
  children,
  contentContainerStyle,
  grow,
  ...props
}: ThemedScrollViewProps) {
  return (
    <ScrollView
      {...props}
      contentContainerStyle={[
        grow ? { flexGrow: 1 } : null,
        contentContainerStyle,
      ]}
    >
      {children}
    </ScrollView>
  );
}
