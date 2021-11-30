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
        <View style={styles.tripDetails}>
          <TouchableOpacity style={styles.tripImgDisplay} onPress={() => {
            navigate('PublicList')
          }}>
            <Image source={{ uri: item.image }} style={styles.tripImg} />
          </TouchableOpacity>
          <Text style={styles.tripDesc}>{item['desc_' + this.props.language] || item.desc}</Text>
        </View>
      </>
    )
  }
}
