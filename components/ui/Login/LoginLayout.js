import { Image, Text, View } from "react-native";
import _config from "@/_config.json";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginLayout({ children, label }) {
  return (
    <SafeAreaView className="flex-1 p-4 justify-around bg-white">
      <View>
        <View className="flex-row items-center mb-10">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-16 h-16"
          />
          <View className="ml-2">
            <Text className="text-3xl text-green-800 font-bold">
              {_config.APP_NAME}
            </Text>
            <Text className="text-md text-gray-500 font-bold">
              {_config.APP_ORG}
            </Text>
          </View>
        </View>

        <View className="justify-center">
          <Text className="text-3xl text-green-700">{label.HELLO}</Text>
          <Text className="mb-3 text-3xl text-green-700">{label.WELCOME}</Text>
          <Text className="mb-2 text-sm text-gray-400">
            {label.ENTER_YOUR_USERNAME_AND_PASSWORD}
          </Text>
        </View>

        {children}
      </View>
    </SafeAreaView>
  );
}
