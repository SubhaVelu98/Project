import React, { Component } from "react";
import { Content, Item, Input, Label, View } from "native-base";
import TabBarIcon from "./TabBarIcon";
import Colors from "../constants/Colors";
import { normalize } from "../utils/screenSize";

export default class AddressInputComponent extends Component {
  onScanPress() {
    this.props.navigation.navigate("QRScan", {
      title: "Scan Receiver Address"
    });
  }

  render() {
    const { value, style } = this.props;
    const { onAddressChange } = this.props;
    return (
      <View style={{...style}}>
        <Item stackedLabel>
          <Label style={{fontSize:14}}>Enter Receiving Address</Label>

          <Input
            autoCapitalize="none"
            numberOfLines={1}
            style={{
              color: Colors.noticeText,
              paddingRight: normalize(60),
              overflow: "hidden",
              borderBottomColor:'#dce1eb',
              fontSize: normalize(16),
                paddingLeft:0
            }}
            multiline
            onChangeText={onAddressChange}
            value={value}
            textContentType="name"
            textBreakStrategy="highQuality"
          />

          <TabBarIcon
            onPress={this.onScanPress.bind(this)}
            style={{
              position: "absolute",
              right: 5,
              bottom: 15,
              opacity:.5,
              color: Colors.noticeText
            }}
            size={30}
            name="qr-code"
          />
        </Item>
      </View>
    );
  }
}
