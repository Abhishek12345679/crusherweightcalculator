import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import Languages from "../constants/Languages";

const welcomescreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      {/* <Text style={styles.headerText}>{Languages.headerHI}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "apple-bold",
  },
});

export default welcomescreen;
