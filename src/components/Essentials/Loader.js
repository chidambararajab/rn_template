import React, { useState, useEffect } from "react";
import { View, Image, Dimensions, StatusBar, StyleSheet } from "react-native";

import { IMAGES } from "@theme/";

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
      {/* <Text style={styles.message}>Loading...</Text> */}
      <Image source={IMAGES.GIF.loader} style={styles.gif} />
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
  gif: { height: 50, width: 50 },
  message: {
    color: "#070707",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Loader;
