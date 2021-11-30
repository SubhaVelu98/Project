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
        <View style={styles.attractionDetails}>
          <TouchableOpacity style={styles.attractionImgDisplay} onPress={() => {
            navigate('PublicTripCollections')
          }}>
            <Image source={{ uri: item.image }} resizeMode={'cover'} style={styles.attractionImg} />

            <View style={styles.attractionFeatures}>
            <Text style={styles.attractionDesc}>{item['desc_' + this.props.language] || item.desc}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
