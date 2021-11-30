import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Constants
import Colors from "../constants/Colors";

// Components
import { SendStack, HomeStack, ReceiveStack } from "./StackNavigator";

const tabBarConfiguration = {
    initialRouteName: "HomeStack",
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: '#aab3ba',
        style: {
            height: 65,
            fontWeight: "bold",
            backgroundColor: Colors.tabBarBackgroundColor,
            borderTopColor: '#F1F5F8',
            tabBarTextFontSize: 18,
        }
    }
};

export default createBottomTabNavigator(
  {
    SendStack,
    HomeStack,
    ReceiveStack
  },
  tabBarConfiguration
);
