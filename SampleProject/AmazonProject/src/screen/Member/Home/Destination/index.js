import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { View, Icon, Text } from 'native-base'

import Item from './Item'
import styles from './../styles'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'
import theme from '@theme/styles'

import { navigate, goBack } from '@utility/navigation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate() {
    return <Placeholder />
  }

  renderItem({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
      />
    )
  }

  render() {
    return (
      <>
        <View>
          <FlatList
            data={this.props.fetching ? [1, 2,3,4] : this.props.list}
            contentContainerStyle={styles.destinationContentItem}
            showsHorizontalScrollIndicator={false}
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          />
        </View>
      </>
    )
  }
}
