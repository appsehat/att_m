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
    <Layout logo={true} title={label.SETTING}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={pageControll} />
        }
      >
        <SettingMenu
          icon="language"
          label={label.LANGUAGE}
          target="/tabs/language"
        />
        <SettingMenu
          icon="key"
          label={label.CHANGE_PASSWORD}
          target="/tabs/changePassword"
        />
        <SettingMenu
          icon="log-out"
          label={label.LOGOUT}
          target="/tabs/logout"
        />
      </ScrollView>
    </Layout>
  );
}
