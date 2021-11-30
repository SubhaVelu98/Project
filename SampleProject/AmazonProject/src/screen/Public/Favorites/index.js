import React from 'react'
import { StatusBar, TouchableOpacity, TextInput,TouchableHighlight, Image, FlatList } from 'react-native'
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
import Tour from './Tour'
import tourList from './data/tour'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'destination',

      destinationList: [],
      fetchingDestinationList: true,
      tourList: [],
      fetchingTourList: true,
    }

    bind(this)

    this.fetchDestinationList = this.fetchDestinationList.bind(this)
    this.fetchTourList = this.fetchTourList.bind(this)
    this.renderDestination = this.renderDestination.bind(this)
    this.renderTour = this.renderTour.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchDestinationList()
    await this.fetchTourList()

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
  async fetchTourList() {
    await this.promisedSetState({
      fetchingTourList: true
    })
    const list = await request(tourList)
    await this.promisedSetState({
      tourList: list,
      fetchingTourList: false
    })
  }
  renderDestination() {
    return <View style={styles.titleDisplay}>
      <Destination
        language={this.state.language}
        list={this.state.destinationList}
        fetching={this.state.fetchingDestinationList}
      />
     
    </View>
  }
  renderTour() {
    return <View style={styles.titleDisplay}>
      <Tour
        language={this.state.language}
        list={this.state.tourList}
        fetching={this.state.fetchingTourList}
      />
    </View>
  }

  render() {
    let tabContent
    if (this.state.tabSelected === 'destination') {
      tabContent = this.renderDestination()
    } else if (this.state.tabSelected === 'tour') {
      tabContent = this.renderTour()
    }
    return (
      <Container>
        <Header statusBarType='dark' navLeftType='back' navMiddleType='medium' title={__('Favourites')} />
        <Content contentContainerStyle={theme.layoutFx}>
          <Image source={require('@asset/images/HeaderBg.png')} style={styles.bgImgMain} />
          <View style={styles.searchDisplay}>
            <View style={styles.favoriteLayout}>
              <TouchableHighlight style={styles.destinationBtn} onPress={() => this.setState({ tabSelected: 'destination' })}>
                <Text style={this.state.tabSelected === 'destination' ? styles.destinationBtnDesc : styles.destinationBtnDarkDesc}>{__('DESTINATIONS')}</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.destinationBtn} onPress={() => this.setState({ tabSelected: 'tour' })}>
                <Text style={this.state.tabSelected === 'tour' ? styles.tourBtnDesc : styles.tourBtnDarkDesc}>{__('TOURS')}</Text>
              </TouchableHighlight>
            </View>
            {tabContent}
          </View>
        </Content>
      </Container>
    )
  }
}
