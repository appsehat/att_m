import { Image, Text, View } from "react-native";

export default function LoginLayout({ children, label }) {
  return (
    <View className="flex-1 justify-around px-4 bg-white">
      <View>
        <View className="justify-center">
          <View className="mb-10">
            <Text className="text-2xl text-green-700">{label.APP_NAME}</Text>
          </View>

          <Text className="mb-2 text-3xl text-green-700">{label.HELLO}</Text>
          <Text className="mb-5 text-3xl text-green-700">{label.WELCOME}</Text>
          <Text className="mb-2 text-sm text-gray-400">
            {label.ENTER_YOUR_USERNAME_AND_PASSWORD}
          </Text>
        </View>

        {children}
      </View>
    </View>
  );
}
