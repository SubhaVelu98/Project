import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Body, Icon, Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import moment from "moment";
import screenSize, { normalize } from "../utils/screenSize";
export default class TransactionComponent extends React.Component {
  render() {
    const { data = [], onSelect } = this.props;

    const balanceStatus = change =>
      change == "+" ? Colors.successColor : Colors.failedColor;

    return (
      <View>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              onSelect(item);
            }}
            key={index}
          >
            <View style={styles.card}>
              <CardItem style={styles.cardItem}>
                <Body style={styles.cardBody}>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginLeft: 15,
                      maxWidth: Layout.window.width - 150
                    }}
                  >
                    <Icon
                      name="circle"
                      type="FontAwesome"
                      style={[
                        styles.icon,
                        {
                          color: Colors[item.coinCode] || Colors.TOKEN
                        }
                      ]}
                    />
                    <Text numberOfLines={1} style={styles.address}>
                      {item.address}
                    </Text>
                    <Text style={styles.date}>
                      {moment(item.transactedOn).format("DD MMMM YYYY HH:mm")}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-end"
                    }}
                  >
                    <Text
                      style={[
                        {
                          color: balanceStatus(item.change)
                        },
                        styles.balance
                      ]}
                    >{`${item.change} ${
                      item.isToken ? item.value : item.amount
                      } ${item && item.coinCode}`}</Text>
                  </View>
                </Body>
              </CardItem>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    marginLeft: 12,
    marginRight: 12,
      marginTop:10,
    backgroundColor: Colors.whiteText,
    borderColor: Colors.whiteText,
    borderRadius: 8,

  },
  cardItem: {
      borderRadius: 8,
      backgroundColor: Colors.whiteText,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      paddingTop:20,
      paddingBottom:20,
  },
  cardBody: {
    justifyContent: "center",
    alignContent: "space-between",
    position: "relative"
  },
  icon: {
    fontSize: normalize(10),
    marginLeft: -20,
    marginTop: 14,
    position: "absolute"
  },
  address: {
    fontFamily: "Quicksand-Regular",
    fontSize: normalize(15),
    paddingBottom:normalize(8),
    color: Colors.noticeText
  },
  date: {
      fontFamily: "Quicksand-Regular",
    fontSize: normalize(13),
    opacity: 0.8,
    marginTop: 3,
      color: Colors.noticeText
  },
  balance: {
      fontFamily: "Quicksand-Bold",
    fontSize: normalize(14),
    position: "absolute",
    bottom: 5,
    right: 3
  }
});
