import React, { useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"
import { View, ImageBackground, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { Images } from "../../../theme";
import ReactNativePinView from "react-native-pin-view"
import {navigationService} from '../../../utils';
import {SCREEN_CONSTANT} from '../../../navigation/constant';

export default function Register() {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)

  const onNavigateHome = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.HOME);
  };

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
    <View style={styles.container}>
      <ImageBackground
        source={Images.background}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
        <ScrollView
          style={styles.bgContainer}>
            <TouchableOpacity onPress={() => onNavigateHome()} >
            <Icon name={"close"} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Enter your current PIN</Text>

          <View style={styles.pinContent}> 
          <View>
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
                width: '90%',
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
                backgroundColor: "#6C6C86",
                height: 15,
                width: 15,
              }}
              buttonViewStyle={{
                height: 50,
                width: 110,
                borderRadius: 10,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
                elevation: 4,
                backgroundColor: 'white'

              }}
              buttonTextStyle={{
                color: "#494B69",
                fontFamily: "Montserrat-Regular",
                fontSize:28
              }}
              onButtonPress={key => {
                if (key === "custom_left") {
                  pinView.current.clear()
                }
                if (key === "custom_right") {
                  alert("Entered Pin: " + enteredPin)
                }
                if (key === "three") {
                  alert("You can't use 7")
                }
              }}
              customLeftButton={showRemoveButton ? <Icon name={"backspace-outline"} size={30} color={"#000"} /> : undefined}
              customRightButton={showCompletedButton ? <Icon name={"ios-arrow-redo-outline"} size={30} color={"#000"} /> : undefined}
            />
          </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
