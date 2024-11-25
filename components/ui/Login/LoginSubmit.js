import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import Axios from "axios";
Axios.defaults.withCredentials = true;

import _config from "@/_config.json";

export default function LoginSubmit({ label = {}, form = {} }) {
  const [process, setProcess] = useState(false);

  const formSubmit = async () => {
    setProcess(true);

    setTimeout(() => {
      setProcess(false);

      router.push("/tabs");
    }, 10);
  };

  return (
    <View className="flex bg-green-700 rounded-xl justify-center">
      <TouchableOpacity
        style={{ height: 50 }}
        className="flex w-full justify-center items-center"
        onPress={formSubmit}
        disabled={process}
      >
        {process ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text className="text-lg text-white font-bold">{label.ENTER}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
