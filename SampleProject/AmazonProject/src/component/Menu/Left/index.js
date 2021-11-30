import React, { Component } from 'react'
import { I18nManager, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Text, Icon, View } from 'native-base'

import * as MENU from './Menu'

import styles from './styles'
import theme from '@theme/styles'
import { closeDrawer, navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    }
    this.renderMenuList = this.renderMenuList.bind(this)
  }

  renderMenuList (menus) {
    return menus.map((menu) => {
      return <TouchableOpacity style={styles.profileItem} underlayColor='transparent' onPress={() => {
        closeDrawer()
        navigate(menu.route)
      }}>
        <View style={styles.navBtn}>
          <View style={styles.navBtnLeft}>
            <Icon name={menu.iconName} type={menu.iconType} style={styles.navBtnIcon} />
          </View>
          <Text style={styles.navBtnText}>{menu.name}</Text>
        </View>
      </TouchableOpacity>
    })
  }

  render() {
    return (
      <View style={styles.nav}>
        <View style={styles.navProfile}>
          <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1530843768726-74a909f2bdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }} style={styles.navImg} >
            <View style={styles.navRow}>
              <Image style={styles.navAvatar} source={require('@asset/images/avatar.png')} />
              <Text style={styles.navName}>{__('David Beckham')}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.navMenu}>
          <ScrollView>
            {this.renderMenuList(MENU.Data1)}
            <Text style={styles.navHeader}>{__('Member')}</Text>
            {this.renderMenuList(MENU.Data2)}
          </ScrollView>
        </View>
      </View>

    )
  }
}

export default MenuLeft
