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
import Footer from '@component/Footer'
import request from '@utility/request'
import { bind } from '@utility/component'

import Trip from './Trip'
import tripList from './data/trip'
import Destination from './Destination'
import destinationList from './data/destination'
import Offers from './Offers'
import offersList from './data/offers'
import Adventure from './Adventure'
import adventureList from './data/adventure'
import Nature from './Nature'
import natureList from './data/nature'
import Wild from './Wild'
import wildList from './data/wild'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'basic',

      trip: [],
      fetchingTripList: true,
      destinationList: [],
      fetchingDestinationList: true,
      offers: [],
      fetchingOffersList: true,
      adventure: [],
      fetchingAdventureList: true,
      natureList: [],
      fetchingNatureList: true,
      wildList: [],
      fetchingWildList: true,
    }

    bind(this)

    this.fetchTripList = this.fetchTripList.bind(this)
    this.fetchDestinationList = this.fetchDestinationList.bind(this)
    this.fetchOffersList = this.fetchOffersList.bind(this)
    this.fetchAdventureList = this.fetchAdventureList.bind(this)
    this.fetchNatureList = this.fetchNatureList.bind(this)
    this.fetchWildList = this.fetchWildList.bind(this)

  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchTripList()
    await this.fetchDestinationList()
    await this.fetchOffersList()
    await this.fetchAdventureList()
    await this.fetchNatureList()
    await this.fetchWildList()
  }

  async fetchTripList() {
    await this.promisedSetState({
      fetchTripList: true
    })
    const list = await request(tripList)
    await this.promisedSetState({
      tripList: list,
      fetchingTripList: false
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
  async fetchOffersList() {
    await this.promisedSetState({
      fetchOffersList: true
    })
    const list = await request(offersList)
    await this.promisedSetState({
      offersList: list,
      fetchingOffersList: false
    })
  }
  async fetchAdventureList() {
    await this.promisedSetState({
      fetchAdventureList: true
    })
    const list = await request(adventureList)
    await this.promisedSetState({
      adventureList: list,
      fetchingAdventureList: false
    })
  }
  async fetchNatureList() {
    await this.promisedSetState({
      fetchingNatureList: true
    })
    const list = await request(natureList)
    await this.promisedSetState({
      natureList: list,
      fetchingNatureList: false
    })
  }

  async fetchWildList() {
    await this.promisedSetState({
      fetchingWildList: true
    })
    const list = await request(wildList)
    await this.promisedSetState({
      wildList: list,
      fetchingWildList: false
    })
  }

  render() {
    return (
      <Container>
        <Header statusBarType='dark' navLeftType='menu' navMiddleType='medium' title={__('Tourzio')} />
        <Content contentContainerStyle={theme.layoutFx}>
          <Image source={require('@asset/images/HeaderBg.png')} style={styles.bgImgMain} />
          <View style={styles.searchForm} onPress={() => {
            navigate('PublicTripCollections')
          }}>
            <TextInput placeholder={__('Destinations,Themes & Categories')} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.formInput} />
            <TouchableOpacity >
              <Icon name='search' type='MaterialIcons' style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <Trip
            language={this.state.language}
            list={this.state.tripList}
            fetching={this.state.fetchingTripList}
          />
          <Destination
            language={this.state.language}
            list={this.state.destinationList}
            fetching={this.state.fetchingDestinationList}
          />
          <Offers
            language={this.state.language}
            list={this.state.offersList}
            fetching={this.state.fetchingOffersList}
          />
          <Adventure
            language={this.state.language}
            list={this.state.adventureList}
            fetching={this.state.fetchingAdventureList}
          />
          <Nature
            language={this.state.language}
            list={this.state.natureList}
            fetching={this.state.fetchingNatureList}
          />
          <Wild
            language={this.state.language}
            list={this.state.wildList}
            fetching={this.state.fetchingWildList}
          />
        </Content>
        <Footer currentScreen='PublicHome' />
      </Container>
    )
  }
}
