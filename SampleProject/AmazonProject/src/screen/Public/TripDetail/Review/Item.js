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
        <View style={styles.reviewItems}>
          <View style={styles.reviewerAvatar}>
            <Image source={{ uri: item.image }} style={styles.avatarImg} />
          </View>
          <View style={styles.reviewerInfo}>
          <Text style={styles.reviewerName}>{item['reviewer_' + this.props.language] || item.reviewer}</Text>
            <View style={styles.reviewerDetails}>
            <Text style={styles.reviewerDesc}>{item['place_' + this.props.language] || item.place}</Text>
              <Text style={styles.reviewerDesc}>{item['posted_' + this.props.language] || item.posted}</Text>
            </View>
            <View style={styles.reviewStar}>
              <Icon name='star' type='Foundation' style={styles.starIconActive} />
              <Icon name='star' type='Foundation' style={styles.starIconActive} />
              <Icon name='star' type='Foundation' style={styles.starIconActive} />
              <Icon name='star' type='Foundation' style={styles.starIconInactive} />
              <Icon name='star' type='Foundation' style={styles.starIconInactive} />
            </View>
            <Text style={styles.reviewerMsg}>{item.reviewMsg}</Text>
            <View style={styles.reviewerFeedback}>
              <TouchableOpacity style={styles.feedbackBtns}>
                <Icon name='thumb-up' type='MaterialCommunityIcons' style={[styles.feedbackIcon, styles.feedbackRed]} />
                <Text style={[styles.feedbackDesc, styles.feedbackRed]}>{__('24 Likes')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.feedbackBtns}>
                <Icon name='reply' type='MaterialCommunityIcons' style={[styles.feedbackIcon, styles.feedbackGrey]} />
                <Text style={[styles.feedbackDesc, styles.feedbackGrey]}>{__('Reply')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }
}
