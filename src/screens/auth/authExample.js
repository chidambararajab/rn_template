import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AuthExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>AUTH EXAMPLE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "#070707",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AuthExample;
