import * as SecureStore from "expo-secure-store";
import { useContext, useEffect, useState } from "react";
import { Image, RefreshControl, ScrollView, Text, View } from "react-native";

import { AppContext } from "@/components/AppContext";
import AppLabel from "@/components/AppLabel";
import * as Function from "@/components/AppFunction";
import _config from "@/_config.json";

import Layout from "@/components/ui/Layout";
import Loading from "@/components/ui/Loading";
import SettingMenu from "@/components/ui/Setting/SettingMenu";

export default function PageLanguage() {
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
    <Layout title={label.LANGUAGE} back="/tabs/setting">
      <View>
        <Text>Bahasa</Text>
      </View>
    </Layout>
  );
}
