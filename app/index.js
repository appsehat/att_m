import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppContext } from "@/components/AppContext";
import AppLabel from "@/components/AppLabel";
import * as Function from "@/components/AppFunction";

import Loading from "@/components/ui/Loading";
import LoginLayout from "@/components/ui/Login/LoginLayout";
import LoginSubmit from "@/components/ui/Login/LoginSubmit";

export default function PageLogin() {
  const focus = useIsFocused();
  const value = useContext(AppContext);
  const label = AppLabel[value.LANG];

  const [loading, setLoading] = useState(true);

  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);

  useEffect(() => {
    if (focus) pageControll();
  }, [focus]);

  const pageControll = async () => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  };

  if (loading) return <Loading />;
  return (
    <LoginLayout label={label}>
      <View className="flex p-2 mb-2 bg-gray-100 rounded-lg justify-center">
        <View className="flex-row items-center p-1">
          <Ionicons name="mail-open" size={20} color={"gray"} />
          <TextInput
            autoFocus
            className="text-[16px] ml-2"
            onChangeText={setUsername}
            value={username}
            placeholder={label.ENTER_YOUR_USERNAME}
          />
        </View>
      </View>

      <View className="flex p-2 mb-3 bg-gray-100 rounded-lg justify-center">
        <View className="flex-row items-center justify-between p-1">
          <Ionicons name="lock-closed" size={20} color={"gray"} />
          <TextInput
            secureTextEntry={passwordShow}
            className="flex-1 text-[16px] ml-2"
            onChangeText={setPassword}
            value={password}
            placeholder={label.ENTER_YOUR_PASSWORD}
          />
          <TouchableOpacity onPress={() => setPasswordShow(!passwordShow)}>
            <Ionicons name="eye" size={20} color={"gray"} />
          </TouchableOpacity>
        </View>
      </View>

      <LoginSubmit
        label={label}
        form={{ id: id, username: username, password: password }}
      />

      <View className="flex-row mt-5 justify-between items-center">
        <Text className="text-xs text-gray-300">@mindset.id</Text>
        <Text className="text-xs text-gray-400">si-hr.1.0.0</Text>
      </View>
    </LoginLayout>
  );
}
