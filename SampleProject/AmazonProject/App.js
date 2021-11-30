import React from 'react'
import { Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

/* Drawer Menu */
import DrawerContent from '@component/Menu/Left'

/* Public Screens */
import PublicHome from '@screen/Public/Home'
import PublicLanguage from '@screen/Public/Language'
import PublicList from '@screen/Public/List'
import PublicDetail from '@screen/Public/Detail'
import PublicTripCollections from '@screen/Public/TripCollections'
import PublicTripDetail from '@screen/Public/TripDetail'
import PublicFavorites from '@screen/Public/Favorites'
import PublicContact from '@screen/Public/Contact'
import PublicAbout from '@screen/Public/About'
import PublicSignIn from '@screen/Public/SignIn'
import PublicSignUp from '@screen/Public/SignUp'
import PublicForgotPswd from '@screen/Public/ForgotPswd'
import PublicOtp from '@screen/Public/Otp'
import PublicRegisterSuccess from '@screen/Public/RegisterSuccess'
import PublicPasswordSuccess from '@screen/Public/PasswordSuccess'

/* Members Screens */
import MemberHome from '@screen/Member/Home'
import MemberEditProfile from '@screen/Member/EditProfile'
import MemberSettings from '@screen/Member/Settings'

/* Navigation */
import { navigationRef } from '@utility/navigation'
import { setDefaultLocale } from '@utility/translation'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const { width } = Dimensions.get('window')

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
})

const options = {
  cardStyleInterpolator: forFade
}

function DrawerRoot() {
  return (
    <Drawer.Navigator
    initialRouteName='Drawer'
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{ width: width - 100 }}
    drawerPosition= 'left'
  >
    <Drawer.Screen name='PublicHome' component={PublicHome} />
  </Drawer.Navigator>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAppInitiated: false
    }

    this.checkIsAppInitiated = this.checkIsAppInitiated.bind(this)
  }

  async componentDidMount() {
    await this.checkIsAppInitiated()
  }

  async checkIsAppInitiated() {
    await setDefaultLocale()
    this.setState({
      isAppInitiated: true
    })
  }

  render() {
    if (!this.state.isAppInitiated) {
      return null
    }

    return (
      <NavigationContainer ref={navigationRef}> 
        <Stack.Navigator initialRouteName='Drawer' headerMode='none'>
          <Stack.Screen name='Drawer' component={DrawerRoot} />
          <Stack.Screen name='MemberEditProfile' component={MemberEditProfile} />
          <Stack.Screen name='MemberSettings' component={MemberSettings} />
          <Stack.Screen name='MemberHome' component={MemberHome} />


          <Stack.Screen name='PublicHome' component={PublicHome} />
          <Stack.Screen name='PublicLanguage' component={PublicLanguage} />
          <Stack.Screen name='PublicList' component={PublicList} />
          <Stack.Screen name='PublicDetail' component={PublicDetail} />
          <Stack.Screen name='PublicTripCollections' component={PublicTripCollections} />
          <Stack.Screen name='PublicTripDetail' component={PublicTripDetail} />
          <Stack.Screen name='PublicFavorites' component={PublicFavorites} />
          <Stack.Screen name='PublicContact' component={PublicContact} />
          <Stack.Screen name='PublicAbout' component={PublicAbout} />
          <Stack.Screen name='PublicSignIn' component={PublicSignIn} />
          <Stack.Screen name='PublicSignUp' component={PublicSignUp} />
          <Stack.Screen name='PublicForgotPswd' component={PublicForgotPswd} />
          <Stack.Screen name='PublicOtp' component={PublicOtp} />
          <Stack.Screen name='PublicRegisterSuccess' component={PublicRegisterSuccess} />
          <Stack.Screen name='PublicPasswordSuccess' component={PublicPasswordSuccess} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
