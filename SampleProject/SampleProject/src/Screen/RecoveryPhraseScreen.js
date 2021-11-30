import React from 'react';
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

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
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>1:  phrase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>2:  phrase</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>3:  phrase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>4:  phrase</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>5:  phrase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>6:  phrase</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>7:   phrase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>8:   phrase</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>9:  pshrase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>10:  phrase</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>11:  phrase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textBg}>
                <Text style={styles.phraseText}>12:  phrase</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('Color')}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  navBar: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navBarIcon: {
    fontSize: 26,
    color: 'rgba(0,0,0,0.7)'
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  textBg: {
    width: '48%',
    margin: 5,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 10,
    shadowColor: '#fff',
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 5,
  },
  phraseText: {
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

export default RecoveryPhraseScreen;