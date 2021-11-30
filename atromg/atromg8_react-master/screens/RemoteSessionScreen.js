import React, { Component } from "react";
import Style from "../constants/Style";
import { Container, Content, Text } from "native-base";
import { View, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { normalize } from "../utils/screenSize";

export default class RemoteSessionScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    completed: false,
    session: ""
  };

  componentDidMount() {
    const session = this.props.navigation.getParam(
      "session",
      this.state.session
    );
    this.setState({ session });
  }

  render() {
    return (
      <Container
        style={[Style.container, { backgroundColor: Colors.noticeText }]}
      >
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center"
          }}
          style={[Style.content, { backgroundColor: Colors.backgroundColor }]}
        >
          <TouchableOpacity>
                            <Text>Animation</Text>

            {this.state.completed && (
              <Text
                style={{
                  color: Colors.noticeText,
                  fontFamily: "ubuntu-medium",
                  fontSize: normalize(20),
                  width: 250,
                  textAlign: "center"
                }}
              >
                Connected to {this.state.session}
              </Text>
            )}
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
