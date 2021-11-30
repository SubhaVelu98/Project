import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'
import { SliderBox } from 'react-native-image-slider-box'

import { navigate, openDrawer } from '@utility/navigation'
import styles from './styles'
import theme from '@theme/styles'
import { setLocale, __ } from '@utility/translation'
import Modal from 'react-native-modalbox'

import request from '@utility/request'
import { bind } from '@utility/component'
import CheckBox from 'react-native-check-box'


import Dates from './Dates'
import datesList from './data/dates'
import Review from './Review'
import reviewList from './data/review'
import Destination from './Destination'
import destinationList from './data/destination'
import ModalBooking from './Dates/ModalBooking'


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'basic',
      openModalBooking: false,

    
      datesList: [],
      fetchingDatesList: true,
      review: [],
      fetchingReviewList: true,
      destination: [],
      fetchDestinationList: true,
    }

    bind(this)

    this.fetchReviewList = this.fetchReviewList.bind(this)
    this.fetchDatesList = this.fetchDatesList.bind(this)
    this.fetchDestinationList = this.fetchDestinationList.bind(this)
    this.openModalBooking = this.openModalBooking.bind(this)

  }
  openModalBooking() {
    this.refModalBooking.open()
  }
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchDatesList()
    await this.fetchReviewList()
    await this.fetchDestinationList()
   
  }
  async fetchDatesList() {
    await this.promisedSetState({
      fetchingDatesList: true
    })
    const list = await request(datesList)
    await this.promisedSetState({
      datesList: list,
      fetchingDatesList: false
    })
  }
  async fetchReviewList() {
    await this.promisedSetState({
      fetchingReviewList: true
    })
    const list = await request(reviewList)
    await this.promisedSetState({
      reviewList: list,
      fetchingReviewList: false
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
        <StatusBar backgroundColor="rgba(74, 74, 74, 1)" animated barStyle="light-content" />
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1523152694284-c6cb4816d021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} imageStyle={'cover'} style={styles.coverImg}>
          <View style={styles.imgLayout} />
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => {
              navigate('PublicList')
            }}>
              <Icon name='arrow-back' type="MaterialIcons" style={styles.navLeftIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Content contentContainerStyle={theme.layoutFx}>
          <View style={styles.tripDetailLayout}>
            <View>
              <Text style={styles.tripDetailPlace}>{__('Dolomoties center - based Cycling')}</Text>
              <Text style={styles.from}>{__('From')}</Text>
              <View style={styles.tripDetailSpeciality}>
                <View style={styles.tripDetailRow}>
                  <Text style={styles.tripDetailPrice}>$2499</Text>
                  <Text style={styles.tripDetailDays}>{__('for 8 days')}</Text>
                </View>
                <View style={styles.tripDetailAmenities}>
                  <Image source={require('@asset/images/airplane.png')} style={styles.alignAmenity} />
                  <Image source={require('@asset/images/cab.png')} style={styles.alignAmenity} />
                  <Image source={require('@asset/images/binoculars.png')} style={styles.alignAmenity} />
                  <Text style={styles.alignAmenityDesc}>+4</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sectionGrey}>
            <Text style={styles.titleColorName}>{__('Tour')}</Text>
            <Text style={styles.titleColorDesc}>{__('Overview')}</Text>
            <View>
              <Text style={styles.description}>Praesent in commodo felis, sit amet ornare dui. Nulla ultrices erat eget semper volutpat. Nulla at arcu finibus, sodales sapien at, condimentum nibh. Cras nec purus tincidunt, placerat enim eu, mollis sapien.sit amet ornare dui.  </Text>
            </View>
            <TouchableOpacity style={styles.readmoreBtn}>
              <Text style={styles.readmoreDesc}>{__('read more')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionWhite}>
            <Text style={styles.titleColorName}>{__('Essential')}</Text>
            <Text style={styles.titleColorDesc}>{__('Info')}</Text>
            <View style={styles.essentialRow}>
              <Text style={styles.essentialHeading}>{__('Starts')}</Text>
              <Text style={styles.essentialDesc}>{__('Starts Dobbiaco')}</Text>
            </View>
            <View style={styles.essentialRow}>
              <Text style={styles.essentialHeading}>{__('Ends')}</Text>
              <Text style={styles.essentialDesc}>{__('End Dobbiaco')}</Text>
            </View>
            <View style={styles.essentialRow}>
              <Text style={styles.essentialHeading}>{__('Ages')}</Text>
              <Text style={styles.essentialDesc}>{__('Min 16')}</Text>
            </View>
            <View style={styles.essentialRow}>
              <Text style={styles.essentialHeading}>{__('Countries Visited')}</Text>
              <Text style={styles.essentialDesc}>{__('Italy')} </Text>
            </View>
            <View style={styles.essentialRow}>
              <Text style={styles.essentialHeading}>{__('Theme')}</Text>
              <Text style={styles.essentialDesc}>{__('Cycling')}</Text>
            </View>
            <View style={styles.essentialActivityRow}>
              <Text style={styles.essentialHeading}>{__('Activity Level')}</Text>
              <View style={styles.iconRow}>
                <Icon name='radio-button-checked' type='MaterialIcons' style={styles.radioIcon} />
                <Icon name='radio-button-checked' type='MaterialIcons' style={styles.radioIcon} />
                <Icon name='radio-button-unchecked' type='MaterialIcons' style={styles.radioIcon} />
                <Icon name='radio-button-unchecked' type='MaterialIcons' style={styles.radioIcon} />
              </View>
            </View>
          </View>
          <View style={styles.sectionGrey}>
            <Text style={styles.titleColorName}>{__('WHAT')}</Text>
            <Text style={styles.titleColorDesc}>{__('included')}</Text>
            <View style={styles.includeRow}>
              <Icon name='md-checkmark-circle-outline' type='Ionicons' style={styles.checkIcon} />
              <Text style={styles.includeDesc}>{__('Breakfast')}</Text>
            </View>
            <View style={styles.includeRow}>
              <Icon name='md-checkmark-circle-outline' type='Ionicons' style={styles.checkIcon} />
              <Text style={styles.includeDesc}>{__('Private car Transfer')}</Text>
            </View>
            <View style={styles.includeRowLost}>
              <Icon name='md-checkmark-circle-outline' type='Ionicons' style={styles.checkIcon} />
              <Text style={styles.includeDesc}>{__('SIC for Tours')}</Text>
            </View>
            <TouchableOpacity style={styles.readmoreBtn}>
              <Text style={styles.readmoreDesc}>{__('read more')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionWhite}>
            <Text style={styles.titleColorName}>{__('WHAT')}</Text>
            <Text style={styles.titleColorDesc}>{__('excluded')}</Text>
            <View style={styles.includeRow}>
              <Icon name='md-checkmark-circle-outline' type='Ionicons' style={styles.checkIcon} />
              <Text style={styles.includeDesc}>{__('Flights')}</Text>
            </View>
            <View style={styles.includeRow}>
              <Icon name='md-checkmark-circle-outline' type='Ionicons' style={styles.checkIcon} />
              <Text style={styles.includeDesc}>{__('Anything not mentioned in the inclusions')}</Text>
            </View>
            <View style={styles.includeRowLost}>
              <Icon name='md-checkmark-circle-outline' type='Ionicons' style={styles.checkIcon} />
              <Text style={styles.includeDesc}>{__('Travel Insurance')}</Text>
            </View>
          </View>
          <View style={styles.sectionGrey}>
            <Text style={styles.titleColorName}>{__('Itinerary and')}</Text>
            <Text style={styles.titleColorDesc}>{__('notes')}</Text>
            <View style={styles.itineraryLayout}>
              <TouchableOpacity style={styles.itineraryRow} onPress={() => this.refs.modalDays.open()}>
                <Text style={styles.itineraryDesc}>{__('DAY 1 - Start Dobbiaco')}</Text>
                <Icon name='chevron-right' type='MaterialIcons' style={styles.checkIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.itineraryRow} onPress={() => this.refs.modalDays.open()}>
                <Text style={styles.itineraryDesc}>{__('DAY 2 - Transfer to Saxten Valley')}</Text>
                <Icon name='chevron-right' type='MaterialIcons' style={styles.checkIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.itineraryRow} onPress={() => this.refs.modalDays.open()}>
                <Text style={styles.itineraryDesc}>{__('DAY 3 - Riding along the Rienz River')}</Text>
                <Icon name='chevron-right' type='MaterialIcons' style={styles.checkIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.itineraryRow} onPress={() => this.refs.modalDays.open()}>
                <Text style={styles.itineraryDesc}>{__('DAY 4 - Transfer to Saxten Valley')}</Text>
                <Icon name='chevron-right' type='MaterialIcons' style={styles.checkIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.itineraryRow} onPress={() => this.refs.modalDays.open()}>
                <Text style={styles.itineraryDesc}>{__('DAY 5 - Riding along the Rienz River')}</Text>
                <Icon name='chevron-right' type='MaterialIcons' style={styles.checkIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <Dates
            language={this.state.language}
            list={this.state.datesList}
            fetching={this.state.fetchingDatesList}
            openModalBooking={this.openModalBooking}
          />
           <Review
            language={this.state.language}
            list={this.state.reviewList}
            fetching={this.state.fetchingReviewList}
          />
          <Destination
            language={this.state.language}
            list={this.state.destinationList}
            fetching={this.state.fetchingDestinationList}
          />
        </Content>
        <Modal
          ref={'modalDays'}
          position={'center'}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })
          }
          isDisabled={this.state.isDisabled}
          style={styles.modalDays}
        >
          <View style={styles.describe}>
            <TouchableOpacity style={styles.closeDesc} onPress={() => this.refs.modalDays.close()}>
              <Icon name='close' type="MaterialIcons" style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalLayout}>
            <View style={styles.daysDetail}>
              <Text style={styles.dayDesc}>{__('Day 2')}</Text>
              <Text style={styles.place}>{__('Kayaking & Hiking in Bellagio / Lake Como')}</Text>
            </View>
            <View>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80' }} style={styles.modalImg} />
              <Text style={styles.tourDesc}>Duis posuere sagittis arcu, non pulvinar augue aliquet ut. Sed accumsan dui in arcu aliquet finibus. Vestibulum vestibulum tellus diam. Suspendisse condimentum laoreet egestas.
                             Vivamus ullamcorper odio vitae justo malesuada hendrerit.</Text>
              <Text style={styles.tourDescript}>Duis posuere sagittis arcu, non pulvinar augue aliquet ut.Vivamus ullamcorper odio vitae justo malesuada hendrerit. Maecenas ac risus auctor,</Text>
            </View>
            <View style={styles.dayBtns}>
              <TouchableOpacity style={styles.dayBtn}>
                <Text style={styles.dayBtnDesc}>{__('Day 1')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dayBtn}>
                <Text style={styles.dayBtnDesc}>{__('Day 3')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ModalBooking
          ref={(c) => { this.refModalBooking = c }}
        />
      </Container>
    )
  }
}
