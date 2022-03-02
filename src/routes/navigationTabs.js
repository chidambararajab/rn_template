import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  EXAMPLE1,
  EXAMPLE2,
} from "@constants/navigationConstants/navigationConstants";
import Example from "@src/screens/example";
const Tab = createBottomTabNavigator();

export default function Tabs() {
  const buyHomeData = useSelector((state) => state.buyHomeData);
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [Styles.bgSize],
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderFooterList
              title={"EXAMPLE1"}
              isActive={focused ? "red" : "#f7f7f7"}
              onPress={() => {
                navigation.navigate(EXAMPLE1);
              }}
            />
          ),
        }}
        name={SCREEN_CONSTANT.HOME}
        component={EXAMPLE2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderFooterList
              title={"EXAMPLE2"}
              isActive={focused ? "red" : "#f7f7f7"}
              onPress={() => {
                navigation.navigate(EXAMPLE2);
              }}
            />
          ),
        }}
        name={EXAMPLE2}
        component={Operations}
      />
    </Tab.Navigator>
  );
}

const RenderFooterList = (props) => {
  const { title, isActive, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[Styles.iconBg, { backgroundColor: isActive }]}
      onPress={onPress}
    >
      <Text style={Styles.fTabText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  bgSize: {
    height: Platform.OS === "ios" ? 100 : 80,
    zIndex: -1,
    backgroundColor: "red",
  },
  iconBg: {
    alignItems: "center",
    top: Platform.OS === "ios" ? 4 : 0,
  },
  footerIcon: {
    width: 50,
    height: 50,
  },
  fTabText: {
    fontFamily: FontFamily.Montserrat,
    color: color.white,
    fontSize: size.tiny,
  },
});
