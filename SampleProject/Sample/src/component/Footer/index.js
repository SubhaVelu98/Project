import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon, View, Badge } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import NavigationService from '@utility/navigation'
import { __ } from '@utility/translation'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'

export default class extends React.Component {
  render() {
    return (
      <View style={theme.fItems}>
      <TouchableOpacity style={theme.fBtn} onPress={() => { navigate('PublicHome') }}>
        <Icon name='home' type='FontAwesome' style={this.props.currentScreen === 'PublicHome' ? theme.fBtnIconActive : theme.fBtnIcon} />
        <Text style={this.props.currentScreen === 'PublicHome' ? theme.fBtnTextActive : theme.fBtnText}>{__('Home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme.fBtn} onPress={() => { navigate('PublicTripCollections') }}>
        <Icon name='star' type='FontAwesome' style={this.props.currentScreen === 'PublicTripCollections' ? theme.fBtnIconActive : theme.fBtnIcon} />
        <Text style={this.props.currentScreen === 'PublicTripCollections' ? theme.fBtnTextActive : theme.fBtnText}>{__('Trip')}</Text>
      </TouchableOpacity>

      <View style={theme.botPopBtn}>
        <View style={theme.botPopWhBg}>
          <TouchableOpacity style={theme.botPopSearch} onPress={() => { navigate('PublicSignIn') }}>
            <Icon name='search' type='Octicons' style={theme.fBtnCircleIcon} />
            <Text style={theme.fBtnCircleText}>{__('Search')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={theme.fBtn} onPress={() => { navigate('PublicFavorites') }}>
        <Icon name='heart' type='Octicons' style={this.props.currentScreen === 'PublicFavorites' ? theme.fBtnIconActive : theme.fBtnIcon} />
        <Text style={this.props.currentScreen === 'PublicFavorites' ? theme.fBtnTextActive : theme.fBtnText}>{__('Favourites')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme.fBtn} onPress={() => { navigate('MemberSettings') }}>
        <Icon name='user' type='FontAwesome' style={this.props.currentScreen === 'PublicSettings' ? theme.fBtnIconActive : theme.fBtnIcon} />
        <Text style={this.props.currentScreen === 'PublicSettings' ? theme.fBtnTextActive : theme.fBtnText}>{__('Profile')}</Text>
      </TouchableOpacity>
    </View>
    )
  }
}
