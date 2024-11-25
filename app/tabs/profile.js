import * as SecureStore from "expo-secure-store";
import { useContext, useEffect, useState } from "react";
import { Image, RefreshControl, ScrollView, Text, View } from "react-native";

import { AppContext } from "@/components/AppContext";
import AppLabel from "@/components/AppLabel";
import * as Function from "@/components/AppFunction";
import _config from "@/_config.json";

import Layout from "@/components/ui/Layout";
import Loading from "@/components/ui/Loading";
import ProfileText from "@/components/ui/Profile/ProfileText";

export default function PageProfile() {
  const value = useContext(AppContext);
  const label = AppLabel[value.LANG];

  const endPoint = "/app/family";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pageControll();
  }, []);

  const pageControll = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 10);
  };

  if (loading) return <Loading />;
  return (
    <Layout title={label.PROFILE}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={pageControll} />
        }
      >
        <View className="justify-center items-center">
          <View className="p-1 bg-green-700 rounded-full">
            <Image
              source={{ uri: "https://github.com/octocat.png" }}
              className="w-16 h-16 rounded-full "
            />
          </View>
          <Text className="text-lg text-green-900 font-bold mt-1">
            {"Nama User"}
          </Text>
        </View>

        <ProfileText label={label.EMAIL} value={"user@email.com"} />
        <ProfileText label={label.NAME} value={"Nama User"} />
        <ProfileText label={label.GENDER} value={"Wanita"} />
        <ProfileText label={label.POB} value={"Cirebon"} />
        <ProfileText label={label.DOB} value={"3 Juli 1999"} />
        <ProfileText label={label.ADDRESS} value={"Jalan Cipto No 5"} />
        <ProfileText label={label.CITY} value={"Kab. Cirebon"} />
        <ProfileText label={label.HANDPHONE} value={"082123123123"} />
      </ScrollView>
    </Layout>
  );
}
