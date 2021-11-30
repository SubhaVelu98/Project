import React, { Component } from "react";
import { Container, Content, Card, CardItem, Thumbnail } from "native-base";
import { View, Image, TouchableOpacity, Text } from "react-native";
import NavigationHeaderComponent from "../components/NavigationHeader";
import { INITIAL_STATE } from "../constants/State";

import {ImageBackgroundOnlyComponent} from "../components/background";
import Style, {Home, Recieve} from "../constants/Style";
import ReceiveComponent from "../components/ReceiveComponent";
import { normalize } from "../utils/screenSize";
import vault from "../assets/images/atrom-logo.png";

export class ReceiveScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { profile, navigation, displayText } = this.props;
      const { image } = profile;
    return (
      <Container>
        {/*<NavigationHeaderComponent*/}
          {/*title={`Receive ${displayText || "---"}`}*/}
          {/*back={"HomeStack"}*/}
          {/*navigation={navigation}*/}
        {/*/>*/}

          <ImageBackgroundOnlyComponent>
              <Content
                  contentContainerStyle={{
                      flexGrow:1
                  }}
              >
                  <View style={{height:'100%', paddingBottom:100}}>
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
                          <Text style={[Home.pinHead]}>Receive Coins</Text>
                          <Text style={[Home.subText]}>
                              Set your pin for ATROMG8. You will need this PIN to access wallet and validate
                              transactions
                          </Text>
                      </View>
                      <View style={[Home.formCard2]}>
                          <ReceiveComponent {...this.props} />
                      </View>
                  </View>
          </Content>
        </ImageBackgroundOnlyComponent>
      </Container>
    );
  }
}

export default ReceiveScreen;
