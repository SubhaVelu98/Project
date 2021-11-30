import React from 'react';
import { Text, View ,TouchableOpacity,TextInput} from 'react-native';
import Footer from '../../../component/footer';
import styles from './style';

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
      <Footer/>
    </>
  );
};

export default RecoveryScreen;