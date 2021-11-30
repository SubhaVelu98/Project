import React, { useContext, useEffect, useState } from "react";
import { View, Image, ImageBackground, Text, ScrollView } from "react-native";
import { asyncStorage, SnackBarMessage, validation } from "../../../utils";
import { AuthContext } from "../../../navigation/context";
import styles from "./style";
import { Images } from "../../../theme";
import { CustomButton, Loader, TextBox } from "../../../component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { registerUserData } from "../../../appRedux/actions/authenticationAction";

export default function Register() {
  const dispatch = useDispatch();
  const { app } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [promoCode, setPromoCode] = useState("");

  const [apiCallIsLoading, setApiCallIsLoading] = useState(false);

  const onPressLogin = async (data) => {
    await asyncStorage.storeDataToLocal(data);
    app();
    setApiCallIsLoading(false);
  };
  const reduxRegisterData = useSelector((state) => state.register);

  useEffect(() => {
    if (apiCallIsLoading) {
      if (
        !reduxRegisterData.registerUserDataIsLoading &&
        reduxRegisterData.registerUserDataErrorMessage === null
      ) {
        if (!reduxRegisterData.registerUserData.status) {
          SnackBarMessage(
            reduxRegisterData.registerUserData.message[0],
            "error"
          );
        } else {
          onPressLogin({
            authenticate: true,
            token: reduxRegisterData.registerUserData.data.token,
          });
        }
        setApiCallIsLoading(false);
      }
      if (
        !reduxRegisterData.registerUserDataIsLoading &&
        reduxRegisterData.registerUserDataErrorMessage !== null
      ) {
        setApiCallIsLoading(false);
      }
    }
  }, [reduxRegisterData]);

  const onChangeUserName = (value) => {
    const isRequire = validation.validateRequire("name", value);
    setUserNameError(isRequire);
    setUserName(value);
  };

  const onChangeUserEmail = (value) => {
    const validateEmail = validation.validateEmail("email", value);
    setUserEmailError(validateEmail);
    setUserEmail(value);
  };

  const onChangeUserPassword = (value) => {
    const validatePassword = validation.validatePassword("password", value);
    setUserPasswordError(validatePassword);
    setUserPassword(value);
    if (confirmPassword !== "") {
      if (confirmPassword !== value) {
        setConfirmPasswordError("Password not match.");
      } else {
        setConfirmPasswordError(null);
      }
    }
  };

  const onChangeUserConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (userPassword !== value) {
      setConfirmPasswordError("Password not match.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  const checkSignUpDisable = () => {
    if (
      userName === "" ||
      userNameError ||
      userEmail === "" ||
      userEmailError ||
      userPassword === "" ||
      userPasswordError ||
      confirmPassword === "" ||
      userPassword !== confirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSUbmitForm = () => {
    let postObject = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    if (promoCode !== "") {
      postObject = {
        ...postObject,
        promoCode: promoCode,
      };
    }

    dispatch(registerUserData(postObject));
    setApiCallIsLoading(true);
  };

  const renderForm = () => {
    return (
      <View style={styles.formWrap}>
        <TextBox
          value={userName}
          onChange={(value) => onChangeUserName(value)}
          placeholder="Name"
          errorMessage={userNameError}
        />
        <TextBox
          value={userEmail}
          onChange={(value) => onChangeUserEmail(value)}
          placeholder="E-mail"
          errorMessage={userEmailError}
        />
        <TextBox
          value={userPassword}
          onChange={(value) => onChangeUserPassword(value)}
          placeholder="Password"
          errorMessage={userPasswordError}
        />
        <TextBox
          value={confirmPassword}
          onChange={(value) => onChangeUserConfirmPassword(value)}
          placeholder="Confirm Password"
          errorMessage={confirmPasswordError}
        />
        <Text style={styles.promoCodeLabel}>Enter Promo Code:</Text>
        <TextBox
          value={promoCode}
          onChange={(value) => setPromoCode(value)}
          placeholder="Your Promo-Code"
        />
        <View style={styles.signUpButton}>
          <CustomButton
            label="Sign Up"
            onPress={() => {
              onSUbmitForm();
            }}
            disable={checkSignUpDisable()}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.background}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
        <Loader isShow={apiCallIsLoading} />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flex: 1 }}
          bounces={false}
        >
          <Image source={Images.dbxLogo} style={styles.debLogo} />
          <Text style={styles.welcomeLabel}>Welcome!</Text>
          {renderForm()}
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
}
