import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import _config from "@/_config.json";

export default function Layout({ children, back, title }) {
  return (
    <SafeAreaView className="px-4 bg-white mb-40">
      <View className="flex-row justify-between">
        <View className="justify-center items-center">
          {back ? (
            <TouchableOpacity onPress={() => router.push(back)}>
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

      <View className="flex-row items-center mb-2">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-10 h-10"
        />
        <View className="ml-1 justify-center">
          <Text className="text-gray-700 font-bold">{_config.APP_ORG}</Text>
          <Text className="text-green-800 font-bold">{_config.APP_NAME}</Text>
        </View>
      </View>

      {children}
    </SafeAreaView>
  );
}
