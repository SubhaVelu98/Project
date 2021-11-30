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
        <View style={styles.adventureDetails}>
          <View>
            <PlaceholderLine style={styles.adventureImg} />
          </View>
          <View style={styles.adventureFeatures}>
            <View >
              <PlaceholderLine width={30} style={styles.adventureDesc} />
              <PlaceholderLine width={30}  style={styles.adventureDesc}/>
            </View>
          </View>
        </View>
      </Placeholder>
    )
  }
}
