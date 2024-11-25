import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import _config from "@/_config.json";

export default function Layout({ children, logo, back, title }) {
  return (
    <SafeAreaView className="px-4 mb-28">
      {logo ? (
        <View className="flex-row items-center mb-2">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-12 h-12"
          />
          <View className="ml-2 justify-center">
            <Text className="text-lg text-green-900 font-bold">
              {_config.APP_NAME}
            </Text>
            <Text className="text-xs text-gray-400 font-bold">
              {_config.APP_ORG}
            </Text>
          </View>
        </View>
      ) : null}

      {title ? (
        <View className="flex-row mb-2 border-b border-gray-200">
          <View className="justify-center items-center">
            {back ? (
              <TouchableOpacity
                className="mr-2"
                onPress={() => router.push(back)}
              >
                <Ionicons
                  name="arrow-back"
                  size={20}
                  className="text-orange-800"
                />
              </TouchableOpacity>
            ) : null}
          </View>

          <Text className="text-lg text-gray-300">{title}</Text>
        </View>
      ) : null}

      {children}
    </SafeAreaView>
  );
}
