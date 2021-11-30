import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { Container, Button, Content, Picker } from "native-base";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import IconImageComponent from "../components/IconImageComponent";
import { Card, CardItem, Icon } from "native-base";
import Style from "../constants/Style";
import { normalize } from "../utils/screenSize";
import  down from '../assets/images/down.png'

export default class CoinDisplayComponent extends Component {
  state = {
    modalVisible: false
  };

  render() {
    const {
      onChangeCoin,
      coinCode,
      displayText,
        style,
      cryptoCurrencies,
      displayBalance
    } = this.props;
    const { modalVisible } = this.state;

    const deviceWidth = Layout.window.width;
    const deviceHeight = Layout.window.height;
    return (
      <View style={{...style}}>

        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
          style={{
            flexDirection: "row",
            padding: 0,
            justifyContent: "space-between",
              borderColor:'#eceff2',
              borderWidth:1,
              borderRadius:10,
              marginTop:10
          }}
        >
          <IconImageComponent name={coinCode} style={{
              backgroundColor:"#fff",
              padding:0,
              margin:8,
              marginLeft:12,
              marginRight:12,
              alignItems:'center',
              justifyContent:'center'}} size={15} />
          <View
            style={{
              flexGrow: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily: "ubuntu",
                color: Colors.noticeText,
                textAlignVertical: "center"
              }}
            >
              {displayText || "---"}
              {/*{`${displayBalance}`}*/}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
                width:18,
                marginRight:10
            }}
          >
            <Image source={down} style={{flex: 1,resizeMode: 'contain',width:18,}}/>

          </View>
        </TouchableOpacity>
        <Modal
          // isVisible={true}
          isVisible={modalVisible}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          onBackButtonPress={() => {
            this.setState({ modalVisible: false });
          }}
          onBackdropPress={() => {
            this.setState({ modalVisible: false });
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            transparent
            style={{
              backgroundColor: Colors.whiteText,
              width: Layout.window.width - normalize(40),
              borderRadius: 10,
                padding:10,
              borderColor: "transparent"
            }}
          >
            {cryptoCurrencies.map((obj, index) => {
              return (
                <TouchableOpacity
                  key={`key${index}`}
                  onPress={() => {
                    onChangeCoin(index);
                    this.setState({ modalVisible: false });
                  }}
                >
                  <CardItem style={{ backgroundColor: "transparent" }}>
                    <Text style={{ color: Colors.noticeText }}>
                      {obj.displayText}
                      {"    "}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        color: Colors.failedColor
                      }}
                    >{`${obj.symbol} ${obj.displayBalance ||
                      obj.balance}`}</Text>
                    <Text
                      style={{
                        textAlign: "right",
                        color: Colors.successColor,
                         marginLeft:3
                      }}
                    >
                       = {`${obj.fiatSymbol} ${obj.fiatBalance}`}
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              );
            })}
          </Card>
        </Modal>
      </View>
    );
  }
}
