import * as SecureStore from "expo-secure-store";
import { useContext, useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import { AppContext } from "@/store/AppContext";
import AppLabel from "@/libs/AppLabel";
import * as Function from "@/libs/AppFunction";
import _config from "@/_config.json";

import Layout from "@/components/ui/Layout";
import Loading from "@/components/ui/Loading";
import DashboardMenu from "@/components/ui/dashboard/DashboardMenu";
import DashboardAvatar from "@/components/ui/dashboard/DashboardAvatar";
import DashboardUser from "@/components/ui/dashboard/DashboardUser";

export default function TabDashboard() {
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
    }, 1000);
  };

  if (loading) return <Loading />;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={pageControll} />
      }
    >
      <Layout>
        <View className="justify-center items-center">
          <DashboardAvatar uri={"https://github.com/octocat.png"} />
          <DashboardUser name={"Nama User"} />
        </View>
        <DashboardMenu label={label} />
      </Layout>
    </ScrollView>
  );
}
