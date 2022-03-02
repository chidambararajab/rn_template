import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StatusBar, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHight = Dimensions.get("window").height;

const Loader = (props) => {
  const statusBarOptions = {
    light: {
      backgroundColor: "#f7f7f7",
      barStyle: "dark-content",
    },
    dark: {
      backgroundColor: "#000",
      barStyle: "light-content",
    },
  };
  const [statusBar, setStatusBar] = useState(statusBarOptions.light);

  useEffect(() => {
    if (props.setDarkStatusBar) {
      setStatusBar(statusBarOptions.dark);
    }
    if (props.setLightStatusBar) {
      setStatusBar(statusBarOptions.light);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={statusBar.backgroundColor}
        barStyle={statusBar.barStyle}
      />
      <Text style={styles.message}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHight,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  message: {
    color: "#070707",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Loader;
