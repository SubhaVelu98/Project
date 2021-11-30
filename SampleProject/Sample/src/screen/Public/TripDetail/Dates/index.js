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
        item={item} openModalBooking={this.props.openModalBooking}
        item={item}
      />
    )
  }

  render() {
    return (
      <>
        <View>
          <View style={styles.sectionWhite}>
            <Text style={styles.titleColorName}>{__('Dates and')}</Text>
            <Text style={styles.titleColorDesc}>{__('Availability')}</Text>
            <View style={styles.heading}>
              <Text style={styles.headingDate}>{__('Date')}</Text>
              <Text style={styles.headingPrice}>{__('Price')}</Text>
              <Text style={styles.headingAvailibility}>{__('Availibility')}</Text>
            </View>
            <FlatList
              data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
              contentContainerStyle={styles.spiritualcontainer}
              renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
            />
          </View>
        </View>
      </>
    )
  }
}
