import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import styles from './style';

const RecoveryScreen = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../../../assets/image/file.png')} style={styles.imgBg}/>
          <Text style={styles.recoveryTitle}>Do you have your  recovery phrase handy?</Text>
          <Text style={styles.recoveryText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus sit amet tempus lectus. Interdum et malesuada fames
            ac ante ipsum primis in faucibus.</Text>
        </View>
      </View>
      <View style={styles.btnBg}>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RecoveryScreen;