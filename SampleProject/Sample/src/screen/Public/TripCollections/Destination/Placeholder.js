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
        <View style={styles.destinationDetails}>
            <PlaceholderLine style={styles.destinationImg} />
          <View style={styles.destinationFeatures}>
              <PlaceholderLine width={30} style={styles.destinationRow} />
              <PlaceholderLine width={30} style={styles.destinationRow} />
          </View>
        </View>
      </Placeholder>
    )
  }
}
