import {
  Content,
  Fab,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  Toast,
    List,
    Card,
    ListItem
} from "native-base";
import React, { Component } from "react";
import { Image, Keyboard, TouchableOpacity, View , Button, ScrollView,TextInput, ImageBackground} from "react-native";
import { ImageBackgroundComponent } from "../components/background";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Style, {Login} from "../constants/Style";
import { normalize } from "../utils/screenSize";
import { validateEmail, validateForm } from "../utils/validators";
import Loader from "../components/Loader";
import background from "../assets/images/trans2.png";



const INITIAL_STATE = {
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
  keyBoard: false,
  mnemonic: "",
  isLogin: true,
  storeAvailable: false,
  mnemonicAvailable: false,
  secureTextEntry: true
};

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = INITIAL_STATE;

  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }

  async componentDidMount() {
    const { store } = this.props;
    if (store && store.email) {
      // if (store && (store.email != email || store.password != password)) {
      this.setState({ email: store.email });
    }

    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  getDerivedStateFromProps(nextProps) {
    this.setState(nextProps);
  }

  onFormSubmit() {
      const { store } = this.props;
    const { id } = store;
    const { email, password } = this.state;
    const { emailInvalid, passwordInvalid } = validateForm(email, password);
    const credentials = { id, email, password, loginAfterSuccess: true };
      if(emailInvalid){
          Toast.show({ type: "danger", text: 'Invalid Email' })
          return
      }
    if (password !== store.password) {
      Toast.show({ type: "danger", text: 'Password is incorrect' })
      return
    }

    if (!emailInvalid && !passwordInvalid) {
      this.props.login(credentials);
    }
  }

  _keyboardDidShow() {
    this.setState({ keyBoard: true });
  }

  _keyboardDidHide() {
    this.setState({ keyBoard: false });
  }

  validateForm() {
    const { email, password } = this.state;
    let emailInvalid = false;
    let passwordInvalid = false;
    if (email && email.length) {
      emailInvalid = !validateEmail(email);
    }
    if (email && email.length && (password && password.length <= 0)) {
      passwordInvalid = true;
    } else {
      this.setState({ emailInvalid, passwordInvalid });
    }
  }

  render() {
    const {
      compatible,
      emailInvalid,
      passwordInvalid,
      email,
      password,
      secureTextEntry
    } = this.state;
    const { id } = this.props.store;

    return (
            <ImageBackgroundComponent style={{flexGrow:1}}>
                    {/* <Loader {...this.props}></Loader> */}
                    <View >
                        {/*<ImageBackground*/}
                        {/*style={{flex: 1, opacity:.9}}*/}
                        {/*blurRadius={60}*/}
                        {/*source={background}*/}
                        {/*imageStyle={{resizeMode: 'repeat'}}*/}
                        {/*>*/}
                        {/*</ImageBackground>*/}
                        <View style={[Login.form]}>
                            <Text
                                style={[Login.loginHead]}>
                                Login
                            </Text>
                            <Text style={[Login.subText]}>
                                Log in to access your wallet and previous data
                            </Text>
                            <List style={[Login.list]}>
                                <Item floatingLabel error={emailInvalid} style={[Login.itemWrap]}>
                                    <Icon
                                        style={{
                                            color: Colors.fade,
                                            fontSize: normalize(20),
                                            marginTop:-30
                                        }}
                                        type="Octicons"
                                        name="mail"
                                    />
                                    <Label style={[Login.formLabel]}>Email</Label>
                                    <Input
                                        style={[Login.formInput]}
                                        onChangeText={email => {
                                            this.setState({ email });
                                        }}
                                        value={email}
                                        autoFocus={true}
                                    />
                                </Item>
                                <Item floatingLabel error={passwordInvalid}>
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
                                        autoCapitalize="none"
                                        blurOnSubmit={true}
                                        onSubmitEditing={this.onFormSubmit}
                                        style={[Login.formInput]}
                                        onChangeText={password => {
                                            this.setState({ password });
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
                                <Card style={[Login.button]} >
                                    <Text  style={[Login.text]}>Login</Text>
                                </Card>
                            </TouchableOpacity>
                        </View>
                        {!this.state.keyBoard && (
                            <View>
                                <View style={[Login.goReg]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("Register");
                                        }}
                                    >
                                        <Text
                                            style={[
                                                {
                                                    fontFamily: "Quicksand-Regular",
                                                    textAlign: "center",
                                                    fontSize: normalize(15),
                                                    marginBottom: normalize(15),
                                                    color: Colors.noticeText
                                                }
                                            ]}
                                        >
                                            Create New Account
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[Login.goReg, {opacity:0}]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("Register");
                                        }}
                                    >
                                        <Text
                                            style={[
                                                {
                                                    fontFamily: "Quicksand-Regular",
                                                    textAlign: "center",
                                                    fontSize: normalize(15),
                                                    marginBottom: normalize(15),
                                                    color: Colors.noticeText
                                                }
                                            ]}
                                        >
                                            Create New Account
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
            </ImageBackgroundComponent>


    );
  }
}
