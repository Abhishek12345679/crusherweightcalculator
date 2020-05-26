import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import Languages from "../constants/Languages";
import CustomTextInput from "../components/CustomTextInput";

const welcomescreen = (props) => {
  const [length, setLength] = useState();
  const [breadth, setBreadth] = useState();
  const [height, setHeight] = useState();
  const [volume, setVolume] = useState();

  const lengthInputHandler = (length) => {
    setLength(length);
  };
  const breadthInputHandler = (breadth) => {
    setBreadth(breadth);
  };
  const HeightInputHandler = (height) => {
    setHeight(height);
  };

  const volumeCalc = () => {
    let lengthIntPart = Math.floor(parseFloat(length));
    let resL = lengthIntPart + (parseFloat(length) - lengthIntPart) / 1.2;

    let lengthinInches = resL * 12;

    let breadthIntPart = Math.floor(parseFloat(breadth));
    let resB = breadthIntPart + (parseFloat(breadth) - breadthIntPart) / 1.2;

    let breadthinInches = resB * 12;

    let heightIntPart = Math.floor(parseFloat(height));
    let resH = heightIntPart + (parseFloat(height) - heightIntPart) / 1.2;

    let heightinInches = resH * 12;

    setVolume(lengthinInches * breadthinInches * heightinInches);
  };

  return (
    <ScrollView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.form}>
        <CustomTextInput
          placeholder="Length"
          operatorTimesOperand="x 12"
          dimensionsInputHandler={lengthInputHandler}
        />
        <CustomTextInput
          placeholder="Breadth"
          operatorTimesOperand="x 12"
          dimensionsInputHandler={breadthInputHandler}
        />
        <CustomTextInput
          placeholder="Height"
          operatorTimesOperand="x 12"
          dimensionsInputHandler={HeightInputHandler}
        />

        <Button title="calculate" onPress={volumeCalc} />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Volume :</Text>
          <Text>{volume} cubic inches </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Volume:</Text>
          <Text>{volume / 1728} Cb. Feet</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Weight:</Text>
          <Text>{volume / 1728 / 25} Metric tonne</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: "apple-bold",
  },
  form: {
    flex: 1,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default welcomescreen;
