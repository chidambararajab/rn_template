import React, { useState, useMemo } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "./context";
import { NavigationContainer } from "@react-navigation/native";
import {
  RootStackScreen,
  AuthStackScreen,
  AppStackScreen,
} from "./navigationStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const navigationRef = React.createRef();

export default function Navigation(params) {
  const [currentStack, setCurrentStack] = useState("");
  const authContext = useMemo(() => {
    return {
      auth: () => {
        setCurrentStack("auth");
      },
      app: () => {
        setCurrentStack("app");
      },
    };
  });

  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ color: "#070707", height: 500 }}>Home Screen</Text>
      </View>
    );
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#070707" }}>Details Screen</Text>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        {
          // currentStack === "" ? (
          //   <RootStackScreen />
          // ) :
          currentStack === "auth" ? <AuthStackScreen /> : <AppStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
