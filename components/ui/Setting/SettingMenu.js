import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingMenu({ icon, label, target }) {
  const menuClick = async () => {
    router.push(target);
  };

  return (
    <TouchableOpacity onPress={menuClick} className="flex-row mt-3">
      <View className="justify-center">
        <Ionicons name={icon} size={15} color="gray" />
      </View>
      <View className="justify-center ml-2 pb-1">
        <Text className="text-lg">{label}</Text>
      </View>
      <View className="justify-center ml-2">
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
