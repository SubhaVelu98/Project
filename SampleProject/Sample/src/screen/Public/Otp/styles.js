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
  otpContent: {
    marginHorizontal: 20
  },
  otpContentItem: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  otpTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light,
    letterSpacing: 3,
    marginBottom: 5,
  },
  otpdesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.lighten,
    letterSpacing: 5,
    marginTop:10,
    textAlign:'center'
  },
  otpLayout: {
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 5
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  verifyBtn: {
    backgroundColor: COLOR.dark,
    borderRadius: 5,
    paddingVertical: 18,
    opacity: 0.9,
    marginVertical: 15
  },
  verifyBtnText: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
 
}