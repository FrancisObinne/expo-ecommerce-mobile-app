import { ThemedView } from "@/components/ui/ThemedView";
import { useLogout } from "@/hooks/useLogout";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";

export default function MorePage() {
  const router = useRouter();
  const logout = useLogout();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert("Confirm Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          logout();
          router.replace("/(auth)/login");
        },
      },
    ]);
  };

  const MenuItem = ({
    icon,
    title,
    subtitle,
    onPress,
    showChevron = true,
    rightComponent,
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    showChevron?: boolean;
    rightComponent?: React.ReactNode;
  }) => (
    <Pressable
      onPress={onPress}
      className="flex-row items-center py-4 px-4 bg-white border-b border-gray-100"
    >
      <View className="w-10 h-10 bg-[#E8F5E8] rounded-full items-center justify-center mr-3">
        <Ionicons name={icon} size={20} color="#2E8B57" />
      </View>

      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-900">{title}</Text>
        {subtitle && (
          <Text className="text-sm text-gray-500 mt-1">{subtitle}</Text>
        )}
      </View>

      {rightComponent ||
        (showChevron && (
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        ))}
    </Pressable>
  );

  return (
    <ThemedView safe className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="px-6 py-4">
          <View className="flex-row items-center gap-4">
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/13/37/69/133769dd59076e20c08191f2a7597331.jpg",
              }}
              style={{ width: 55, height: 55, borderRadius: 25 }}
            />

            <View>
              <Text className="text-black text-xl font-bold">
                Sarah Johnson
              </Text>
              {/* <Text className="text-[#2E8B57] text-sm">
                Professional Caregiver
              </Text> */}
            </View>
          </View>
        </View>

        {/* Profile Section */}
        <View className="mt-6 bg-white">
          <Text className="text-lg font-semibold text-gray-900 px-4 py-3 bg-gray-50">
            Account
          </Text>

          <MenuItem
            icon="person"
            title="Profile Settings"
            subtitle="Update your personal information"
            // onPress={() => router.push("/(more)/profile")}
          />

          <MenuItem
            icon="settings"
            title="Account Settings"
            subtitle="Privacy, security, and preferences"
            // onPress={() => router.push("/(more)/account-settings")}
          />
        </View>

        {/* App Settings */}
        <View className="mt-6 bg-white">
          <Text className="text-lg font-semibold text-gray-900 px-4 py-3 bg-gray-50">
            App Settings
          </Text>

          <MenuItem
            icon="notifications"
            title="Notifications"
            subtitle="Manage your notification preferences"
            showChevron={false}
            rightComponent={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#D1D5DB", true: "#86EFAC" }}
                thumbColor={notificationsEnabled ? "#2E8B57" : "#F3F4F6"}
              />
            }
          />

          <MenuItem
            icon="moon"
            title="Dark Mode"
            subtitle="Switch to dark theme"
            showChevron={false}
            rightComponent={
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
                trackColor={{ false: "#D1D5DB", true: "#86EFAC" }}
                thumbColor={darkModeEnabled ? "#2E8B57" : "#F3F4F6"}
              />
            }
          />
        </View>

        {/* Support Section */}
        <View className="mt-6 bg-white">
          <Text className="text-lg font-semibold text-gray-900 px-4 py-3 bg-gray-50">
            Support
          </Text>

          <MenuItem
            icon="help-circle"
            title="Help & Support"
            subtitle="FAQs, tutorials, and contact support"
            // onPress={() => router.push("/(more)/help")}
          />

          <MenuItem
            icon="call"
            title="Emergency Contacts"
            subtitle="Manage emergency contact information"
            // onPress={() => router.push("/(more)/emergency-contacts")}
          />

          <MenuItem
            icon="shield-checkmark"
            title="Safety Guidelines"
            subtitle="Review safety protocols and guidelines"
            // onPress={() => router.push("/(more)/safety")}
          />
        </View>

        {/* Logout Section */}
        <View className="mt-6 bg-white mb-6">
          <MenuItem
            icon="log-out-outline"
            title="Logout"
            subtitle="Sign out of your account"
            onPress={handleLogout}
            showChevron={false}
          />
        </View>

        {/* App Version */}
        <View className="px-4 py-4">
          <Text className="text-center text-sm text-gray-500">
            CareApp Version 1.2.3
          </Text>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
