import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Platform,
} from "react-native";

import { TextField } from "react-native-material-textfield";

import Colors from "../constants/Colors";

const welcomescreen = (props) => {
  let [lengthFeet, setLengthFeet] = useState("");
  let [breadthFeet, setBreadthFeet] = useState("");
  let [heightFeet, setHeightFeet] = useState("");
  let [lengthInch, setLengthInch] = useState("");
  let [breadthInch, setBreadthInch] = useState("");
  let [heightInch, setHeightInch] = useState("");
  let calculatedVolume;

  const TouchableComp =
    Platform.OS === "android" ? TouchableOpacity : TouchableOpacity;

  const [loading, setLoading] = useState(false);

  const lengthFeetInputHandler = (lf) => {
    setLengthFeet(lf);
  };
  const lengthInchInputHandler = (li) => {
    if (li >= 0 && li <= 12) setLengthInch(li);
  };
  const breadthFeetInputHandler = (bf) => {
    setBreadthFeet(bf);
  };
  const breadthInchInputHandler = (bi) => {
    if (bi >= 0 && bi <= 12) setBreadthInch(bi);
  };
  const HeightFeetInputHandler = (hf) => {
    setHeightFeet(hf);
  };
  const HeightInchInputHandler = (hi) => {
    if (hi >= 0 && hi <= 12) setHeightInch(hi);
  };

  const volumeCalc = () => {
    calculatedVolume =
      (parseInt(lengthFeet) * 12 + parseInt(lengthInch)) *
      (parseInt(breadthFeet) * 12 + parseInt(breadthInch)) *
      (parseInt(heightFeet) * 12 + parseInt(heightInch));

    return calculatedVolume;
  };

  return (
    <ScrollView style={styles.screen}>
      {Platform.OS === "ios" ? (
        <StatusBar barStyle="dark-content" />
      ) : (
        <StatusBar barStyle="light-content" />
      )}
      <View style={styles.form}>
        <View style={styles.item}>
          <Text style={styles.inputType}>Length</Text>
          <View style={styles.row}>
            <TextField
              label="Feet"
              value={lengthFeet}
              onChangeText={lengthFeetInputHandler}
              keyboardType="numeric"
              textAlignVertical="center"
              containerStyle={{ width: 100 }}
              labelTextStyle={
                {
                  // textAlign: "center",
                }
              }
              baseColor="rgba(0,0,0,0.8)"
              animationDuration={150}
            />

            <TextField
              label="Inches"
              onChangeText={lengthInchInputHandler}
              keyboardType="numeric"
              containerStyle={{ width: 100 }}
              labelTextStyle={
                {
                  // textAlign: "center",
                }
              }
              baseColor="rgba(0,0,0,0.8)"
              animationDuration={150}
            />
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.inputType}>Width</Text>
          <View style={styles.row}>
            <TextField
              label="Feet"
              onChangeText={breadthFeetInputHandler}
              keyboardType="numeric"
              textAlignVertical="center"
              containerStyle={{ width: 100 }}
              labelTextStyle={
                {
                  // textAlign: "center",
                }
              }
              baseColor="rgba(0,0,0,0.8)"
              animationDuration={150}
            />

            <TextField
              label="Inches"
              onChangeText={breadthInchInputHandler}
              keyboardType="numeric"
              containerStyle={{ width: 100 }}
              labelTextStyle={
                {
                  // textAlign: "center",
                }
              }
              baseColor="rgba(0,0,0,0.8)"
              animationDuration={150}
            />
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.inputType}>Height</Text>
          <View style={styles.row}>
            <TextField
              label="Feet"
              onChangeText={HeightFeetInputHandler}
              keyboardType="numeric"
              textAlignVertical="center"
              containerStyle={{ width: 100 }}
              labelTextStyle={
                {
                  // textAlign: "center",
                }
              }
              baseColor="rgba(0,0,0,0.8)"
              animationDuration={150}
            />

            <TextField
              label="Inches"
              onChangeText={HeightInchInputHandler}
              keyboardType="numeric"
              containerStyle={{ width: 100 }}
              labelTextStyle={
                {
                  // textAlign: "center",
                }
              }
              baseColor="rgba(0,0,0,0.8)"
              animationDuration={150}
            />
          </View>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableComp
          style={styles.calcBtn}
          onPress={() => {
            // setVolume(volumeCalc());
            calculatedVolume = volumeCalc();
            setLoading(true);
            setTimeout(() => {
              if (calculatedVolume !== undefined) {
                props.navigation.navigate({
                  name: "resultscreen",
                  params: {
                    length: lengthFeet + "' " + lengthInch + '" ',
                    volume: calculatedVolume,
                  },
                });
              }
              setLoading(false);
            }, 3000);
          }}
          disabled={
            !!!lengthFeet &&
            !!!breadthFeet &&
            !!!heightFeet &&
            !!!lengthInch &&
            !!!breadthInch &&
            !!!heightInch
          }
        >
          {!loading ? (
            <Text style={styles.text}>Calculate</Text>
          ) : (
            <ActivityIndicator size="small" color={Colors.white} />
          )}
        </TouchableComp>

        <View style={{ alignItems: "center" }}>
          <TouchableComp
            style={{ ...styles.calcBtn, backgroundColor: "rgba(255,0,0,0.6)" }}
            onPress={() => {
              setLengthFeet("");
            }}
          >
            {!loading ? (
              <Text style={styles.text}>Clear</Text>
            ) : (
              <ActivityIndicator size="small" color={Colors.white} />
            )}
          </TouchableComp>
        </View>

        <View>{/* <Flatlist /> */}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 20,
    fontFamily: "apple-bold",
    color: Colors.white,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 8,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calcBtn: {
    width: Dimensions.get("window").width - 20,
    height: 60,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    shadowOpacity: 0.4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    borderRadius: 5,
  },
  inputType: {
    fontFamily: "apple-bold",
    fontSize: 20,
  },
  item: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginVertical: 5,
  },
});

export default welcomescreen;
