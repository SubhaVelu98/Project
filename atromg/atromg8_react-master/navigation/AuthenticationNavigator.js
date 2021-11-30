import React from "react";

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Constants
import Colors from "../constants/Colors";
import {
  LoginScreenContainer,
  RegisterScreenContainer,
  AuthenticationScreenContainer
} from "../containers/AuthenticationScreenContainer";

// Components
export const AuthenticationStack = createStackNavigator({
  Home: AuthenticationScreenContainer,
  Login: LoginScreenContainer,
  Register: RegisterScreenContainer
});

AuthenticationStack.navigationOptions = {
  tabBarVisible: false
};

const tabBarConfiguration = {
  initialRouteName: "AuthenticationStack",
  tabBarOptions: {
    style: {
      height: 65,
      fontWeight: "bold",
      backgroundColor: Colors.tabBarBackgroundColor,
      borderTopColor: Colors.borderTopColor,
      tabBarTextFontSize: 18,
      paddingTop: 10
    }
  }
};

export default createBottomTabNavigator(
  {
    AuthenticationStack
  },
  tabBarConfiguration
);
