import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import styles from './style';
import { CustomButton } from "../../../component";
import { Neomorph } from 'react-native-neomorph-shadows';

const RecoveryPhraseScreen = ({ navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Icon name='close' style={styles.navBarIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='arrow-forward-ios' style={styles.navBarIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.recoveryTitle}>Enter your recovery phrase</Text>
          <View>
            <View style={styles.row}>
              {/* <View style={{ flexGrow:1}}> */}
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <View style={{ flex: 1, }}>
                  <Text style={styles.phraseText}>1:  Phrase</Text>
                </View>
              </Neomorph>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>2:  Phrase</Text>
              </Neomorph>
            </View>
            <View style={styles.row}>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>3:  Phrase</Text>
              </Neomorph>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>4:  Phrase</Text>
              </Neomorph>
            </View>
            <View style={styles.row}>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>5:  Phrase</Text>
              </Neomorph>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>6:  Phrase</Text>
              </Neomorph>
            </View>
            <View style={styles.row}>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>7:  Phrase</Text>
              </Neomorph>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>8:  Phrase</Text>
              </Neomorph>
            </View>
            <View style={styles.row}>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>9:  Phrase</Text>
              </Neomorph>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>10:  Phrase</Text>
              </Neomorph>
            </View>
            <View style={styles.row}>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>11:  Phrase</Text>
              </Neomorph>
              <Neomorph
                inner
                swapShadows
                style={styles.shadowStyle}>
                <Text style={styles.phraseText}>12:  Phrase</Text>
              </Neomorph>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.submitBtn}>
        <CustomButton label="Submit" />
      </View>
    </>
  );
};


export default RecoveryPhraseScreen;