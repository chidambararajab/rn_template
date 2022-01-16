import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar, LogBox, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import store from "./src/redux/store/store";
import Example from "./src/screens/example";

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <SafeAreaView style={Styles.container}>
      <Provider store={store}>
        <View style={Styles.container}>
          <StatusBar backgroundColor="#c7c7c7" barStyle="dark-content" />
          <Example />
        </View>
      </Provider>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7c7c7",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#070707" },
});

export default App;
