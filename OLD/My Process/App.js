import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Navigation from "./src/navigation";
import store from "./src/appRedux/store/configureStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Colors } from "./src/theme";

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Provider store={store}>
        <View style={Styles.container}>
          <StatusBar backgroundColor="#3B2F57" barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
