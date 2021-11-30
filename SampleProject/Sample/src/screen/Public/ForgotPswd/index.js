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
          <View style={styles.bgCover} /><View style={styles.navBar}>
            <TouchableOpacity onPress={() => {
              navigate('PublicSignIn')
            }}>
              <Icon name='keyboard-arrow-left' type='MaterialIcons' style={styles.navLeftIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.forgotContent}>
            <View style={styles.forgotContentItem}>
              <Text style={styles.forgotTitle}>{__('Forgot\nPassword')}</Text>
              <Text style={styles.forgotDesc}>{__('Select which contact details should we\nuse to reset your password')}</Text>
            </View>
            <View style={styles.forgotLayout}>
              <View style={styles.formBg}>
                <Icon name='mobile' type='Entypo' style={styles.formIcon} />
                <View>
                  <Text style={styles.formText}>{__('Via SMS')}</Text>
                  <TextInput placeholderTextColor={'rgba(255,255,255,1)'}
                    placeholder='+91 ***** ***89' style={styles.formInput} />
                </View>
              </View>
              <View style={styles.formBg}>
                <Icon name='mail' type='Entypo' style={styles.formIcon} />
                <View>
                  <Text style={styles.formText}>{__('Via Email')}</Text>
                  <TextInput textAlignVertical={'top'} keyboardType={'numeric'} placeholderTextColor={'rgba(255,255,255,1)'}
                    placeholder='************@gmail.com' style={styles.formInput} />
                </View>
              </View>
              <TouchableOpacity style={styles.sendBtn} onPress={() => {
                navigate('PublicPasswordSuccess')
              }}>
                <Text style={styles.sendBtnText}>{__('SEND')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
