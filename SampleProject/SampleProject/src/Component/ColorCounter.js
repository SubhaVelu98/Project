import React  from 'react';
import {Text, StyleSheet,View,Button } from 'react-native';

const ColorCounter = ({ color, OnIncrease,OnDecrease }) =>{ 
return (
  <View>
   <Text>{color}</Text>
   <Button onPress={()=> OnIncrease()} title={`Incerase ${color}`}/>
   <Button onPress={()=> OnDecrease()} title={`Decrease ${color}`}/>
    </View>
);
};

const styles=StyleSheet.create({});

export default ColorCounter;