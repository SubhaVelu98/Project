import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList, ImageBackground } from 'react-native'
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

import Reach from './Reach'
import reachList from './data/reach'
import Attraction from './Attraction'
import attractionList from './data/attraction'
import Destination from './Destination'
import destinationList from './data/destination'


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'basic',

      attractionList: [],
      fetchingAttractionList: true,
      reachList: [],
      fetchingReachList: true,
      destinationList: [],
      fetchingDestinationList: true,
    }

    bind(this)
    this.fetchReachList = this.fetchReachList.bind(this)
    this.fetchAttractionList = this.fetchAttractionList.bind(this)
    this.fetchDestinationList = this.fetchDestinationList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchReachList()
    await this.fetchAttractionList()
    await this.fetchDestinationList()

  }
  async fetchReachList() {
    await this.promisedSetState({
      fetchingReachList: true
    })
    const list = await request(reachList)
    await this.promisedSetState({
      reachList: list,
      fetchingReachList: false
    })
  }
  async fetchAttractionList() {
    await this.promisedSetState({
      fetchingAttractionList: true
    })
    const list = await request(attractionList)
    await this.promisedSetState({
      attractionList: list,
      fetchingAttractionList: false
    })
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
        <StatusBar backgroundColor='rgba(74, 74, 74, 1)' animated barStyle='light-content' />
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }} imageStyle={'cover'} style={styles.coverImg}>
          <View style={styles.imgLayout} />
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => {
              navigate('PublicList')
            }}>
              <Icon name='keyboard-arrow-left' type='MaterialIcons' style={styles.navLeftIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigate('PublicFavorites')
            }}>
              <Icon name='favorite' type='MaterialIcons' style={styles.navRightIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.destinationHeader}>
            <Text style={styles.destinationName}>{__('Greece')}</Text>
            <Text style={styles.destinationTag}>{__('8988+ Bookings - 188 Agents')}</Text>
          </View>
          <View style={styles.destinationPlan}>
            <View style={styles.destinationItems}>
              <Text style={styles.destinationTag}>{__('Best time to visit')}</Text>
              <Text style={styles.destinationUtility}>{__('Oct - Mar')}</Text>
            </View>
            <View style={styles.destinationItems}>
              <Text style={styles.destinationTag}>{__('Starting budget')}</Text>
              <Text style={styles.destinationUtility}>{__('$ 2499 /person')}</Text>
            </View>
          </View>
        </ImageBackground>
        <Content contentContainerStyle={theme.layoutFx}>
          <Attraction
            language={this.state.language}
            list={this.state.attractionList}
            fetching={this.state.fetchingAttractionList}
          />
          <Reach
            language={this.state.language}
            list={this.state.reachList}
            fetching={this.state.fetchingReachList}
          />
          <Destination
            language={this.state.language}
            list={this.state.destinationList}
            fetching={this.state.fetchingDestinationList}
          />
          <View style={styles.overView}>
            <TouchableOpacity style={styles.packageBtn}>
              <Text style={styles.packageBtnDesc}>{__('View all 288 packages')}</Text>
            </TouchableOpacity>
            <View style={styles.selectPackage}>
              <Text style={styles.suitPackage}>{__('Did not find a suitable package?')}</Text>
              <Text style={styles.suitPackageDesc}>{__('We can help you create a package as per your requirement')}</Text>
              <TouchableOpacity style={styles.requestBtn}>
                <Text style={styles.packageBtnDesc}>{__('Request customized packages')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
