import { View, ScrollView } from "react-native";
import { Slot } from "expo-router";
import AppHeader from "@/components/appHeader";
import AppFooter from "@/components/appFooter";
import "../global.css";

export default function Layout() {
  return (
    <View className="flex-1 bg-gray-50">
      <AppHeader />

      {/* Scrollable Page Content */}
      <ScrollView
        contentContainerStyle={{ paddingTop: 64, paddingBottom: 64 }}
        className="flex-1 p-4"
      >
        <Slot />
      </ScrollView>

      <AppFooter />
    </View>
  );
}
