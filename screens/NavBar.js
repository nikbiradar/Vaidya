import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Text, View, Button, Alert, TextInput } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Profile from "./components/Profile";
import Feed from "./components/Home";
import Doctors from "./components/Doctors";
import Notifications from "./components/Notifications";

const MyTabs = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "pink" }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: "purple",
        }}
      />

      <Tab.Screen
        name="Doctors"
        component={Doctors}
        options={{
          tabBarLabel: "Doctors",
          tabBarIcon: ({ color }) => (
            <Fontisto name="doctor" size={24} color={color} />
          ),
          tabBarColor: "red",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          tabBarColor: "green",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarColor: "darkblue",
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
