import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Content, Icon, Text, View } from 'native-base'

import styles from './styles'
import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: false,
      isOpen: false,
      value: 'Tata Ace',
      label: '',
    }
  }
  render() {
    return (
      <Container style={theme.layoutFx}>
        <Header navLeftType='back' statusBarType='dark' navMiddleType='medium' title='' />
        <Content contentContainerStyle={styles.layoutDefault}>
          <Image source={require('@asset/images/HeaderBg.png')} style={styles.bgImgMain} />
          <View style={styles.titleDisplay}>
            <View style={styles.titleLayout}>
              <Text style={styles.title}>{__('ABOUT US')}</Text>
              <Text style={styles.desc}>Mi in nulla posuere sollicitudin aliquam.</Text>
            </View>
            <View style={styles.aboutLayout}>
              <View>
                <Text style={styles.aboutLayoutText}>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</Text>
                <Text style={styles.aboutLayoutText}>
                  Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip.</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
