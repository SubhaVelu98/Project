import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from '../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'



export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <View style={styles.wayDisp}>
          <View style={styles.wayLayout}>
            <Image source={item.image} resizeMode={'center'} style={styles.wayImg} />
            <View style={styles.wayDescript}>
              <Text style={styles.wayOption}>{item['desc_' + this.props.language] || item.desc}</Text>
              <Text style={styles.wayOptionDesc}>{__('The 2 main and busiest airports in Greece are in Athens city and Thessaloniki city')}</Text>
            </View>
          </View>
        </View>
      </>
    )
  }
}
