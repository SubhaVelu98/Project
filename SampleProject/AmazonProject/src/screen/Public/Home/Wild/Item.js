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
         <View style={styles.adventureDetails}>
                  <TouchableOpacity style={styles.adventureImgDisplay} onPress={() => {
                    navigate('PublicDetail')
                  }}>
                    <Image source={{ uri: item.image }} style={styles.adventureImg} />
                    <View style={styles.adventureFeatures}>
                    <Text style={styles.adventureDesc}>{item['desc_' + this.props.language] || item.desc}</Text>
                      <View style={styles.adventureRow}>
                        <Text style={styles.adventureStarting}>{__('starting:')}</Text>
                        <Text style={styles.adventurePrice}>{item.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
      </>
    )
  }
}
