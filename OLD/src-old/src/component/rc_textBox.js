import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Colors, FontFamily } from "../theme";

export default function TextBox(props) {
  return (
    <View>
      <TextInput
        style={styles.container}
        value={props.value}
        onChangeText={(value) => props.onChange(value)}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.greyOpcity70}
      />
      {props.errorMessage && (
        <Text style={{ color: Colors.error, marginTop: 2 }}>
          {props.errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 51,
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 10,
    fontFamily: FontFamily.Montserrat,
    color: Colors.greyOpcity70,
    fontSize: 12,
    lineHeight: 14.63,
    marginTop: 10,
  },
});
