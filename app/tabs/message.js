import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { AppContext } from "@/components/AppContext";
import AppLabel from "@/components/AppLabel";
import * as Function from "@/components/AppFunction";

import Loading from "@/components/ui/Loading";
import Layout from "@/components/ui/Layout";

export default function TabMessage() {
  const focus = useIsFocused();
  const value = useContext(AppContext);
  const label = AppLabel[value.LANG];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (focus) pageControll();
  }, [focus]);

  const pageControll = async () => {
    setLoading(false);
  };

  if (loading) return <Loading />;
  return (
    <Layout>
      <View>
        <Text>Message</Text>
      </View>
    </Layout>
  );
}
