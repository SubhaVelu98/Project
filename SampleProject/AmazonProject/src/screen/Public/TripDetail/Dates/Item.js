import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from '../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import LinearGradient from 'react-native-linear-gradient';


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const item = this.props.item

    return (
      <>
        <View style={styles.headingGrey}>
        <Text style={styles.availabilityDesc}>{item['date_' + this.props.language] || item.date}</Text>
          <Text style={styles.availabilityDesc}>{item.price}</Text>
          <Text style={styles.availabilityDesc}>{item['availability_' + this.props.language] || item.availability}</Text>
          <TouchableOpacity style={styles.bookBtn} onPress={this.props.openModalBooking}>
            <Text style={styles.bookBtnDesc}>{__('Book')}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
