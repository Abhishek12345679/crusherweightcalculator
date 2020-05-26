import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import welcomescreen from "../screens/welcomescreen";
import Languages from "../constants/Languages";

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStackNavigator.Navigator
    // screenOptions={defaultStackNavigationOptions}
    >
      <AppStackNavigator.Screen
        name="welcomescreen"
        component={welcomescreen}
        options={{ headerTitle: Languages.headerBAN }}
      />
    </AppStackNavigator.Navigator>
  );
};
