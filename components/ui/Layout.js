import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function Layout({ children, back, title }) {
  return (
    <View className="mt-7">
      <View className="px-4 bg-white">
        {back ? (
          <View className="pt-2 flex flex-row justify-between">
            <View className="p-1 bg-red-200 rounded-3xl">
              <TouchableOpacity
                className="px-3 py-1 bg-orange-100 rounded-2xl"
                onPress={() => router.push(_back)}
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

        <View className="mb-3 justify-center items-center">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-14 h-14"
          />
        </View>

        {children}
      </View>
    </View>
  );
}
