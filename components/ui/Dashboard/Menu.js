import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Menu({
  target = "",
  icon = "",
  size = 22,
  caption = "",
}) {
  return (
    <TouchableOpacity
      onPress={() => router.push(target)}
      className="bg-green-50 justify-center items-center rounded-xl py-2"
    >
      <Ionicons name={icon} size={size} color="gray" />
      <Text className="text-xs text-green-900">{caption}</Text>
    </TouchableOpacity>
  );
}
