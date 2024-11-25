import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function Dashboard() {
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          tabBarIcon: () => (
            <View style={styles.fingerprintTab}>
              <Ionicons name="finger-print" size={20} color="#fff" />
            </View>
          ),
          tabBarItemStyle: {
            marginTop: -40, // Naikkan posisi tab fingerprint
          },
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "mail" : "mail-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen name="profile" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#487c43",
    alignItems: "center",
    justifyContent: "center",
  },
  fingerprintTab: {
    backgroundColor: "#488c43",
    borderRadius: 30,
    width: 55, // Menambah ukuran tab agar lebih besar
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10, // Meningkatkan elevation untuk efek shadow lebih kuat
    shadowColor: "black", // Warna shadow yang lebih gelap untuk kontras
    shadowOffset: { width: 0, height: 5 }, // Shadow yang lebih besar ke bawah
    shadowOpacity: 0.1, // Meningkatkan opacity agar shadow lebih terlihat
    shadowRadius: 10, // Menambah ukuran radius shadow agar lebih besar
  },
});
