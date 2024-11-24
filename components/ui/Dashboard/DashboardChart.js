import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function DashboardChart({ label }) {
  return (
    <View className="flex-row justify-between gap-x-3 mt-3">
      <View className="flex-1 border border-gray-500 bg-gray-100 p-2 justify-center rounded-xl">
        <View className="flex-row items-center">
          <Ionicons name="briefcase" size={18} color="gray" />
          <Text className="text-sm text-green-900 ml-1">{label.PERMITS}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl text-red-500">1</Text>
        </View>
      </View>

      <View className="flex-1 border border-gray-500 bg-gray-100 p-2 justify-center rounded-xl">
        <View className="flex-row items-center">
          <Ionicons name="alarm" size={18} color="gray" />
          <Text className="text-sm text-green-900 ml-1">
            {label.LEAVE_REST}
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-xl text-red-500">3</Text>
        </View>
      </View>

      <View className="flex-1 border border-gray-500 bg-gray-100 p-2 justify-center rounded-xl">
        <View className="flex-row items-center">
          <Ionicons name="calendar" size={18} color="gray" />
          <Text className="text-sm text-green-900 ml-1">
            {label.ATTENDANCES}
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-lg text-red-500">2</Text>
        </View>
      </View>
    </View>
  );
}
