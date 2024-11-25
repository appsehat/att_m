import { Text, View } from "react-native";

export default function ProfileText({ label, value }) {
  return (
    <View className="mt-3">
      <Text className="text-lg font-bold">{label}</Text>
      <View className="bg-gray-200 justify-center rounded-md px-3 py-2 mt-1">
        <Text className="text-sm">{value}</Text>
      </View>
    </View>
  );
}
