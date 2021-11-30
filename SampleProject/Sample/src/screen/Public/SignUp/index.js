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
              navigate('PublicSignIn')
            }}>
              <Icon name='keyboard-arrow-left' type='MaterialIcons' style={styles.navLeftIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.signupContent}>
            <View style={styles.signupContentItem}>
              <Text style={styles.signupContentTitle}>{__('Tourzio')}</Text>
              <Text style={styles.signupContentDesc}>{__('We stay for you')}</Text>
            </View>
            <View style={styles.signupLayout}>
              <View style={styles.nameRow}>
                <View style={styles.nameDetails}>
                  <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                    placeholder={__('FIRST NAME')} style={styles.formInput} />
                </View>
                <View style={styles.nameDetailAlign}>
                  <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                    placeholder={__('LAST NAME')} style={styles.formInput} />
                </View>
              </View>
              <View>
                <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                  placeholder={__('EMAIL ADDRESS')} style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                  placeholder={__('MOBILE NUMBER')} style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                  placeholder={__('PASSWORD')} style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholderTextColor={'rgba(255,255,255,0.8)'}
                  placeholder={__('CONFIRM PASSWORD')} style={styles.formInput} />
              </View>
              <TouchableOpacity style={styles.registerBtn} onPress={() => {
                navigate('PublicOtp')
              }}>
                <Text style={styles.registerBtnText}>{__('REGISTER')}</Text>
              </TouchableOpacity>
              <Text style={styles.signupDesc}>{__('By clicking Register, you accept our Terms of Use and Privacy Policy')}</Text>
              <View style={styles.signUp}>
                <Text style={styles.signUpTitle}>{__('Already have an Acccount?')}</Text>
                <TouchableOpacity onPress={() => {
                navigate('PublicSignIn')
              }}>
                <Text style={styles.signupDesc}>{__('LogIn')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
