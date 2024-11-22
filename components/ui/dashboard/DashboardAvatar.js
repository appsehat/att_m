import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Image, View } from "react-native";

export default DashboardAvatar = ({ uri }) => {
  const btnProfileClick = async () => {
    router.push("/tabs/profile");
  };
  return (
    <TouchableOpacity onPress={btnProfileClick}>
      <View className="p-1 bg-green-700 rounded-full">
        <Image source={{ uri: uri }} className="w-10 h-10 rounded-full " />
      </View>
    </TouchableOpacity>
  );
};
