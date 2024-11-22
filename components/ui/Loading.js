import { Image, View } from "react-native";

export default Loading = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        style={{ width: 50, height: 50 }}
        source={require("@/assets/images/loading.gif")}
      />
    </View>
  );
};
