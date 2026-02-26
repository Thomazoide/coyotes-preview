import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Beer } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveBackgroundColor: "#be185d",
        tabBarInactiveBackgroundColor: "#be185d",
        tabBarStyle: {
          outlineColor: "black",
          borderColor: "black",
          backgroundColor: "black",
        },
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Eventos",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carta"
        options={{
          title: "Carta",
          tabBarIcon: ({ color }) => <Beer color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
