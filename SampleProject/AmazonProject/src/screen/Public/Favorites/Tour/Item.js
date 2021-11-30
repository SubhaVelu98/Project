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
        <View style={styles.tourDetails}>
          <TouchableOpacity style={styles.tourImgDisplay} onPress={() => {
            navigate('PublicTripCollections')
          }}>
            <Image source={{ uri: item.image }} style={styles.tourImg} />
            <View style={styles.packageLayout} />
            <View style={styles.iconLayout}>
              <Icon name={item.iconname} type={item.icontype} style={styles.favoriteIcon} />
            </View>
            <View style={styles.destinationPackageDetails}>
              <View style={styles.packageDescription}>
                <Text style={styles.destinationPackage}>{item['package_' + this.props.language] || item.package}</Text>
                <Text style={styles.destinationPackage}>{__('Tour Package')}</Text>
              </View>
              <View style={styles.destinationTagLayout} />
              <View style={styles.destinationTagCurveLayout} />
              <View style={styles.destinationSession}>
              <Text style={styles.destinationTiming}>{item['days_' + this.props.language] || item.days}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.tourFeatures}>
            <Text style={styles.tourDesc}>{__('startingFrom')}</Text>
            <View style={styles.destinationSplit}>
              <View style={styles.tourRow}>
                <Text style={styles.tourPrice}>{item.price}</Text>
                <Text style={styles.destinationAvailable}>{__('per Person on twin sharing')}</Text>
              </View>
            </View>
            <View style={styles.destinationAmenities}>
              <View style={styles.tourRow}>
              <Text style={styles.startingDesc}>{item['start_' + this.props.language] || item.start}</Text>
                <Icon name='keyboard-arrow-right' type='MaterialIcons' style={styles.arrowIcon} />
                <Text style={styles.reachingDesc}>{item['destination_' + this.props.language] || item.destination}</Text>
              </View>
              <View style={styles.tourRow}>
                <Image source={require('@asset/images/airplane.png')} style={styles.alignAmenity} />
                <Image source={require('@asset/images/cab.png')} style={styles.alignAmenity} />
                <Image source={require('@asset/images/bed.png')} style={styles.alignAmenity} />
                <Image source={require('@asset/images/food.png')} style={styles.alignAmenity} />
                <Text style={styles.alignAmenityDesc}>+4</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    )
  }
}
