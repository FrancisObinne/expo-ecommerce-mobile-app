import { HomeIcon } from "@/assets/icons/HomeIcon";
import { MoreIcon } from "@/assets/icons/More";
import ReportIcon from "@/assets/icons/ReportIcon";
import { ScheduleIcon } from "@/assets/icons/ScheduleIcon";

import { HapticTab } from "@/components/HapticTab";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function CaregiverLayout() {
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
          paddingTop: 2,
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
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={26} />,
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => <ScheduleIcon color={color} size={26} />,
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
          tabBarIcon: ({ color }) => <ReportIcon color={color} size={26} />,
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
        name="settings"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="clientNote"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="clockIn"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="clientDetail"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="clientReport"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
