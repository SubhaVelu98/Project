import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Content, Icon, Text, View, Accordion } from 'native-base'
import Modal from 'react-native-modalbox'
import CheckBox from 'react-native-check-box'


import styles from './styles'
import Header from '@component/Header'
import Footer from '@component/Footer'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'key0',
      checked: '',
    }
    this.state = {
      gender: null
    }

    this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
    this.renderAccordionContent = this.renderAccordionContent.bind(this)
    this.renderAccordionContentPassword = this.renderAccordionContentPassword.bind(this)
    this.renderAccordionContentNotification = this.renderAccordionContentNotification.bind(this)
  }
  renderAccordionHeader(item, expanded) {
    return (
      <View style={styles.accordionTab}>
        <Text style={styles.accordionTabText}>
          {' '}{item.title}
        </Text>
        {expanded
          ? <Icon style={styles.accordionTabIcon} name='keyboard-arrow-up' type='MaterialIcons' />
          : <Icon style={styles.accordionTabIcon} name='keyboard-arrow-down' type='MaterialIcons' />}
      </View>
    )
  }
  renderAccordionContent(item) {
    var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1))
    return <View style={styles.accordionContent}>
      {this[fn]()}
    </View>
  }
  renderAccordionContentPassword() {
    return <View>
      <View style={styles.startRow}>
        <View style={styles.editRowDetails}>
          <Text style={styles.profileDesc}>{__('Password')}</Text>
          <Text style={styles.superScript}>*</Text>
        </View>
        <TextInput placeholder='' style={styles.profileInputDesc} />
      </View>
      <View style={styles.startRow}>
        <View style={styles.editRowDetails}>
          <Text style={styles.profileDesc}>{__('Change Password')}</Text>
          <Text style={styles.superScript}>*</Text>
        </View>
        <TextInput placeholder='' style={styles.profileInputDesc} />
      </View>
      <TouchableOpacity style={styles.doneBtn} onPress={() => navigate('PublicLogIn')}>
        <Text style={styles.doneBtnDesc}>{__('Change Password')}</Text>
      </TouchableOpacity>
    </View>
  }
  renderAccordionContentNotification() {
    return <View>
      <TouchableOpacity style={styles.trendSelect}>
        <Text style={styles.trendDesc}>{__('Italy Angel Homes Hotel- 5 nights (40% 0ff)')}</Text>
        <CheckBox
          checkBoxColor={'rgba(17, 183, 25, 1)'}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked
            })
          }}
          isChecked={this.state.isChecked}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.trendSelect}>
        <Text style={styles.trendDesc}>{__('Floridays Resort Orlando - 7 nights(25% off)')}</Text>
        <CheckBox
          checkBoxColor={'rgba(17, 183, 25, 1)'}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked
            })
          }}
          isChecked={this.state.isChecked}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.trendSelect, styles.trendBorderNone]}>
        <Text style={styles.trendDesc}>{__('Cruising Mexico (upto $1,000 less for 2 person)')}</Text>
        <CheckBox
          checkBoxColor={'rgba(17, 183, 25, 1)'}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked
            })
          }}
          isChecked={this.state.isChecked}
        />
      </TouchableOpacity>
    </View>
  }

  render() {
    return (
      <Container style={theme.layoutFx}>
        <StatusBar backgroundColor='rgba(74, 74, 74, 1)' animated barStyle='light-content' />
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1530843768726-74a909f2bdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }} imageStyle={'cover'} style={styles.coverImg}>
          <View style={styles.imgLayout} />
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => {
              navigate('PublicList')
            }}>
              <Icon name='arrow-back' type='MaterialIcons' style={styles.navLeftIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.memberHeader}>
            <View>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} style={styles.memberImg} />
              <View style={styles.iconLayout}>
                <Icon name='edit' type='MaterialIcons' style={styles.editIcon} />
              </View>
            </View>
            <View style={styles.memberDetails}>
              <Text style={styles.memberName}>{__('Catherine Zeta')}</Text>
              <Text style={styles.memberPlace}>{__('New York, USA')}</Text>
              <TouchableOpacity style={styles.followBtn} onPress={() => {
              navigate('MemberEditProfile')
            }}>
                <Text style={styles.followBtnDesc}>{__('EDIT PROFILE')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <Content contentContainerStyle={styles.layoutDefault}>
          <View style={styles.titleDisplay}>
            <Text style={styles.title}>{__('SETTINGS')}</Text>
            <View style={styles.section}>

              <View style={styles.filterBy}>
                <Accordion
                  style={styles.accordion}
                  dataArray={[
                    {
                      type: 'password',
                      title: 'Change Password'
                    },
                    {
                      type: 'notification',
                      title: 'Notification'
                    }
                  ]}
                  expanded={1}
                  renderHeader={this.renderAccordionHeader}
                  renderContent={this.renderAccordionContent}
                />
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
