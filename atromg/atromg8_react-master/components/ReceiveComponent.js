import React, { Component } from "react";
import { Text, View, Alert, TouchableOpacity, Clipboard } from "react-native";
import {
  Content,
  Container,
  Button,
  Item,
  Label,
  Input,
  Icon,
  Toast,
    Card
} from "native-base";
import PropTypes from "prop-types";

import Colors from "../constants/Colors";
import FullButtonComponent from "./FullButtonComponent";
import CoinDisplayComponent from "./CoinDisplayComponent";
import AddressDisplayComponent from "./AddressDisplayComponent";
import moveToBottom from "../utils/moveToBottom";
import Layout from "../constants/Layout";
import Style, {Home} from "../constants/Style";
import screenSize, { normalize } from "../utils/screenSize";

export class ReceiveComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSharePress = this.onSharePress.bind(this);
    this.onChangeCoin = this.onChangeCoin.bind(this);
  }

  onSharePress() {
    Clipboard.setString(this.props.address);
    Toast.show({duration: 3000,
      text: "Address copied",
      position: "bottom"
    });
  }

  onChangeCoin(keyIndex) {
    this.props.changeSelectedCrypto(keyIndex);
  }

  render() {
    const { coinCode, displayText, address } = this.props;

    return (
      <View style={{marginBottom:10, width:'100%'}}>
        <CoinDisplayComponent
          onChangeCoin={this.onChangeCoin}
          {...this.props}
        />
        <AddressDisplayComponent
          coinCode={coinCode}
          displayText={displayText}
          address={address}
          style={{
              marginTop:normalize(40),
              marginBottom:normalize(40),
          }}
        />

        <View style={{ marginLeft: normalize("14") }}>
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
            Your {coinCode || "---"} Address
          </Label>
          <Label
            style={{
              fontFamily: "ubuntu",
               textAlign:'center',
              fontSize: normalize(14),
              color: '#a2a9b0'
            }}
          >
            {address || "---"}
            {"\n"}
          </Label>
        </View>
        {/* <Item stackedLabel>
          <Input
            style={{
              color: Colors.noticeText,
              paddingRight: normalize(50),
              overflow: "hidden"
            }}
            value={address}
            disabled={true}
          />
          <TouchableOpacity
            onPress={this.onSharePress}
            style={{
              position: "absolute",
              right: 0,
              bottom: 15
            }}
          >
            <Icon
              type="Entypo"
              name="share"
              fontSize={normalize(22)}
              style={{
                color: Colors.noticeText
              }}
            />
          </TouchableOpacity>
        </Item> */}
        <View style={{ padding: normalize(14), alignItems:'center' }}>
            <TouchableOpacity style={[Home.touch2]} onPress={this.onSharePress}>
                <Card style={[Home.button, Home.btnAdd]}>
                    <Text  style={[Home.text]}>Copy Address</Text>
                </Card>
            </TouchableOpacity>
          {/*<Button*/}
            {/*style={{backgroundColor:Colors.btnClr,*/}
            {/*alignItems:'center',*/}
            {/*borderRadius:10,*/}
            {/*margin:normalize(10),*/}
            {/*marginBottom:normalize(15),*/}
            {/*maxWidth:200}}*/}
            {/*onPress={this.onSharePress}>*/}
            {/*<Text*/}
              {/*style={{*/}
                  {/*fontFamily: "Quicksand-Regular",*/}
                {/*fontSize: normalize(16),*/}
                  {/*textAlign:'center',*/}
                  {/*width:'100%',*/}
                {/*color: Colors.whiteText*/}
              {/*}}*/}
            {/*>*/}
              {/*Share Address*/}
            {/*</Text>*/}
          {/*</Button>*/}
        </View>
      </View>
    );
  }
}

export default ReceiveComponent;

ReceiveComponent.propTypes = {
  coinCode: PropTypes.string.isRequired,
  fiatSymbol: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  style: PropTypes.object,
  cryptoCurrencies: PropTypes.array,
  changeSelectedCrypto: PropTypes.func.isRequired
};
