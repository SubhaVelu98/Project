import React from 'react';
import { TextInput } from 'react-native';
import { Text, StyleSheet, Icon, View } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
const SearchScreen = ({term, onTermChange,onTermSubmit}) => {

  return (
    <View style={styles.layout}>
     {/* <AntDesign name="search1" size={24} color="black" style={{borderWidth:1,borderColor:'red'}} /> */}
     {/* <Icon name='search' type='AntDesign' style={styles.searchIcon}/> */}
     {/* <Feather name="search" size={24} color="black" /> */}
     <TextInput placeholder='Search'
      placeholderTextColor='rgba(0,0,0,0.5)'
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={()=>onTermSubmit()}
       style={styles.textStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginLeft: 20
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3
  },
});

export default SearchScreen;