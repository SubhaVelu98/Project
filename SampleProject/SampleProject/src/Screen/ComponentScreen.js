import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, StatusBar, View, Text } from "react-native"
import ReactNativePinView from "react-native-pin-view"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
const App = () => {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.bgContainer}>
        <TouchableOpacity>
          <Icon name={"close"} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Enter your PIN</Text>
        <View style={styles.pinContent}>
          <ReactNativePinView
            inputSize={32}
            ref={pinView}
            pinLength={6}
            buttonSize={60}
            onValueChange={value => setEnteredPin(value)}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
              width: '80%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#000",
              height: 15,
              width: 15,
              borderRadius: 10,
            }}
            inputViewFilledStyle={{
              backgroundColor: "rgba(0,0,0,0.5)",
              height: 15,
              width: 15,
            }}
            buttonViewStyle={{
              height: 55,
              width: 110,
              borderRadius: 10,
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 10,
              backgroundColor: 'white'

            }}
            buttonTextStyle={{
              color: "#000",
            }}
            onButtonPress={key => {
              if (key === "custom_right") {
                pinView.current.clear()
              }
              // if (key === "custom_right") {
              //   alert("Entered Pin: " + enteredPin)
              // }
              // if (key === "six") {
              //   alert("You can't use 5")
              // }
            }}
            customRightButton={showRemoveButton ? <Icon name={"ios-backspace"} style={styles.iconInfo} /> : undefined}
          // customRightButton={showCompletedButton ? <Icon name={"caret-forward-circle-sharp"} style={styles.iconInfo} /> : undefined}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'white',
  },
  closeIcon: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
    color: 'rgba(0,0,0,0.5)',
    fontSize: 26
  },
  titleText: {
    // fontFamily: SemiBoldItalic,
    paddingTop: 20,
    paddingHorizontal: 30,
    color: "rgba(0,0,0,0.8)",
    fontSize: 18,
    // fontWeight: 'bold'
  },
  pinContent: {
    marginHorizontal: 30,
    marginVertical: 50
  },
  iconInfo: {
    fontSize: 36,
    color: "#000",
  },
})
export default App