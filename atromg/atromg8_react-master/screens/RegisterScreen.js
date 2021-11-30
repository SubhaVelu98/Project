import React, { Component } from "react";
import { View, TouchableOpacity, Image, Keyboard, ScrollView } from "react-native";
import {
  Content,
  Text,
  Toast,
  Fab,
  Icon,
  Item,
  Form,
  Input,
  Label,
    List,
    Card,
  CheckBox,
  Textarea
} from "native-base";
import FingerPrintScanner from "react-native-fingerprint-scanner";
import Style, {Login} from "../constants/Style";

import { ImageBackgroundComponent } from "../components/background";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { normalize } from "../utils/screenSize";
import {
  validateEmail,
  validateForm,
  validateMnemonic
} from "../utils/validators";
import Loader from "../components/Loader";

export default class RegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    emailErrorMessage: "",
    compatible: false,
    fingerprints: false,
    success: false,
    wait: false,
    message: "",
    complete: false,
    email: "",
    emailInvalid: false,
    enableEmail: true,
    password: "",
    passwordInvalid: false,
    mnemonic:
      "sister cereal head stick gauge expose deposit carpet clip carbon style umbrella",
    mnemonicInvalid: false,
    keyBoard: false,
    isLogin: false,
    storeAvailable: false,
    mnemonicAvailable: false,
    secureTextEntry: true
  };

  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
    this._validateMnmonic = this._validateMnmonic.bind(this);
  }

  isEmailValid(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) == 0;
  }

  async componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );

    await FingerPrintScanner.isSensorAvailable()
      .then(() => {
        this.setState({
          compatible: true
        });
      })
      .catch(err => {
        this.setState({
          compatible: false
        });
      });
  }

  componentWillReceiveProps(nextProps) { }

  onFormSubmit() {
    const { email, password } = this.state;
    const { emailInvalid, passwordInvalid } = validateForm(email, password);
      if(emailInvalid){
          Toast.show({ type: "danger", text: 'Invalid Email' })
          return
      }
    if (!emailInvalid && !passwordInvalid) {
        Toast.show({
            duration: 10000,
            text: "Registering...",
            type: "success",
            position: "top"
        });
      this.props.register({
        email,
        password,
        loginAfterSuccess: true
      });
    } else {
      this.setState({ emailInvalid, passwordInvalid });
    }
  }

  _keyboardDidShow() {
    this.setState({ keyBoard: true });
  }

  _keyboardDidHide() {
    this.setState({ keyBoard: false });
  }

  _validateMnmonic(text) {
    this.setState({ mnemonicInvalid: !validateMnemonic(this.state.mnemonic) });
  }

  render() {
    const {
      emailInvalid,
      passwordInvalid,
      mnemonicInvalid,
      email,
      password,
      mnemonic,
      secureTextEntry,
      mnemonicAvailable,
      emailErrorMessage
    } = this.state;

    return (
      <ImageBackgroundComponent>
        {/*<Loader {...this.props}></Loader>*/}
        <Content
          contentContainerStyle={{
            flex: 1,
          }}
        >
          <View style={[Login.form]}>
                <Text
                    style={[Login.loginHead]}>
                    Sign Up
                </Text>
              <Text style={[Login.subText]}>
                  Sign up to create an account and access the various features
              </Text>
              <List style={[Login.list]}>
                  <Item floatingLabel error={emailInvalid} style={[Login.itemWrap]}>
                      <Icon
                          style={{
                              color: Colors.fade,
                              fontSize: normalize(20),
                              marginTop:-28
                          }}
                          type="Octicons"
                          name="mail"
                      />
                      <Label style={[Login.formLabel]}>Email</Label>
                      <Input
                          style={[Login.formInput]}
                          onChangeText={email => {
                              this.setState({ email: email.trim() });
                          }}
                          autoCapitalize="none"
                          autoFocus={true}
                          value={email}
                      />
                  </Item>
                  <Item floatingLabel error={passwordInvalid} style={[Login.itemWrap]}>
                      <Icon
                          style={{
                              color: Colors.fade,
                              fontSize: normalize(20),
                              marginTop:-28
                          }}
                          type="SimpleLineIcons"
                          name="lock"
                      />
                      <Label style={[Login.formLabel]}>Password</Label>
                      <Input
                          blurOnSubmit={true}
                          autoCapitalize="none"
                          // onSubmitEditing={this.onFormSubmit}
                          style={[Login.formInput]}
                          onChangeText={password => {
                              this.setState({ password: password.trim() });
                          }}
                          onBlur={() => {
                              // TODO form submit
                          }}
                          value={password}
                          secureTextEntry={secureTextEntry}
                      />
                      <Icon
                          onPress={() => {
                              this.setState({ secureTextEntry: !secureTextEntry });
                          }}
                          type="MaterialIcons"
                          style={{
                              color: Colors.fade
                          }}
                          color={Colors.fade}
                          name={secureTextEntry ? "visibility" : "visibility-off"}
                      />
                  </Item>
              </List>
              <TouchableOpacity style={{alignItems:'center'}} onPress={this.onFormSubmit}>
                  <Card style={[Login.button]}>
                      <Text style={[Login.text]} >Register</Text>
                  </Card>
              </TouchableOpacity>
          </View>
          {!this.state.keyBoard && (
              <View>
                  <View style={[Login.goReg]}>
                      <TouchableOpacity
                          onPress={() => {
                              this.props.navigation.navigate("Login");
                          }}>
                          <Text
                              style={[
                                  {
                                      fontFamily: "Quicksand-Regular",
                                      textAlign: "center",
                                      fontSize: normalize(14),
                                      color: Colors.noticeText
                                  }
                              ]}
                          >
                              Already have account? Login
                          </Text>
                      </TouchableOpacity>
                  </View>
                  <View style={[Login.goReg, {opacity:0}]}>
                      <TouchableOpacity
                          onPress={() => {
                              this.props.navigation.navigate("Login");
                          }}>
                          <Text
                              style={[
                                  {
                                      fontFamily: "Quicksand-Regular",
                                      textAlign: "center",
                                      fontSize: normalize(14),
                                      color: Colors.noticeText
                                  }
                              ]}
                          >
                              Already have account? Login
                          </Text>
                      </TouchableOpacity>
                  </View>
              </View>
          )}
        </Content>
      </ImageBackgroundComponent>
    );
  }
}
