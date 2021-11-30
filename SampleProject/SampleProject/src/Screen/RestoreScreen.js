import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const RecoveryScreen = ({navigation}) => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.recoveryTitle}>Restore existing wallet</Text>
          <View style={styles.inputBg}>
          <TextInput placeholder='Use recovery phrase' placeholderTextColor='rgba(0,0,0,0.5)'
          numberOfLines={5}
          textAlignVertical={'top'} style={styles.inputText}/>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn}  onPress={() => navigation.navigate('Color')}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  content: {
    padding: 20,
    marginTop: 40
  },
  recoveryTitle: {
    fontSize: 28,
    color: '#4b4d6b',
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputBg:{
   borderTopWidth:1,
   borderRightWidth:1,
   borderLeftWidth:1,
   borderColor:'rgba(0,0,0,0.1)',
   borderRadius:10,
   paddingHorizontal:10,
   paddingVertical:5,
   shadowColor: '#fff',
   shadowOpacity: 0.20,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 15,
   elevation: 5,
  },
  inputText:{
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: 'normal',
  },
  submitBtn: {
    backgroundColor: '#5591ed',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    padding: 15,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity: -0.58,
    shadowRadius: -16.00,
    elevation: -24,
  },
  submitBtnText: {
    fontSize: 16,
    color: 'rgba(255,255,255,1)',
    fontWeight: 'normal',
    textAlign: 'center'
  },
});

export default RecoveryScreen;