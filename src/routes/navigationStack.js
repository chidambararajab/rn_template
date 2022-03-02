import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./navigationTabs";

const RootStack = createStackNavigator();

function RootStackScreen(params) {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={"Tabs"} component={Tabs} />
      <RootStack.Screen name="root" component={Root} />
    </RootStack.Navigator>
  );
}

export { RootStackScreen };
