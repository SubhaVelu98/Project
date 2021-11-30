import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import {
  Body,
  Container,
  Thumbnail,
  Card,
  Content,
  Left,
  Grid,
  Row,
  Col,
  CardItem,
  Icon,
  Right
} from "native-base";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import Colors from "../constants/Colors";
import {Home} from "../constants/Style";
import Layout from "../constants/Layout";
import IconImageComponent from "./IconImageComponent";
import { normalize } from "../utils/screenSize";

export default class CardComponent extends Component {
  render() {
    const { data, onCardPress } = this.props;
    const {
      coinCode,
      index,
      displayText,
      balance,
      displayBalance,
      symbol,
      fiatSymbol,
      fiatBalance
    } = data;

    return (
      <View style={[Home.card]}>
        <TouchableOpacity
          onPress={() => {
            onCardPress(index);
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
          >
            <CardItem
              style={{
                backgroundColor: "transparent",
                justifyContent:'space-between',
              }}
            >
              <Left>
                <IconImageComponent style={{alignItems:'center',
                    justifyContent:'center'}} name={coinCode} size={25} />
              </Left>
              <Right>
                <Text
                  style={[Home.code]}
                >
                  {coinCode}
                </Text>
                <Text
                  style={[Home.display]}
                >
                  {displayText} Wallet
                </Text>
              </Right>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: "transparent",
                alignSelf: "flex-end"
              }}
            >
              <Left>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: normalize(14),
                    opacity: 0.9,
                     marginTop:10,
                     marginBottom:5,
                    fontFamily: "ubuntu",
                    color: Colors.mnuColor
                  }}
                >
                  Your {coinCode} Balance
                </Text>
              </Left>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: "transparent",
                alignSelf: "flex-end",
                marginTop: normalize(-15)
              }}
            >
              <Left>
                <View style={[Home.pos]}>
                    <View style={[Home.symbol]}>
                        <Text style={{color:'#216cb1',        fontFamily: "ubuntu-bold",
                        }}>{symbol}
                        </Text>
                    </View>
                    <Text style={[Home.mainBal]}>{`${displayBalance || balance}`}</Text>
                </View>
              </Left>
              <Right>
                <Text
                  style={[Home.usBal]}
                >
                   $ {fiatBalance}
                </Text>
              </Right>
            </CardItem>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
