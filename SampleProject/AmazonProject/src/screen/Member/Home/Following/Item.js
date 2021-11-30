import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from '../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import LinearGradient from 'react-native-linear-gradient';


export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <View style={styles.followerDetails}>
          <View style={styles.followerDesc}>
            <Image source={{ uri: item.image }} resizeMode={'cover'} style={styles.followersImg} />
            <View style={styles.followerLayout}>
              <Text style={styles.followersName}>{item['name_' + this.props.language] || item.name}</Text>
              <Text style={styles.followersPlace}>{item['place_' + this.props.language] || item.place}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.followersBtn}>
            <Text style={styles.followingBtnDesc}>{__('Following')}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
