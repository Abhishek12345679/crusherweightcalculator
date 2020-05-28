import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
  Button,
} from "react-native";

import { CalculatorInput } from "react-native-calculator";

const CalculatorScreen = (props) => {
  const [input, setInput] = useState();

  const copyText = () => {
    Clipboard.setString(input);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{ flexDirection: "row", margin: 5 }}
      >
        <View style={{ flexDirection: "column" ,justifyContent:"space-between",}}>
          <Text style={styles.title}>Calculate</Text>
          <Text style={{ ...styles.title, marginTop: -7, marginStart: 0 }}>
            Something 😌
          </Text>
        </View>
        <Button title="copy" onPress={copyText} />
      </View>
      <CalculatorInput
        fieldTextStyle={{ fontSize: 24 }}
        fieldContainerStyle={{ height: 36 }}
        value={input}
        onChange={(i) => setInput(i)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "apple-bold",
    fontSize: 30,
    marginTop: 10,
  },
});

export default CalculatorScreen;
