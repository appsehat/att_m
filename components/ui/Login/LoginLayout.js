import { Image, Text, View } from "react-native";
import _config from "@/_config.json";

export default function LoginLayout({ children, label }) {
  return (
    <View className="flex-1 p-4 justify-around bg-white">
      <View>
        <View className="flex-row items-center mb-5">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-10 h-10"
          />
          <View className="ml-2">
            <Text className="text-md text-gray-500 font-bold">
              {_config.APP_ORG}
            </Text>
            <Text className="text-xl text-green-800 font-bold">
              {_config.APP_NAME}
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
    </View>
  );
}
