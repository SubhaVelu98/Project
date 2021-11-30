import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Content, Icon, Text, View } from 'native-base'
import CheckBox from 'react-native-check-box'
import DropDownPicker from 'react-native-dropdown-picker'

import styles from './styles'
import Header from '@component/Header'
import Footer from '@component/Footer'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: false,
      isOpen: false,
      checked: '',
      country: 'java',
    }
  }
 
  onValueChange(value) {
    this.setState({
      selected: value
    })
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor='rgba(74, 74, 74, 1)' animated barStyle='light-content' />
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1530843768726-74a909f2bdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }} imageStyle={'cover'} style={styles.coverImg}>
        <View style={styles.imgLayout} />
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => {
            navigate('PublicHome')
          }}>
              <Icon name='keyboard-arrow-left' type='MaterialIcons' style={styles.navLeftIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.memberHeader}>
          <View>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} style={styles.memberImg} />
            <View style={styles.iconLayout}>
              <Icon name='edit' type='MaterialIcons' style={styles.editIcon} />
            </View>
          </View>
          <View style={styles.memberDetails}>
            <Text style={styles.memberName}>{__('Catherine Zeta')}</Text>
            <Text style={styles.memberPlace}>{__('New York, USA')}</Text>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followBtnDesc}>{__('EDIT PROFILE')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Content contentContainerStyle={styles.layoutDefault}>
        <View style={styles.titleDisplay}>
          <Text style={styles.editDesc}>{__('EDIT PROFILE')}</Text>
          <View style={styles.editLayout}>
            <View style={styles.profileEditRow}>
              <View style={styles.startRow}>
                <View style={styles.editRow}>
                  <Text style={styles.profileDesc}>{__('First Name')}</Text>
                  <Text style={styles.superScript}>*</Text>
                </View>
                <TextInput placeholder={__('Catherine')} style={styles.formInput} />
              </View>
              <View style={styles.startDescRow}>
                <View style={styles.editRow}>
                  <Text style={styles.profileDesc}> {__('Last Name')}</Text>
                </View>
                <TextInput placeholder={__('Zeta')} style={styles.formInput} />
              </View>
            </View>
            <View style={styles.startRow}>
              <View style={styles.editRowDetails}>
                <Text style={styles.profileDesc}>{__('Address')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>
              <TextInput placeholder={__('#252, Kellyas street')} style={styles.formInput} />
            </View>
            <View style={styles.startRow}>
              <View style={styles.editRowDetails}>
                <Text style={styles.profileDesc}>{__('City')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>
              <TextInput placeholder={__('New York')} style={styles.formInput} />
            </View>
            <View style={styles.startRow}>
              <View style={styles.editRowDetails}>
                <Text style={styles.profileDesc}>{__('State')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>
              <TextInput placeholder={__('New York')} style={styles.formInput} />
            </View>
            <View>
              <View style={styles.editRowDetails}>
                <Text style={styles.profileDesc}>{__('Country')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>

              <View style={styles.pickerDetails}>
              <DropDownPicker
                items={[
                  { label: 'United states of America', value: 'java' },
                  { label: 'Italy', value: 'js' },
                  { label: 'Germany', value: 'js'},
                ]}
               
                defaultValue={this.state.country}
                containerStyle={{ height: 40, width: '100%',backgroundColor:'rgba(0,0,0,0.05)' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#FFF' }}
                onChangeItem={item => this.setState({
                  country: item.value
                })}
              />
                
              </View>
            </View>
            <View style={styles.startRow}>
              <View style={styles.editRowDetails}>
                <Text style={styles.profileDesc}>{__('Postal Code')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>
              <TextInput placeholder={__('NY073')} style={styles.postalInputDesc} />
            </View>
            <View style={styles.startRow}>
              <View style={styles.editRowDetails}>
                <Text style={styles.profileDesc}>{__('Email ID')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>
              <TextInput placeholder={__('catherine.zeta@gmail.com')} style={styles.formInput} />
            </View>
            <View style={styles.profileDetailRow} />
            <View style={styles.profileDetailRow}>
              <View style={styles.editRow}>
                <Text style={styles.profileDesc}>{__('Phone No')}</Text>
                <Text style={styles.superScript}>*</Text>
              </View>
              <View style={styles.profileCol}>
                <TextInput placeholder='+1' keyboardType={'numeric'} style={styles.profileInputCc} />
                <TextInput placeholder='987 6543 210' keyboardType={'numeric'} style={styles.profileInputMobile} />
              </View>
            </View>

            <TouchableOpacity style={styles.saveBtn} onPress={() => {
              navigate('PublicHome')
            }}>
              <Text style={styles.saveBtnDesc}>{__('SAVE')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
      </Container>
    )
  }
}
