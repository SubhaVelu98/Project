import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList,ScrollView } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'
import { SliderBox } from 'react-native-image-slider-box'

import { navigate, openDrawer } from '@utility/navigation'
import styles from './styles'
import theme from '@theme/styles'
import { setLocale, __ } from '@utility/translation'
import Modal from 'react-native-modalbox'
import Footer from '@component/Footer'
import request from '@utility/request'
import { bind } from '@utility/component'
import CheckBox from 'react-native-check-box'

import Limit from './Limit'
import limitList from './data/limit'
import Destination from './Destination'
import destinationList from './data/destination'
import Budget from './Budget'
import budgetList from './data/budget'
import Activity from './Activity'
import activityList from './data/activity'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      tabSelected: 'basic',

      limit: [],
      fetchingLimitList: true,
      destinationList: [],
      fetchingDestinationList: true,
      budget: [],
      fetchingBudgetList: true,
      activity: [],
      fetchingActivityList: true,
    }

    bind(this)

    this.fetchLimitList = this.fetchLimitList.bind(this)
    this.fetchDestinationList = this.fetchDestinationList.bind(this)
    this.fetchBudgetList = this.fetchBudgetList.bind(this)
    this.fetchActivityList = this.fetchActivityList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchLimitList()
    await this.fetchDestinationList()
    await this.fetchBudgetList()
    await this.fetchActivityList()
  }

  async fetchLimitList() {
    await this.promisedSetState({
      fetchLimitList: true
    })
    const list = await request(limitList)
    await this.promisedSetState({
      limitList: list,
      fetchingLimitList: false
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
  async fetchBudgetList() {
    await this.promisedSetState({
      fetchBudgetList: true
    })
    const list = await request(budgetList)
    await this.promisedSetState({
      budgetList: list,
      fetchingBudgetList: false
    })
  }
  async fetchActivityList() {
    await this.promisedSetState({
      fetchActivityList: true
    })
    const list = await request(activityList)
    await this.promisedSetState({
      activityList: list,
      fetchingActivityList: false
    })
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor='rgba(74, 74, 74, 1)' animated barStyle='light-content' />
        <View style={theme.nav}>
          <View style={theme.navBarItems}>
            <TouchableOpacity style={theme.navBarLeft} onPress={() => {
              navigate('PublicDetail')
            }}>
              <Icon name='arrow-back' type='MaterialIcons' style={theme.navBarIcon} />
            </TouchableOpacity>
            <View style={theme.navBarMiddleItems}>
              <Text style={theme.navMiddleDesc}>{__('Italy')}</Text>
              <Text style={theme.navMiddleSubDesc}>{__('122 Tour Packages')}</Text>
            </View>
            <View style={theme.navBarRight} onPress={() => {
              navigate('PublicFavorites')
            }}>
              <Icon name='favorite' type='MaterialIcons' style={theme.navBarIcon} />
            </View>
          </View>
        </View>
        <Content contentContainerStyle={theme.layoutFx}>
          <Image source={require('@asset/images/HeaderBg.png')} style={styles.bgImgMain} />
          <View style={styles.searchDisplay}>
            <View style={styles.searchForm}>
              <TextInput placeholder={__('Themes & Categories')}placeholderTextColor='rgba(0,0,0,0.2)' style={styles.searchInput} />
              <TouchableOpacity onPress={() => {
                navigate('PublicLimitDetail')
              }}>
                <Icon name='search' type='MaterialIcons' style={styles.searchIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <Destination
            language={this.state.language}
            list={this.state.destinationList}
            fetching={this.state.fetchingDestinationList}
          />
        </Content>
        <Modal
          ref={'modalFilter'}
          position={'bottom'}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })
          }
          isDisabled={this.state.isDisabled}
          style={styles.modalFilter}
          swipeToClose={false}
        >
          <ScrollView>
            <View style={styles.describe}>
              <Text style={styles.describeDesc}>{__('Filters')}</Text>
              <TouchableOpacity style={styles.closeDesc} onPress={() => this.refs.modalFilter.close()}>
                <Icon name='close' type='MaterialIcons' style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <Budget
              language={this.state.language}
              list={this.state.budgetList}
              fetching={this.state.fetchingBudgetList}
            />
            <Limit
              language={this.state.language}
              list={this.state.limitList}
              fetching={this.state.fetchingLimitList}
            />
            <Activity
              language={this.state.language}
              list={this.state.activityList}
              fetching={this.state.fetchingActivityList}
            />
            <TouchableOpacity style={styles.applyBtn} onPress={() => {
              navigate('PublicLimitDetail')
            }}>
              <Text style={styles.applyBtnDesc}>{'Apply Filter'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>
        <Modal
          ref={'modalSort'}
          position={'center'}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })
          }
          isDisabled={this.state.isDisabled}
          style={styles.modalSort}
        >
          <View style={styles.sort}>
            <Text style={styles.describeSortDesc}>{__('Sort By')}</Text>
            <TouchableOpacity style={styles.closeSortDesc} onPress={() => this.refs.modalSort.close()}>
              <Icon name='close' type='MaterialIcons' style={styles.closeSortIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sortRow} onPress={() => this.refs.modalFilter.open()}>
            <Text style={styles.sortDesc}>{__('No of Limits')}</Text>
            <CheckBox color='rgba(17, 183, 25, 1)' checked={false} style={styles.checkSortIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortRow} onPress={() => this.refs.modalFilter.open()}>
            <Text style={styles.sortDesc}>{__('Price Low to High')}</Text>
            <CheckBox color='rgba(17, 183, 25, 1)' checked={false} style={styles.checkSortIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortRow} onPress={() => this.refs.modalFilter.open()}>
            <Text style={styles.sortDesc}>{__('Price High to Low')}</Text>
            <CheckBox color='rgba(17, 183, 25, 1)' checked={false} style={styles.checkSortIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortColorRow} onPress={() => this.refs.modalFilter.open()}>
            <Text style={styles.sortDesc}>{__('Relavance')}</Text>
            <CheckBox color='rgba(17, 183, 25, 1)' checked style={styles.checkSortIcon} />
          </TouchableOpacity>
        </Modal>
        <View style={theme.footerBg}>
          <View style={theme.fTab}>
            <TouchableOpacity style={theme.fIconsRow} onPress={() => this.refs.modalSort.open()}>
              <Icon name='sort-amount-desc' type='FontAwesome' style={theme.iconFtabActive} />
              <Text style={theme.textFtabActive}>{__('Sort By')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={theme.fIconsRow} onPress={() => this.refs.modalFilter.open()}>
              <Icon name='sliders' type='FontAwesome' style={theme.iconFtabActive} />
              <Text style={theme.textFtabActive}>{__('Filters')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }
}
