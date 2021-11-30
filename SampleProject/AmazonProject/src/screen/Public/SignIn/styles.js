import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
  /** * -- Content -- ***/
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: COLOR.smokeLight
  },
  bgCover: {
    backgroundColor:COLOR.smokeDark,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  bgImgMain: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  navLeftIcon: {
    fontSize: SIZE.extraHuge,
    color: COLOR.light
  },
  /** -- Contact -- **/
  signinContent: {
    marginHorizontal: 20
  },
  signinContentItem: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  signinContentTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light,
    letterSpacing: 3,
    marginBottom: 5,
  },
  signinContentDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.lighten,
    letterSpacing: 5
  },
  logInLayout: {
    marginTop: 40,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 5
  },
  formInput: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    borderWidth: 1,
    borderColor: COLOR.lighten,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15    
  },
  forgot: {
    alignSelf: 'flex-end',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color:COLOR.lighten
  },
  logBtn: {
    backgroundColor: COLOR.dark,
    borderRadius: 5,
    paddingVertical: 18,
    opacity: 0.9,
    marginVertical: 15
  },
  logBtnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  or: {
    alignSelf: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light,
    marginVertical: 30
  },
  loginDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    marginVertical: 5
  },
  smn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  smnBtn: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  smnIcon: {
    fontSize: SIZE.large,
    color: COLOR.light
  },
  smnFacebook: {
    backgroundColor: '#3a559f'
  },
  smnTwitter: {
    backgroundColor: '#4faaf0',
    marginLeft: 15
  },
  smnGooglePlus: {
    backgroundColor: '#dd4b39',
    marginLeft: 15
  },
  rowEvent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  smnDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    marginLeft: 5
  },
  signUp: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  signUpTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  signUpDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  }
}