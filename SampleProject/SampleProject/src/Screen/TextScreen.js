import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>My Name is{name}</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        placeholderTextColor='rgba(0,0,0,0,5)'
        style={{ borderWidth: 1, borderColor: 'red' }} />
      {name.length > 4 ? <Text>Name must be 4 characters</Text> : null}


      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:10}}>
        <TextInput placeholder='' style={{borderBottomWidth:2,borderColor:'red',margin:5}} keyboardType={'numeric'}/>
        <TextInput placeholder='' style={{borderBottomWidth:2,borderColor:'red',margin:5}}/>
        <TextInput placeholder='' style={{borderBottomWidth:2,borderColor:'red',margin:5}}/>
        <TextInput placeholder='' style={{borderBottomWidth:2,borderColor:'red',margin:5}}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
});

export default TextScreen;