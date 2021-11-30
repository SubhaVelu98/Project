import React, { useState } from 'react';
import { Text, StyleSheet, Icon, View } from 'react-native';
import SearchBarScreen from '../Component/SearchBarScreen';
// import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const SearchScreen = () => {
  const [term,setTerm]= useState('')

  return (
    <View>
    <SearchBarScreen term={term} 
    onTermChange={newTerm=> setTerm(newTerm)}
    onTermSubmit={()=> console.log('Term Submitted')}/>
     <Text style={styles.textStyle}>Search Screen</Text>
     <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginLeft: 20
  },
});

export default SearchScreen;