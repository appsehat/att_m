import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

import AppContext from "@/store/AppContext";

export default function RootLayout() {
  useEffect(() => {
    rootLoader();
  }, []);

  const rootLoader = async () => {
    await SecureStore.setItemAsync("appLang", "id");
    if (!(await SecureStore.getItemAsync("appLang")))
      await SecureStore.setItemAsync("appLang", "id");
  };

  return (
    <AppContext>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="tabs" />
      </Stack>
    </AppContext>
  );
}
