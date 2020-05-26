import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomTextInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
        }}
        onChangeText={props.dimensionsInputHandler}
        placeholder={props.placeholder}
        keyboardType="numeric"
      />
      <Text style={styles.text}>{props.operatorTimesOperand}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "apple-bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default CustomTextInput;
