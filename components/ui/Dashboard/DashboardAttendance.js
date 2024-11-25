import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function DashboardAttendance({ label }) {
  return (
    <View className="flex-row justify-between gap-x-3">
      <View className="flex-1 border border-gray-300 bg-white p-2 justify-center rounded-xl">
        <View className="flex-row items-center">
          <Ionicons name="log-in" size={20} color="gray" />
          <Text className="text-md text-green-900 ml-1">{label.CHECK_IN}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl text-red-500">08:00</Text>
        </View>
      </View>

      <View className="flex-1 border border-gray-300 bg-white p-2 justify-center rounded-xl">
        <View className="flex-row items-center">
          <Ionicons name="log-out" size={20} color="gray" />
          <Text className="text-md text-green-900 ml-1">{label.CHECK_OUT}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl text-red-500">17:00</Text>
        </View>
      </View>
    </View>
  );
}
