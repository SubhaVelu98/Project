import React from 'react'
import { StatusBar, TouchableOpacity, Share, ImageBackground, ScrollView, TextInput, Picker, Image } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'
import { navigate } from '@utility/navigation'
import { setLocale, __ } from '@utility/translation'

import Modal from 'react-native-modalbox'
import YouTube from 'react-native-youtube'
import styles from '@screen/Public/TripDetail/styles'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open() {
        this.refModalBooking.open()
    }

    close() {
        this.refModalBooking.close()
    }

    render() {
        return   <Modal
        ref={(c) => { this.refModalBooking = c }}
        position={'center'}
        swipeToClose={false}
        style={styles.modalBooking}
      >
        <View style={styles.describe}>
          <TouchableOpacity style={styles.closeDesc} onPress={() => this.refModalBooking.close()}>
            <Icon name='close' type="MaterialIcons" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.thnkDetails}>
          <View style={styles.thnkLayout}>
            <Icon name='checkbox-marked-circle-outline' type="MaterialCommunityIcons" style={styles.thnkIcon} />
            <Text style={styles.thnkDesc}>{__('Thank You!')}</Text>
            <Text style={styles.thnkDescript}>{__('Your request has been submitted')}</Text>
            <Text style={styles.thnkDescript}>{__('successfully,our representative will contact')}</Text>
            <Text style={styles.thnkDescript}>{__('you with in 24 hours.')}</Text>
          </View>
        </View>
      </Modal>
    }
}
