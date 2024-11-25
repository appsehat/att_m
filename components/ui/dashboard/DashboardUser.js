import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default DashboardUser = ({ uri, name = "" }) => {
  const btnProfileClick = async () => {
    router.push("/tabs/profile");
  };

  return (
    <View className="justify-center items-center mt-2">
      <TouchableOpacity onPress={btnProfileClick}>
        <View className="p-1 bg-green-700 rounded-full">
          <Image source={{ uri: uri }} className="w-10 h-10 rounded-full " />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={btnProfileClick} className="mb-2">
        <Text className="text-lg text-green-900 font-bold">{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
