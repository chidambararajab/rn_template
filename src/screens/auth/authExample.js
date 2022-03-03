import React from "react";
import { StyleSheet } from "react-native";

import Loader from "@components/Essentials/Loader";

const AuthExample = () => {
  return <Loader />;
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
