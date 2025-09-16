import { HomeIcon } from "@/assets/icons/HomeIcon";
import { MessageIcon } from "@/assets/icons/MessageIcon";
import { MoreIcon } from "@/assets/icons/More";
import { ScheduleIcon } from "@/assets/icons/ScheduleIcon";
import { HapticTab } from "@/components/HapticTab";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function ServiceUsersLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2E8B57",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: "absolute",
            },
          }),
          paddingTop: 10,
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
          paddingTop: 3,
        },
        tabBarItemStyle: {
          minWidth: 86,
        },
        sceneStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={25} />,
        }}
      />

      <Tabs.Screen
        name="schedules"
        options={{
          title: "Schedules",
          tabBarIcon: ({ color }) => <ScheduleIcon color={color} size={25} />,
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <MessageIcon color={color} size={25} />,
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => <MoreIcon color={color} size={26} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="bookCare"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
