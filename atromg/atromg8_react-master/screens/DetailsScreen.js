import React, { Component } from "react";
import {
  View,
  Image,
  Platform,
  Text,
  ImageBackground,
  TouchableOpacity,
  Clipboard,
  ScrollView
} from "react-native";
import {
  Container,
  Thumbnail,
  Content,
  CardItem,
  Left,
  Label,
  Item,
  Icon,
  Right,
  Input,
  Toast
} from "native-base";
import NavigationHeaderComponent from "../components/NavigationHeader";
import QRCode from "react-native-qrcode-svg";

import {ImageBackgroundOnlyComponent} from "../components/background";
import Colors from "../constants/Colors";
import Style, {Home} from "../constants/Style";
import TransactionListComponent from "../components/TransactionListComponent";
import Layout from "../constants/Layout";
import DoubleLineText from "../components/DoubleLineText";
import IconImageComponent from "../components/IconImageComponent";
import { normalize } from "../utils/screenSize";
import ModalComponent from "../components/ModalComponent";
import vault from "../assets/images/atrom-logo.png";


export class DetailsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    modalVisible: false,
    selected: {},
    refreshing: false,
    showAll: false
  };

  constructor(props) {
    super(props);
    this.onSharePress = this.onSharePress.bind(this);
  }

  onSharePress() {
    Clipboard.setString(this.props.address);
    Toast.show({ duration: 3000, text: "Address copied", position: "bottom" });
  }

  onSelect(item) {
    const { coinCode, amount } = item;
    const { fiatValue } = this.props;
    this.setState({
      modalVisible: true,
      selected: {
        ...item,
        fiatAmount: Number(
          ((fiatValue && fiatValue[coinCode]) || 0) * amount
        ).toFixed(2)
      }
    });
  }

  render() {
    const {
      navigation,
      transactions,
      coinCode,
      cryptoIndex,
      displayText,
      address,
      balance,
      displayBalance,
      symbol,
      fiatSymbol,
      fiatBalance,
        profile
    } = this.props;
      const { image } = profile;
    const transactionsData = [
      {
        title: <DoubleLineText primaryText={displayText} />,
        content: transactions
      }
    ];

    const { selected, modalVisible, showAll } = this.state;

    return (
      <Container>
        {/*<NavigationHeaderComponent*/}
          {/*title={`${coinCode} Wallet`}*/}
          {/*//   subTitle={"Edit Profile"}*/}
          {/*back={"Home"}*/}
          {/*navigation={navigation}*/}
        {/*/>*/}
        <ImageBackgroundOnlyComponent>
          <ScrollView
              contentContainerStyle={{
                  flexGrow:1
              }}
          >
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
                  <Text style={[Home.pinHead]}>{coinCode} Wallet</Text>
                  <Text style={[Home.subText]}>
                      Set your pin for ATROMG8. You will need this PIN to access wallet and validate
                      transactions
                  </Text>
              </View>
              <View style={[Home.formCard2]}>
                  <TouchableOpacity onPress={this.onSharePress}>
                      <View
                          style={{
                              backgroundColor: "transparent",
                              borderColor: "transparent",
                              padding: 1
                          }}
                      >
                          <CardItem
                              style={{
                                  backgroundColor: "transparent"
                              }}
                          >
                              <Left>
                                  <IconImageComponent name={coinCode} style={{backgroundColor:"#fff",
                                      padding:0,
                                      margin:8,
                                      marginLeft:12,
                                      marginRight:12,
                                      alignItems:'center',
                                      justifyContent:'center'}} size={25} />
                              </Left>
                              <Right>
                                  <Text
                                      style={{
                                          textAlign: "right",
                                          fontSize: normalize(24),
                                          fontFamily: "ubuntu-bold",
                                          color: Colors.noticeText
                                      }}
                                  >
                                      {`${symbol} ${displayBalance || balance}`}
                                  </Text>
                                  <Text
                                      style={{
                                          textAlign: "right",
                                          fontSize: normalize(18),
                                          fontFamily: "ubuntu",
                                          color: Colors.noticeText
                                      }}
                                  >
                                      = $ {fiatBalance}
                                  </Text>
                              </Right>
                          </CardItem>
                          <CardItem
                              style={{
                                  backgroundColor: "transparent",
                                  alignSelf: "center"
                              }}
                          >
                              <View
                                  contentContainerStyle={{}}
                                  style={{
                                      backgroundColor: "transparent",
                                      flex: 1,
                                      justifyContent: "center",
                                      alignItems: "center"
                                  }}
                              >
                                  <View
                                      style={{
                                      }}
                                  >
                                      <QRCode
                                          size={normalize(90)}
                                          color={Colors.backgroundColor}
                                          backgroundColor={Colors.noticeText}
                                          logoBackgroundColor={Colors.backgroundColor}
                                          value={address}
                                      />
                                  </View>
                                  <Label
                                      style={{
                                          textAlign: "center",
                                          color: Colors.blackText,
                                          fontFamily: "Quicksand-Bold",
                                          marginTop: normalize(18),
                                          fontSize: normalize(14),
                                      }}
                                  >
                                      Scan QR code to get your {coinCode} address
                                  </Label>
                              </View>
                          </CardItem>
                          <CardItem
                              style={{
                                  backgroundColor: "transparent",
                                  alignSelf: "center",
                                  marginTop: 30
                              }}
                          >
                              <View style={{ maxWidth: "100%" }}>
                                  <Label
                                      style={{
                                          textAlign: "center",
                                          fontSize: normalize(15),
                                          marginBottom: normalize(8),
                                          overflow: "hidden",
                                          color: Colors.blackText,
                                          width:'100%'
                                      }}
                                  >
                                      Your {coinCode} Address
                                  </Label>

                                  <View
                                      style={{
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                      }}
                                  >
                                      <Text
                                          numberOfLines={1}
                                          style={{
                                              marginBottom:20,
                                              marginRight:10,
                                              color: '#a2a9b0',
                                              maxWidth:'90%',
                                              overflow:'hidden',
                                              fontFamily: "ubuntu",
                                              textAlignVertical: "center",
                                          }}
                                          value={address}
                                      >
                                          {address}
                                      </Text>
                                      <Icon
                                          type="Entypo"
                                          name="share"
                                          fontSize={20}
                                          style={{
                                              color: Colors.noticeText,
                                              marginTop:-5
                                          }}
                                      />
                                  </View>
                              </View>
                          </CardItem>
                      </View>
                  </TouchableOpacity>
              </View>
            <ModalComponent
              onClose={() => {
                this.setState({ modalVisible: false });
              }}
              modalVisible={modalVisible}
              selected={selected}
            />
            {transactions && transactions.length > 0 && (
              <TransactionListComponent
                onSelect={this.onSelect.bind(this)}
                style={Style.accordion}
                data={transactionsData}
              />
            )}
            {transactions && transactions.length == 0 && (
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: Colors.blackText,
                    fontSize: normalize(18),
                      fontFamily: "Quicksand-Bold",
                    marginTop: 5
                  }}
                >
                  No Previous Transactions
                </Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </ImageBackgroundOnlyComponent>
      </Container>
    );
  }
}

export default DetailsScreen;
