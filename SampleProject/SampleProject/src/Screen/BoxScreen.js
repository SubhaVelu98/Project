import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';

const TextScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.textStyle}>My Name is</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  layout: {
    borderWidth: 1,
    borderColor: 'red',
    margin:20
  },
});

export default TextScreen;