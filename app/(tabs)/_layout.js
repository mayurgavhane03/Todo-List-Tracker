import { Tabs } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7cb9e8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="tasks" size={24} color="#7cb9e8" />
            ) : (
              <FontAwesome5 name="tasks" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="calender"
        options={{
          tabBarLabel: "Calender",
          tabBarLabelStyle: { color: "#7cb9e8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="calendar" size={24} color="#7cb9e8" />
            ) : (
                <Entypo name="calendar" size={24} color="black" />            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#7cb9e8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="card-account-details"
                size={24}
                color="#7cb9e8"
              />
            ) : (
                <MaterialCommunityIcons
                name="card-account-details"
                size={24}
                color="black"
              />            ),
        }}
      />
    </Tabs>
  );
}