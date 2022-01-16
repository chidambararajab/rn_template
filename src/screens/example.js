import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { exampleAction } from "../redux/actions/exampleAction";
import { COLORS } from "../theme";

const Example = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.exampleList);
  const { loading, quote, error } = listData;

  useEffect(() => {
    triggerExampleAPI();
  }, []);

  const triggerExampleAPI = () => {
    dispatch(exampleAction());
  };

  if (loading) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.text}>{quote || "Loadig..."}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => triggerExampleAPI()}
          style={Styles.btn}
        >
          <Text style={{ color: COLORS.white }}>Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7c7c7",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  text: { color: "#070707", padding: 20, textAlign: "center" },
  btn: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#070707",
  },
});

export default Example;
