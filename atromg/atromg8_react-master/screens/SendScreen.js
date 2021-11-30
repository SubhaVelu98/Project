import { Button, Card, Container, Content, Text, Toast, Thumbnail } from "native-base";
import React, { Component } from "react";
import { ActivityIndicator, View, Image, TouchableOpacity } from "react-native";
import AddressInputComponent from "../components/AddressInputComponent";
import AuthenticateModalComponent from "../components/AuthenticateModalComponent";
import CoinDisplayComponent from "../components/CoinDisplayComponent";
import CurrencyConversionComponent from "../components/CurrencyConversionComponent";
import {ImageBackgroundOnlyComponent} from "../components/background";
import {PinUnlock} from "../components/PinUnlock";
import NavigationHeaderComponent from "../components/NavigationHeader";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Style, {Home, PinScreen} from "../constants/Style";
import { normalize } from "../utils/screenSize";
import vault from "../assets/images/atrom-logo.png";

export default class SendScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    wait: false,
    success: false,
    receiver: "",
    amount: "",
    scanning: false,
    modalVisible: false,
    loading: false,
    transaction: {},
      loadSendScreen:false,

  };


  constructor() {

    super();
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onChangeCoin = this.onChangeCoin.bind(this);
    this.onSendPress = this.onSendPress.bind(this);
    this.onScanFinger = this._onScanFinger.bind(this);
    this.onSubmitTransaction = this.onSubmitTransaction.bind(this);
  }

  async _onScanFinger() {
    this.setState({ wait: true });
    await FingerPrintScanner.authenticate(
      "Do your biometric authentication to access Atromg8"
    )
      .then(success => {
        if (success) {
          this.setState({ wait: false, success });
        }
      })
      .catch(error => {
        this.setState({ message: error ? error.message : error.name });
      });
  }

  componentDidMount() {
    console.log('99999999999999')
    // this.props.getCryptoBalance();
    // const { to } = this.props.transaction;
    // this.setState({
    //   receiver: to
    // });
  }
  componentWillReceiveProps(nextProps) {
    const payment = nextProps.navigation.getParam("payment", null);
    const address = nextProps.navigation.getParam(
      "address",
      this.state.receiver
    );
    if (address != this.state.receiver) {
      this.setState({ receiver: address });
    }
    if (payment && !this.state.modalVisible) {
      const { receiver, amount, coinCode } = payment;
      let changed = false;
      if (receiver != this.state.receiver) {
        this.setState({ receiver });
        changed = true;
      }
      if (amount != this.state.amount) {
        this.setState({ amount });
        changed = true;
      }
      if (coinCode != this.state.coinCode) {
        this.setState({ coinCode });
        this.onChangeCoin(
          this.props.cryptoCurrenciesKeyIndex[payment.coinCode]
        );
        changed = true;
      }
      if (changed) {
        this.onSubmitTransaction()
      }
    }
  }

  onAddressChange(receiver) {
    this.setState({ receiver });
  }

  onAmountChange(amount) {
    this.setState({ amount });
  }

  onChangeCoin(keyIndex) {
    this.props.changeSelectedCrypto(keyIndex);
  }

  componentWillMount() {
    this.setState({ modalVisible: false });
  }

  onSendPress() {
    const { receiver, amount } = this.state;
    const { coinCode, fiatSymbol, fiatValue } = this.props;
    if (!amount || !receiver || amount <= 0) {
      console.log("Payment Amount");
      Toast.show({
        duration: 3000,
        text: `Please fill in the payment ${
          receiver ? "amount" : "receiver address"
          }`,
        type: "danger",
        position: "top"
      });
      return;
    }
    this.setState({
      modalVisible: true,
      // transaction: {
      //   coinCode,
      //   fiatSymbol,
      //   fiatAmount: fiatValue[coinCode] * amount
      // }
    });
  }

  onSubmitTransaction() {
    this.setState({ modalVisible: false });
    const {
      publicKey,
      privateKey,
      txrefs,
      coinCode,
      balance,
      balanceActual,
      gasLimit,
      gasPrice,
      txCount,
      fiatBalance,
      fiatCode,
      isToken,
      contractAddress,
      fiatSymbol
    } = this.props;
    let { receiver, amount } = this.state;
    this.props.signTransaction({
      receiver,
      amount,
      publicKey,
      privateKey,
      txrefs,
      coinCode,
      balance,
      balanceActual,
      gasLimit,
      gasPrice,
      txCount,
      fiatBalance,
      fiatCode,
      isToken,
      contractAddress,
      fiatSymbol
    });
  }
    checkHere = ( check) => {
        if(check === true){
            this.setState({ loadSendScreen: true });
        }
    };
  render() {
    const { profile, displayText, navigation } = this.props;
      const { image } = profile;
    // const { hash } = transaction;
    let { receiver = "", amount, modalVisible, transaction, loadSendScreen } = this.state;
    return (
      <Container>
        {/*<NavigationHeaderComponent*/}
          {/*title={`${displayText} Wallet`}*/}
          {/*back='HomeStack'*/}
          {/*onBackPress={() => {*/}
            {/*this.setState({*/}
              {/*wait: false,*/}
              {/*success: false,*/}
              {/*receiver: "",*/}
              {/*amount: "",*/}
              {/*scanning: false,*/}
              {/*modalVisible: false,*/}
              {/*loading: false,*/}
              {/*transaction: {}*/}
            {/*});*/}
          {/*}}*/}
          {/*navigation={navigation}*/}
        {/*/>*/}
          <ImageBackgroundOnlyComponent>
              <Content
                  contentContainerStyle={{
                      flexGrow: 1
                  }}
              >
                  <View style={{height:'100%', paddingBottom:100}}>
                      {modalVisible && <AuthenticateModalComponent
                          onClose={() => {
                              this.setState({ modalVisible: false });
                          }}
                          onSubmitTransaction={this.onSubmitTransaction}
                          modalVisible={modalVisible}
                          transaction={transaction}
                      />}
                      <View style={[Home.topWrap]}>
                          <View style={[Home.logoWrap]}>
                              <Image source={vault} style={[Home.logo]}/>
                          </View>
                          <TouchableOpacity style={[Home.profile]} onPress={() => {
                              navigation.navigate("Profile");
                          }}>
                              <Thumbnail
                                  style={{ alignSelf: "flex-end", borderColor:'#fff',borderWidth:2 }}
                                  small
                                  source={{ uri: image }}
                              />
                          </TouchableOpacity>
                      </View>
                      <View style={{alignItems:'center'}}>
                          <Text style={[Home.pinHead]}>Send Coins</Text>
                          <Text style={[Home.subText]}>
                              Set your pin for ATROMG8. You will need this PIN to access wallet and validate
                              transactions
                          </Text>
                      </View>
                      <View style={[Home.formCard2]}>
                          <CoinDisplayComponent
                              onChangeCoin={this.onChangeCoin}
                              {...this.props}
                              style={{width:'100%'}}
                          />
                          <AddressInputComponent
                              {...this.props}
                              onAddressChange={this.onAddressChange}
                              value={receiver}
                              style={{marginTop:normalize(50),
                                  width:'100%',
                                  marginBottom:normalize(30)}}
                          />
                          <CurrencyConversionComponent
                              onAmountChange={this.onAmountChange}
                              value={amount}
                              {...this.props}
                              style={{marginBottom:normalize(40)}}
                          />
                          {/* <TextInput value={hash} /> */}
                          <TouchableOpacity style={[Home.touch2]} onPress={this.onSendPress}>
                              <Card style={[Home.button, Home.btnAdd]}>
                                  <Text  style={[Home.text]}>Send</Text>
                              </Card>
                          </TouchableOpacity>
                          {/*<Button*/}
                          {/*style={{backgroundColor:Colors.btnClr,*/}
                          {/*margin:normalize(10),*/}
                          {/*marginTop:normalize(20),*/}
                          {/*marginBottom:normalize(40),*/}
                          {/*maxWidth:200}}*/}
                          {/*onPress={this.onSendPress}>*/}
                          {/*<Text*/}
                          {/*style={[Home.button],{*/}
                          {/*fontFamily: "Quicksand-Regular",*/}
                          {/*fontSize: normalize(16),*/}
                          {/*textAlign:'center',*/}
                          {/*width:'100%',*/}
                          {/*color: Colors.whiteText*/}
                          {/*}}*/}
                          {/*>*/}
                          {/*Send*/}
                          {/*</Text>*/}
                          {/*</Button>*/}
                      </View>
                  </View>
              </Content>

          </ImageBackgroundOnlyComponent>
      </Container>
    );
  }
}
