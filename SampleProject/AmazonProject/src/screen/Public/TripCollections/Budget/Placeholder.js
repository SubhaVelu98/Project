import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.offerDetails}>
          <View>
            <PlaceholderLine style={styles.offerImg} />
          </View>
          <View style={styles.offerFeatures}>
            <View >
              <PlaceholderLine width={30} style={styles.offerDesc} />
              <PlaceholderLine width={30}  style={styles.offerDays}/>
            </View>
          </View>
        </View>
      </Placeholder>
    )
  }
}
