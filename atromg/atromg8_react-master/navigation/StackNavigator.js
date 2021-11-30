import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
// Components
import { Image, View } from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import DetailsContainer from "../containers/DetailsContainer";
import DocumentsScreenContainer from "../containers/DocumentsScreenContainer";
// Container
import HomeContainer, { TransactionScreenContainer } from "../containers/HomeContainer";
import ProfileScreenContainer, { ProfileEditScreenContainer, TokensScreenContainer } from "../containers/ProfileScreenContainer";
import QRScanContainer from "../containers/QRScanContainer";
import ReceiveScreenContainer from "../containers/ReceiveScreenContainer";
import SendScreenContainer from "../containers/SendScreenContainer";
import RemoteSessionScreen from "../screens/RemoteSessionScreen";
import send from "../assets/images/footer/income.png";
import sendActive from "../assets/images/footer/income-1.png";
import receiveImage from "../assets/images/footer/income-2.png";
import receiveActive from "../assets/images/footer/income-3.png";
import dashboard from "../assets/images/footer/Dashboard.png";
import dashboardActive from "../assets/images/footer/Dashboard-1.png";



export const HomeStack = createStackNavigator({
  Home: HomeContainer,
  Profile: ProfileScreenContainer,
  ProfileEdit: ProfileEditScreenContainer,
  Tokens: TokensScreenContainer,
  Details: DetailsContainer,
  QRScan: QRScanContainer,
  AllTransactions: TransactionScreenContainer,
  RemoteSession: RemoteSessionScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Wallet",
      tabBarIcon: ({ focused }) => {
          const image = focused
              ? dashboardActive
              : dashboard
          const background = focused
              ? '#e5e9eb'
              : '#F1F5F8'
          return (
              <View style={{position:'relative',width:30, height:30,alignItems:'center'}}>
                  <View style={{backgroundColor:background,
                                position:'absolute',
                                left:-17,
                                top:-10,
                                height:65,
                                borderTopRightRadius:10,
                                borderTopLeftRadius:10,
                                width:65}}>

                  </View>
              <Image
                  source={image}
                  resizeMode={'contain'}
              />
              </View>
          )
      }
  };
};

// HomeStack.navigationOptions = _navigationOption("Home", "group");

export const SendStack = createStackNavigator({
  Home: SendScreenContainer,
  QRScan: QRScanContainer
});

SendStack.navigationOptions = {
  tabBarLabel: "Send",
  tabBarVisible: true,
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? sendActive
            : send
        const background = focused
            ? '#e5e9eb'
            : '#F1F5F8'
        return (
            <View style={{width:30, height:30,alignItems:'center'}}>
                <View style={{backgroundColor:background,
                    position:'absolute',
                    left:-17,
                    top:-10,
                    height:65,
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,
                    width:65}}>

                </View>
                <Image
                    source={image}
                    resizeMode={'contain'}
                />
            </View>
        )
    }
};

export const ReceiveStack = createStackNavigator({
  Home: ReceiveScreenContainer
});

ReceiveStack.navigationOptions = {
  tabBarLabel: "Receive",
  tabBarVisible: true,
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? receiveActive
            : receiveImage
        const background = focused
            ? '#e5e9eb'
            : '#F1F5F8'
        return (
            <View style={{width:30, height:30,alignItems:'center'}}>
                <View style={{backgroundColor:background,
                    position:'absolute',
                    left:-17,
                    top:-10,
                    height:65,
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,
                    width:65}}>

                </View>
                <Image
                    source={image}
                    resizeMode={'contain'}
                />
            </View>
        )
    }
};

export const DocumentStack = createStackNavigator({
  Home: DocumentsScreenContainer
});

DocumentStack.navigationOptions = {
  tabBarLabel: "Documents",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"document"} />
  )
};
