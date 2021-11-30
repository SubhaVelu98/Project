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
              navigate('PublicHome')
            }}>
              <Icon name='keyboard-arrow-left' type='MaterialIcons' style={styles.navLeftIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.signinContent}>
            <View style={styles.signinContentItem}>
              <Text style={styles.signinContentTitle}>{__('Tourzio')}</Text>
              <Text style={styles.signinContentDesc}>{__('We stay for you')}</Text>
            </View>
            <View style={styles.logInLayout}>
              <View>
                <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                  placeholder={__('EMAIL ADDRESS OR MOBILE NUMBER')} style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                  placeholder={__('PASSWORD')} style={styles.formInput} />
              </View>
              <TouchableOpacity onPress={() => {
                navigate('PublicForgotPswd')
              }}>
                <Text style={styles.forgot}>{__('FORGOT PASSWORD?')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logBtn} onPress={() => {
                navigate('PublicHome')
              }}>
                <Text style={styles.logBtnDesc}>{__('LOG IN')}</Text>
              </TouchableOpacity>
              <Text style={styles.or}>{__('OR')}</Text>
              <Text style={styles.loginDesc}>{__('Login with')}</Text>
              <View style={styles.sign}>
                <View style={styles.smn}>
                  <TouchableOpacity style={[styles.smnBtn, styles.smnFacebook]}>
                    <Icon name='facebook' type='FontAwesome' style={styles.smnIcon} />
                    <Text style={styles.smnDesc}>{__('FACEBOOK')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.smnBtn, styles.smnTwitter]}>
                    <Icon name='twitter' type='FontAwesome' style={styles.smnIcon} />
                    <Text style={styles.smnDesc}>{__('TWITTER')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.smnBtn, styles.smnGooglePlus]}>
                    <Icon name='google-plus' type='FontAwesome' style={styles.smnIcon} />
                    <Text style={styles.smnDesc}>{__('GOOGLE')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.signUp} onPress={() => {
                navigate('PublicSignUp')
              }}>
                <Text style={styles.signUpTitle}>{__('New to Tourzio?')}</Text>
                <Text style={styles.signUpDesc}> {__('SignUp')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
