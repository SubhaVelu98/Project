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
        <View style={styles.offerDetails}>
          <TouchableOpacity style={styles.offerImgDisplay} onPress={() => {
            navigate('PublicTripDetail')
          }}>
            <Image source={{ uri: item.image }} style={styles.offerImg} />
            <View style={styles.offerFeatures}>
            <Text style={styles.offerDesc}>{item['desc_' + this.props.language] || item.desc}</Text>
              <Text style={styles.offerDays}>{item['days_' + this.props.language] || item.days}</Text>
              <Text style={styles.offerPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
