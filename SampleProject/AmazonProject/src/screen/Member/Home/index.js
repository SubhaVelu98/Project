import React from 'react'
import { StatusBar, TouchableOpacity, TextInput,TouchableHighlight,ImageBackground, Image, FlatList } from 'react-native'
import { Container, Content, Icon, Text, View,CheckBox } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'
import { SliderBox } from 'react-native-image-slider-box'
import Modal from 'react-native-modalbox'

import { navigate, openDrawer } from '@utility/navigation'
import styles from './styles'
import theme from '@theme/styles'
import { setLocale, __ } from '@utility/translation'
import Header from '@component/Header'
import request from '@utility/request'
import { bind } from '@utility/component'

import Destination from './Destination'
import destinationList from './data/destination'
import Follower from './Follower'
import followerList from './data/follower'
import Following from './Following'
import followingList from './data/following'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'destination',

      destinationList: [],
      fetchingDestinationList: true,
      followerList: [],
      fetchingFollowerList: true,
      followingList: [],
      fetchingFollowingList: true,
    }

    bind(this)

    this.fetchDestinationList = this.fetchDestinationList.bind(this)
    this.fetchFollowerList = this.fetchFollowerList.bind(this)
    this.fetchFollowingList = this.fetchFollowingList.bind(this)
    this.renderDestination = this.renderDestination.bind(this)
    this.renderFollower = this.renderFollower.bind(this)
    this.renderFollowing = this.renderFollowing.bind(this)

  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchDestinationList()
    await this.fetchFollowerList()
    await this.fetchFollowingList()


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
  async fetchFollowerList() {
    await this.promisedSetState({
      fetchingFollowerList: true
    })
    const list = await request(followerList)
    await this.promisedSetState({
      followerList: list,
      fetchingFollowerList: false
    })
  }
  async fetchFollowingList() {
    await this.promisedSetState({
      fetchingFollowingList: true
    })
    const list = await request(followingList)
    await this.promisedSetState({
      followingList: list,
      fetchingFollowingList: false
    })
  }
  renderDestination() {
    return <View style={styles.titleDisplay}>
    <Text style={styles.titleName}>{__('TripDetail')}</Text>
    <Destination
        language={this.state.language}
        list={this.state.destinationList}
        fetching={this.state.fetchingDestinationList}
      />
  </View>
  }
  renderFollower() {
    return <View style={styles.titleDisplay}>
    <Text style={styles.titleName}>{__('Followers')}</Text>
    <View style={styles.searchForm}>
      <TextInput placeholder={__('ie Audrey Tautou, France')} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.searchInput} />
      <TouchableOpacity onPress={() => this.refs.modalSearch.open()}>
        <Icon name='search' type='MaterialIcons' style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
    <Follower
        language={this.state.language}
        list={this.state.followerList}
        fetching={this.state.fetchingFollowerList}
      />
  </View>
  }
  renderFollowing() {
    return <View style={styles.titleDisplay}>
    <Text style={styles.titleName}>{__('Following')}</Text>
    <View style={styles.searchForm}>
      <TextInput placeholder={__('ie Audrey Tautou, France')} placeholderTextColor='rgba(0,0,0,0.2)' style={styles.searchInput} />
      <TouchableOpacity onPress={() => this.refs.modalSearch.open()}>
        <Icon name='search' type='MaterialIcons' style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
    <Following
        language={this.state.language}
        list={this.state.followingList}
        fetching={this.state.fetchingFollowingList}
      />
  </View>
  }

  render() {
    let tabContent
    if (this.state.tabSelected === 'destination') {
      tabContent = this.renderDestination()
    } else if (this.state.tabSelected === 'follower') {
      tabContent = this.renderFollower()
    }  else if (this.state.tabSelected === 'following') {
      tabContent = this.renderFollowing()
    }
    return (
      <Container>
        <StatusBar backgroundColor='rgba(74, 74, 74, 1)' animated barStyle='light-content' />
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1530843768726-74a909f2bdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }} imageStyle={'cover'} style={styles.coverImg}>
        <View style={styles.imgLayout} />
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => {
            navigate('PublicHome')
          }}>
            <Icon name='arrow-back' type='MaterialIcons' style={styles.navLeftIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.memberHeader}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} style={styles.memberImg} />
          <View style={styles.memberDetails}>
            <Text style={styles.memberName}>{__('Catherine Zeta')}</Text>
            <Text style={styles.memberPlace}>{__('New York, USA')}</Text>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followBtnDesc}>{__('FOLLOW')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.memberProfile}>
          <TouchableOpacity style={styles.memberProfileItems} onPress={() => this.setState({ tabSelected: 'destination' })}>
            <Text style={this.state.tabSelected === 'destination' ? styles.memberProfileTag : styles.memberProfileTag}>20</Text>
            <Text style={styles.memberProfileUtility}>{__('Trips')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberProfileItems} onPress={() => this.setState({ tabSelected: 'follower' })}>
            <Text style={this.state.tabSelected === 'Follower' ? styles.memberProfileTag : styles.memberProfileTag}>129k</Text>
            <Text style={styles.memberProfileUtility}>{__('Followers')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberProfileItems} onPress={() => this.setState({ tabSelected: 'following' })}>
            <Text style={this.state.tabSelected === 'Following' ? styles.memberProfileTag : styles.memberProfileTag}>178k</Text>
            <Text style={styles.memberProfileUtility}>{__('Following')}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
        <Content contentContainerStyle={theme.layoutFx}>
        <View>
            {tabContent}
          </View>
        </Content>
        <Modal
        ref={'modalRemove'}
        position={'center'}
        isOpen={this.state.isOpen}
        onClosed={() =>
          this.setState({
            isOpen: false
          })
        }
        isDisabled={this.state.isDisabled}
        style={styles.modalFollow}
      >
        <View style={styles.remove}>
          <Text style={styles.removeDesc}>{__('Remove Follower')}</Text>
          <TouchableOpacity style={styles.closeSortDesc} onPress={() => this.refs.modalRemove.close()}>
            <Icon name='close' type='MaterialIcons' style={styles.closeSortIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.removeLayout}>
          <View style={styles.flwDetails}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80' }} style={styles.flwImg} />
            <Text style={styles.desc}>{__('Tourzio won’t tell @george.clooney that they have been removed from your followers')}</Text>
          </View>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnDesc}>{__('Cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnDesc}>{__('Remove')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </Container>
    )
  }
}
