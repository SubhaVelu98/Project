import { Root } from "native-base";
import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import NavigationService from "./navigation/NavigationService";
import store from "./store/configureStore";
import Colors from "./constants/Colors";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={Colors.backgroundColor} />
        <Root nativeID="999">
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Root>
      </Provider>
    );
  }
}

console.disableYellowBox = true;
