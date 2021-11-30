import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Root from "../screens/root";
import { Register } from "../screens/auth";
import {
  Home,
  Example,
  setpin,
  recovery,
  recoveryphrase,
  restore,
  confirmpin,
  Patners,
} from "../screens/app";
import { SCREEN_CONSTANT } from "./constant";
const rootStack = createStackNavigator();
const authStack = createStackNavigator();
const appStack = createStackNavigator();

function RootStackScreen(params) {
  return (
    <rootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <rootStack.Screen name="root" component={Root} />
    </rootStack.Navigator>
  );
}

function AuthStackScreen(params) {
  return (
    <authStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <authStack.Screen name={SCREEN_CONSTANT.REGISTER} component={Register} />
    </authStack.Navigator>
  );
}

function AppStackScreen(params) {
  return (
    <appStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <appStack.Screen name={SCREEN_CONSTANT.HOME} component={Home} />
      <appStack.Screen name={SCREEN_CONSTANT.EXAMPLE} component={Example} />
      <appStack.Screen name={SCREEN_CONSTANT.SETPIN} component={setpin} />
      <appStack.Screen name={SCREEN_CONSTANT.RECOVERY} component={recovery} />
      <appStack.Screen
        name={SCREEN_CONSTANT.RECOVERYPHRASE}
        component={recoveryphrase}
      />
      <appStack.Screen name={SCREEN_CONSTANT.RESTORE} component={restore} />
      <appStack.Screen name={SCREEN_CONSTANT.CONFIRMPIN} component={confirmpin} />
      <appStack.Screen name={SCREEN_CONSTANT.PATNERS} component={Patners} />

    </appStack.Navigator>
  );
}

export { RootStackScreen, AuthStackScreen, AppStackScreen };
