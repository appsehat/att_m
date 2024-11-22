import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "react-native";
import { Text, TouchableOpacity } from "react-native";

export default function Menu({
  target = "",
  icon = "",
  size = 22,
  caption = "",
}) {
  return (
    <View className="items-center bg-green-700 p-1 rounded-2xl">
      <TouchableOpacity
        className="w-[85px] h-[75px] bg-green-50 justify-center items-center rounded-xl"
        onPress={() => router.push(target)}
      >
        <Ionicons name={icon} size={size} color="gray" />
        <Text className="text-xs text-green-900">{caption}</Text>
      </TouchableOpacity>
    </View>
  );
}
