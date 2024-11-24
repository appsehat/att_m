import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import _config from "@/_config.json";

export default function Layout({ children, back, title }) {
  return (
    <View className="mt-9">
      <View className="px-4 bg-white">
        {back ? (
          <View className="pt-2 flex flex-row justify-between">
            <View className="p-1 bg-red-200 rounded-3xl">
              <TouchableOpacity
                className="px-3 py-1 bg-orange-100 rounded-2xl"
                onPress={() => router.push(back)}
              >
                <Ionicons
                  name="arrow-back"
                  size={20}
                  className="text-orange-800"
                />
              </TouchableOpacity>
            </View>

            <View className="py-0 pl-4 pr-2 bg-orange-100 rounded-l-full items-end border border-r-8 border-orange-400 ">
              <Text className="mt-1 text-lg text-gray-500 font-bold">
                {title}
              </Text>
            </View>
          </View>
        ) : null}

        <View className="flex-row items-center mb-5">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-10 h-10"
          />
          <View className="ml-1">
            <Text className="text-md text-gray-700 font-bold">
              {_config.APP_ORG}
            </Text>
            <Text className="text-xl text-green-800 font-bold">
              {_config.APP_NAME}
            </Text>
          </View>
        </View>

        {children}
      </View>
    </View>
  );
}
