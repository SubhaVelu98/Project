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
  signupContent: {
    marginHorizontal: 20
  },
  signupContentItem: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  signupContentTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light,
    letterSpacing: 3,
    marginBottom: 5,
  },
  signupContentDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.lighten,
    letterSpacing: 5
  },
  nameRow: {
    flexDirection: 'row'
  },
  nameDetails: {
    flex: 5
  },
  nameDetailAlign: {
    flex: 5,
    marginLeft: 15
  },
  signupLayout: {
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
  registerBtn: {
    backgroundColor: COLOR.dark,
    borderRadius: 5,
    paddingVertical: 18,
    opacity: 0.9,
    marginVertical: 15
  },
  registerBtnText: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  signupDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    marginVertical: 5
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
    color: COLOR.light,
    marginRight:5
  },
}