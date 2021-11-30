import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'
import { SliderBox } from 'react-native-image-slider-box'

import { navigate, openDrawer } from '@utility/navigation'
import styles from './styles'
import theme from '@theme/styles'
import { setLocale, __ } from '@utility/translation'
import Header from '@component/Header'
import request from '@utility/request'
import { bind } from '@utility/component'

import Destination from './Destination'
import destinationList from './data/destination'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'basic',

      destinationList: [],
      fetchingDestinationList: true,
    }

    bind(this)

    this.fetchDestinationList = this.fetchDestinationList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchDestinationList()
  }
  async fetchDestinationList() {
    await this.promisedSetState({
      fetchingDestinationList: true
    })
    const list = await request(destinationList)
    await this.promisedSetState({
      destinationList: list,
      fetchingDestinationList: false
    })
  }
 
  render() {
    return (
      <Container>
        <Header statusBarType='dark' navLeftType='back' navMiddleType='medium' title={__('Destinations')} />
        <Content contentContainerStyle={theme.layoutFx}>
          <Image source={require('@asset/images/HeaderBg.png')} style={styles.bgImgMain} />
          <View style={styles.searchForm} onPress={() => {
            navigate('PublicTripCollections')
          }}>
            <TextInput placeholder={__('Find your Destinations')} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.formInput} />
            <TouchableOpacity >
              <Icon name='search' type='MaterialIcons' style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <Destination
            language={this.state.language}
            list={this.state.destinationList}
            fetching={this.state.fetchingDestinationList}
          />
        </Content>
      </Container>
    )
  }
}
