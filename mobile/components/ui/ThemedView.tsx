import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
  type ViewProps,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  safe?: boolean;
  children?: React.ReactNode;
};

export function ThemedView({
  safe = false,
  style,
  children,
  ...otherProps
}: ThemedViewProps) {
  const insets = useSafeAreaInsets();

  if (safe) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView
          style={[{ flex: 1 }, style]}
          edges={["top", "left", "right"]} // don’t include "bottom"
          {...otherProps}
        >
          {children}

          {/* ✅ Only add bottom inset on iOS */}
          {Platform.OS === "ios" && <View style={{ height: insets.bottom }} />}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style} {...otherProps}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
