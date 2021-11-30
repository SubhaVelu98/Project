import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'
import CheckBox from 'react-native-check-box'

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
        <View style={styles.budgetLevel}>
          <CheckBox color='rgba(0,0,0,0.4)' checked={false} style={styles.checkIcon} />
          <Text style={styles.budgetLimit}>{item.price}</Text>
        </View>
      </>
    )
  }
}
