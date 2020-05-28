import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Colors from "../constants/Colors";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import * as HistoryActions from "../store/actions";

const ResultScreen = (props) => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.history.history);
  console.log(results);

  useEffect(() => {
    dispatch(HistoryActions.setHistory());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <FlatList
        maxToRenderPerBatch={2}
        keyExtractor={(item) => item.id}
        data={results}
        renderItem={(itemData) => (
          <View style={styles.listitem}>
            <View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Text style={styles.titleText}>Length</Text>
                <Text style={styles.valueText}>{itemData.item.length}</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Text style={styles.titleText}>Breadth</Text>
                <Text style={styles.valueText}>{itemData.item.breadth}</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Text style={styles.titleText}>Height</Text>
                <Text style={styles.valueText}>{itemData.item.height}</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Text style={styles.titleText}>Volume</Text>
                <Text style={styles.valueText}>
                  {itemData.item.volume} Cubic Inches
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Text style={styles.titleText}>CFT</Text>
                <Text style={styles.valueText}>
                  {itemData.item.cft.toFixed(3)} CFT
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Text style={styles.titleText}>Weight</Text>
                <Text style={styles.valueText}>
                  {itemData.item.weight.toFixed(3)} tonne
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  listitem: {
    width: Dimensions.get("window").width - 20,
    height: 350,
    margin: 7,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
  },
  titleText: {
    fontFamily: "apple-bold",
    fontSize: 17,
    marginBottom: 7,
  },
  valueText: {
    fontFamily: "apple-regular",
    fontSize: 15,
    color: "rgba(0,0,0,0.5)",
  },
});

export default ResultScreen;
