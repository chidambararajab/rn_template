import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./navigationTabs";
import Root from "@screens/home/root";
import AuthExample from "@screens/auth/authExample";
import AppExample from "@screens/app/appExample";
import { NAVIGATION_CONSTANTS } from "@constants";
import Example from "@screens/example";

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function RootStackScreen(params) {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={NAVIGATION_CONSTANTS.ROOT} component={Root} />
    </RootStack.Navigator>
  );
}

function AuthStackScreen(params) {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={NAVIGATION_CONSTANTS.TAB} component={Tabs} />
      <AuthStack.Screen
        name={NAVIGATION_CONSTANTS.AUTH_EXAMPLE}
        component={AuthExample}
      />
    </AuthStack.Navigator>
  );
}

function AppStackScreen(params) {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={NAVIGATION_CONSTANTS.TAB} component={Tabs} />
      <AppStack.Screen
        name={NAVIGATION_CONSTANTS.EXAMPLE}
        component={Example}
      />
      <AppStack.Screen
        name={NAVIGATION_CONSTANTS.APP_EXAMPLE}
        component={AppExample}
      />
    </AppStack.Navigator>
  );
}

export { RootStackScreen, AuthStackScreen, AppStackScreen };
