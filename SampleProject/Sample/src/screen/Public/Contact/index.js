import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Content, Icon, Text, View } from 'native-base'
import RNPickerSelect from 'react-native-picker-select'

import styles from './styles'
import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { bind } from '@utility/component'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'country',
      label: '',
      selected: '',
    }
  }
  onValueChange() {
    this.setState({
      selected: ''
    })
  }

  render() {
    return (
      <Container style={theme.layoutFx}>
        <Header navLeftType='back' statusBarType='dark' navMiddleType='medium' title='' />
        <Content contentContainerStyle={styles.layoutDefault}>
          <Image source={require('@asset/images/HeaderBg.png')} style={styles.bgImgMain} />
          <View style={styles.titleDisplay}>
            <View style={styles.titleLayout}>
              <Text style={styles.title}>{__('CONTACT')}</Text>
              <Text style={styles.desc}>{__('Get in Touch with us')}</Text>
            </View>
            <View style={styles.contactLayout}>
              <View>
                <TextInput placeholder={__('NAME')}placeholderTextColor='rgba(0,0,0,0.2)' style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholder={__('EMAIL ADDRESS')} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholder={__('MOBILE NUMBER')} keyboardType={'numeric'} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.formInput} />
              </View>
              <View>
                <TextInput placeholder={__('MESSAGE')} textAlignVertical={'top'}
                  multiline
                  numberOfLines={6} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.formInput} />
              </View>
              <View>
                <TouchableOpacity transparent style={styles.cBtn}>
                  <Text style={styles.cBtnText}>{__('SEND')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contactLayout}>
              <View style={styles.infoItem}>
                <Icon name='location' type='Octicons' style={styles.infoIcon} />
                <View>
                  <Text style={styles.infoHeader}>{__('Address')}</Text>
                  <Text style={styles.infoDesc}>{__('47,East street')}</Text>
                  <Text style={styles.infoDesc}>{__('Italy')}</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Icon name='mobile-alt' type='FontAwesome5' style={styles.infoIcon} />
                <View>
                  <Text style={styles.infoHeader}>{__('phone')}</Text>
                  <Text style={styles.infoDesc}>+91 987 654 3210</Text>
                </View>
              </View>
              <View style={[styles.infoItem, styles.infoItemLast]}>
                <Icon name='email' type='MaterialIcons' style={styles.infoIcon} />
                <View>
                  <Text style={styles.infoHeader}>{__('Email')}</Text>
                  <Text style={styles.infoDesc}>{__('info@tourzio.com')}</Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
