import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading } from "expo";
import * as Fonts from "expo-font";

import NavigatorContainer from "./navigation/NavigatorContainer";

import { init } from "./helpers/db";

export default function App() {
  // init()
  //   .then(() => {
  //     console.log("initialised array");
  //   })
  //   .catch((err) => {
  //     console.log("db initialization failed");
  //     console.log(err);
  //   });

  const [fontLoaded, setFontLoaded] = useState();

  const fetchFonts = () => {
    return Fonts.loadAsync({
      "apple-bold": require("./assets/Fonts/SF-Pro-Display-Bold.ttf"),
      "apple-regular": require("./assets/Fonts/SF-Pro-Text-Regular.ttf"),
      "fancy-font": require("./assets/Fonts/BungeeShade-Regular.ttf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <NavigatorContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
