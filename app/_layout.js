import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";

import AppContext from "@/components/AppContext";

export default function RootLayout() {
  useEffect(() => {
    rootLoader();
  }, []);

  const rootLoader = async () => {
    try {
      await SecureStore.setItemAsync("appLang", "id");
      if (!(await SecureStore.getItemAsync("appLang"))) {
        await SecureStore.setItemAsync("appLang", "id");
      }
    } catch (error) {
      console.error("Error in rootLoader:", error);
    }
  };

  return (
    <AppContext>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="tabs" />
        </Stack>
      </SafeAreaProvider>
    </AppContext>
  );
}
