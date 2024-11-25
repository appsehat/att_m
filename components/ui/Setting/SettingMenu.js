import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingMenu({ label, target }) {
  const menuClick = async () => {
    router.push(target);
  };

  return (
    <TouchableOpacity
      onPress={menuClick}
      className="flex-row justify-between mt-3"
    >
      <View className="justify-center">
        <Ionicons name="language" size={15} color="gray" />
      </View>
      <View className="flex-1 justify-center ml-2 border-b border-gray-200 ">
        <Text className="text-lg font-bold">{label}</Text>
      </View>
      <View className="justify-center">
        <Ionicons
          className="mt-2"
          name="chevron-forward"
          size={20}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
}
