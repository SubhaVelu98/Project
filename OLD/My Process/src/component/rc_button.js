import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors, FontFamily } from "../theme";

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={[styles.buttonWrap]}
      onPress={() => props.onPress()}
      disabled={props.disable}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#79D5F7", "#6383F4"]}
        style={[styles.linearGradient, props.disable && styles.disable]}
      >
        <Text style={styles.buttonText}>{props.label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#6383F4",
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 14.63,
    fontFamily: FontFamily.MontserratBold,
    color: Colors.white,
  },
  buttonWrap: {
    height: 51,
    borderRadius: 10,
  },
  disable: {
    opacity: 0.5,
  },
});
