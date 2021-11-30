import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
 /** * -- Content -- ***/
 layoutDefault: {
  flexGrow: 1,
  backgroundColor: COLOR.smokeLight
},
bgImgMain: {
  width: '100%',
  height: '100%',
  position: 'absolute'
},
bgCover: {
  backgroundColor: COLOR.greyLight,
  position: 'absolute',
  width: '100%',
  height: '100%'
},
navBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10
},
navLeftIcon: {
  fontSize: SIZE.huge,
  color: COLOR.light,
},
/** -- Contact -- **/
successContent: {
  marginHorizontal: 20
},
contentLayout: {
  alignItems: 'center',
  marginTop: 80,
  marginBottom: 30
},
thnkImg: {
  marginBottom: 30,
  width: 72,
  height: 72
},
successTitle: {
  fontFamily: FAMILY.regular,
  fontSize: SIZE.huge,
  color: COLOR.light,
},
successDesc: {
  fontFamily: FAMILY.regular,
  fontSize: SIZE.medium,
  lineHeight: 18,
  color: COLOR.light,
  textAlign:'center',
  marginTop: 15
},
successLayout: {
  marginTop: 40,
  marginBottom: 30,
  borderRadius: 5
},
logBtn: {
  width: '100%',
  paddingHorizontal: 20,
  paddingVertical: 20,
  alignSelf: 'center',
  backgroundColor: COLOR.dark,
  borderRadius: 5,
  opacity: 0.9,
  marginTop: 10
},
logBtnDesc: {
  textAlign: 'center',
  fontFamily: FAMILY.bold,
  fontSize: SIZE.small,
  color: COLOR.light
}
}