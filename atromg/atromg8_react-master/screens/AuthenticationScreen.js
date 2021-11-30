
import { Button, Content, Toast } from "native-base";
import React, { Component } from "react";
import { StatusBar, Text, TouchableOpacity, View , AppState} from "react-native";
import FingerPrintScanner from "react-native-fingerprint-scanner";
import { ImageBackgroundComponent } from "../components/background";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Style from "../constants/Style";
import { normalize } from "../utils/screenSize";

export default class AuthenticationScreen extends Component {
  static navigationOptions = {
    header: null
  };
  fingerPrintAnimation = {};
  state = {
    bioMetricSuccess: false,
    message: "",
    compatible: false,
    id: "",
    wait: false,
    errorMessage: "",
    appLoading: true,
      appState: AppState.currentState,
  };

  constructor() {
    super();
    this.scanFinger = this.scanFinger.bind(this);
    this.bioMetricSuccess = this.bioMetricSuccess.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ errorMessage: "" });
    }, 2000);
      AppState.addEventListener('change', this._handleAppStateChange);

      return FingerPrintScanner.isSensorAvailable()
      .then(() => {
        console.log('available 1111111111111111')
        this.setState({
          compatible: true
        });

          return this.scanFinger();
      })
      .catch(err => {
        Toast.show(err.message);
          this.setState({
          compatible: false,
          errorMessage: err.message || err.name
        });
          this.props.navigation.navigate("Login");
      });
  }
    _handleAppStateChange = (nextAppState) => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            return FingerPrintScanner.isSensorAvailable()
                .then(() => {
                    console.log('available 1111111111111111')
                    this.setState({
                        compatible: true
                    });

                    return this.scanFinger();
                })
                .catch(err => {
                    Toast.show(err.message);
                    this.setState({
                        compatible: false,
                        errorMessage: err.message || err.name
                    });
                    this.props.navigation.navigate("Login");
                });
            console.log('App has come to the foreground!');
        }
        this.setState({appState: nextAppState});
    };

  bioMetricSuccess(success) {
    const { store } = this.props;
    if (success) {
      if (Boolean(store && store.id)) {
        console.log('Credentials Found login')
        this.props.login({ ...store, loginAfterSuccess: true, noEmail: true });
      } else {
        console.log('Credentials Not Found register')
        this.props.register({ noEmail: true });
      }
      this.setState({ bioMetricSuccess: true })
    } else {
      this.setState({ errorMessage: "Biometric Authentication Failed" });
    }
  }

  async scanFinger() {
    await FingerPrintScanner.release()
    await FingerPrintScanner.authenticate({
      onAttempt: this.handleAuthenticationAttempted
    })
      .then(this.bioMetricSuccess)
      .catch(error => {
        Toast.show(error.message);
        this.setState({
          errorMessage: error.message
        });
        return this.scanFinger();
      });
  }

  handleAuthenticationAttempted = error => {
    this.setState({ errorMessage: error.message });
    setTimeout(() => {
      this.setState({ errorMessage: "" });
    }, 2000);
  };

    componentWillUnmount() {
        if (this.state.compatible) FingerPrintScanner.release();
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
  render() {
    const { compatible, errorMessage, bioMetricSuccess } = this.state;
    const { id } = this.state;
    return (
      <ImageBackgroundComponent>

        <StatusBar backgroundColor={Colors.backgroundColor} />
        {/* <Loader loading={this.props.loading} /> */}

        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "stretch"
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
                width:'100%'
            }}
          >
            <View
              style={{
                height: normalize(100)
              }}
            />
            {compatible && !bioMetricSuccess && (
              <Text
                style={{
                  fontFamily: "ubuntu",
                  alignSelf: "center",
                  textAlign: "center",
                  fontSize: 13,
                  color: errorMessage
                    ? Colors.failedColor
                    : Colors.noticeText,
                  width: Layout.window.width - normalize(100)
                }}
              >
                {errorMessage ||
                  "Scan your fingerprint on the\ndevice scanner to continue"}
              </Text>
            )}
            {!compatible && (
              <View style={{width:'100%'}}>
                {
                  this.props.store.id ? (
                  <Button
                    transparent
                    onPress={() => {
                      this.props.navigation.navigate("Login");
                    }}
                    light
                  >
                    <Text style={Style.centerAlignedText}>
                      Login to {`${this.props.profile.email || 'Account'}`}
                    </Text>
                  </Button>
                ) : (
                    <Button
                      onPress={() => {
                        this.props.navigation.navigate("Register");
                      }}
                      transparent
                      light
                    >
                      <Text style={Style.centerAlignedText}>
                        Create new account
                      </Text>
                    </Button>
                  )
                }
              </View>
            )}
            {false && (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("PinUnlock");
                }}
              >
                <Text
                  style={{
                    fontFamily: "ubuntu",
                    alignSelf: "center",
                    textAlign: "center",
                    color: errorMessage
                      ? Colors.failedColor
                      : Colors.noticeText,
                    paddingTop: 50,
                    width: Layout.window.width - normalize(100)
                  }}
                >
                  Use PIN to login
                  </Text>
              </TouchableOpacity>
            )}
          </View>
        </Content>
      </ImageBackgroundComponent>
    );
  }
}
