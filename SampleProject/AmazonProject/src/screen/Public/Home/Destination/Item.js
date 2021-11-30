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
        <View style={styles.destinationDetails}>
          <TouchableOpacity style={styles.destinationImgDisplay} onPress={() => {
            navigate('PublicDetail')
          }}>
            <Image source={{ uri: item.image }} style={styles.destinationImg} />

            <View style={styles.destinationFeatures}>
            <Text style={styles.destinationDesc}>{item['desc_' + this.props.language] || item.desc}</Text>
              <View style={styles.destinationRow}>
                <Text style={styles.destinationStarting}>{__('starting:')}</Text>
                <Text style={styles.destinationPrice}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
