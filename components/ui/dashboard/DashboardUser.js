import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default DashboardUser = ({ uri, name = "" }) => {
  const btnProfileClick = async () => {
    router.push("/tabs/profile");
  };

  return (
    <View className="justify-center items-center">
      <TouchableOpacity onPress={btnProfileClick}>
        <View className="p-1 bg-green-700 rounded-full">
          <Image source={{ uri: uri }} className="w-10 h-10 rounded-full " />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={btnProfileClick} className="mb-4">
        <Text className="text-md text-green-900">{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
