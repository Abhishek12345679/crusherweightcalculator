import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import welcomescreen from "../screens/welcomescreen";
import ResultScreen from "../screens/ResultScreen";

import Languages from "../constants/Languages";
import Colors from "../constants/Colors";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.saffron,
  },
  headerTitleStyle: {
    fontFamily: "apple-bold",
    fontSize: 19,
  },
  headerTintColor: "rgba(255,255,255,0.85)",
  headerBackTitle: "Back",
};

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStackNavigator.Navigator screenOptions={defaultStackNavigationOptions}>
      <AppStackNavigator.Screen
        name="welcomescreen"
        component={welcomescreen}
        options={{ headerTitle: Languages.headerEN }}
      />
      <AppStackNavigator.Screen
        name="resultscreen"
        component={ResultScreen}
        options={{ headerTitle: "CFT and Weight" }}
      />
    </AppStackNavigator.Navigator>
  );
};
