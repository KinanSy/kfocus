import { View, ScrollView } from "react-native";
import { Slot } from "expo-router";
import AppHeader from "@/components/appHeader";
import AppFooter from "@/components/appFooter";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <View className="flex-1 bg-gray-50">
            <AppHeader />
            <ScrollView
              contentContainerStyle={{ paddingTop: 64, paddingBottom: 64, flexGrow: 1 }}
            >
              <Slot />
            </ScrollView>
            <AppFooter />
          </View>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView >
  );
}
