import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
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
        keyExtractor={(item) => item.id}
        data={results}
        renderItem={(itemData) => (
          <View style={{ flexDirection: "column" }}>
            <View style={styles.listitem}>
              <View>
                <Text style={styles.titleText}>{itemData.item.volume}</Text>
                <Text style={styles.valueText}>{itemData.item.cft}</Text>
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
  },
  listitem: {
    width: "100%",
    height: 50,
    borderBottomWidth: 0.5,
    marginVertical: 7,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: "apple-regular",
    fontSize: 17,
    marginBottom: 7,
  },
  valueText: {
    fontFamily: "apple-regular",
    fontSize: 15,
    color: "#a9a9a9",
  },
  expandableViewStyle: {
    width: "100%",
    height: 100,
    borderBottomWidth: 0.5,
    marginVertical: 7,
    paddingHorizontal: 10,
  },
  bigValueText: {
    fontFamily: "apple-regular",
    fontSize: 27,
    color: "#a9a9a9",
    marginTop: 15,
  },
});

export default ResultScreen;
