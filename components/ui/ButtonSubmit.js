import { Image, Text, TouchableOpacity } from "react-native";

export default function ButtonSubmit({
  _submit,
  _caption = "",
  _process = false,
}) {
  return (
    <TouchableOpacity className="flex w-full items-center" onPress={_submit}>
      {_process ? (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/loading.gif")}
        />
      ) : (
        <Text className="text-lg">{_caption}</Text>
      )}
    </TouchableOpacity>
  );
}
