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
      language: 'en',
    }
  }
  render() {
    return (
      <Container style={theme.layoutFx}>
        <StatusBar backgroundColor='rgba(16, 16, 19, 1)' animated barStyle='light-content' />
        <Content contentContainerStyle={styles.layoutDefault}>
          <Image source={{ uri: 'https://images.pexels.com/photos/36012/pexels-photo.jpg?cs=srgb&dl=architecture-eiffel-tower-foggy-36012.jpg&fm=jpg' }} style={styles.bgImgMain} />
          <View style={styles.bgCover} />
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => {
              navigate('PublicSignUp')
            }}>
              <Icon name='keyboard-arrow-left' type='MaterialIcons' style={styles.navLeftIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.successContent}>
            <View style={styles.contentLayout}>
              <Image source={require('@asset/images/thnk-u.png')} style={styles.thnkImg} />
              <Text style={styles.successTitle}>{__('Congratulations!')}</Text>
              <Text style={styles.successDesc}>{__('You have successfully registered and we sent a verification code to your registered email address, Please verify and logging in')}</Text>
            </View>
            <View style={styles.successLayout}>
              <TouchableOpacity style={styles.logBtn} onPress={() => {
                navigate('PublicSignIn')
              }}>
                <Text style={styles.logBtnDesc}>{__('LOG IN')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
