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
        <TouchableOpacity style={styles.destinationDetails} onPress={() => {
          navigate('PublicTripDetail')
        }}>
          <TouchableOpacity style={styles.destinationImgDisplay} >
            <Image source={{ uri: item.image }} style={styles.destinationImg} />
          </TouchableOpacity>
          <View style={styles.destinationLayout} />
          <View style={styles.destinationFeatures}>
            <Text style={styles.destinationDesc}>{item['desc_' + this.props.language] || item.desc}</Text>
            <Text style={styles.destinationStarting}>{__('starting budget')}</Text>
            <View style={styles.destinationRow}>
              <Text style={styles.destinationPrice}>{item.price}</Text>
              <Text style={styles.destinationFacility}>{__('/person')}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
