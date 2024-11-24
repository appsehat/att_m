import * as SecureStore from "expo-secure-store";
import { useContext, useEffect, useState } from "react";
import { Image, RefreshControl, ScrollView, Text, View } from "react-native";

import { AppContext } from "@/components/AppContext";
import AppLabel from "@/components/AppLabel";
import * as Function from "@/components/AppFunction";
import _config from "@/_config.json";

import Layout from "@/components/ui/Layout";
import Loading from "@/components/ui/Loading";
import DashboardUser from "@/components/ui/Dashboard/DashboardUser";
import DashboardAttendance from "@/components/ui/Dashboard/DashboardAttendance";
import DashboardChart from "@/components/ui/Dashboard/DashboardChart";
import DashboardMenu from "@/components/ui/Dashboard/DashboardMenu";

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
        <DashboardUser
          uri={"https://github.com/octocat.png"}
          name={"Nama User"}
        />
        <Text className="text-xl text-gray-500 font-bold mb-2">
          {label.ATTENDANCE_LOGS}
        </Text>
        <DashboardAttendance label={label} />
        <DashboardChart label={label} />

        <Text className="text-xl text-gray-500 font-bold mt-5">
          {label.NAVIGATE_CENTER}
        </Text>
        <DashboardMenu label={label} />
      </Layout>
    </ScrollView>
  );
}
