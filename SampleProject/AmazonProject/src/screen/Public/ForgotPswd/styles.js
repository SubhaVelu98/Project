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
forgotContent: {
  marginHorizontal: 20
},
forgotContentItem: {
  marginTop: 80,
  marginBottom: 30
},
forgotTitle: {
  fontFamily: FAMILY.regular,
  fontSize: SIZE.huge,
  color: COLOR.light,
},
forgotDesc: {
  fontFamily: FAMILY.regular,
  fontSize: SIZE.medium,
  lineHeight: 18,
  color: COLOR.light,
  marginTop: 15
},
forgotLayout: {
  marginTop: 40,
  marginBottom: 30,
  borderRadius: 5
},
formBg: {
  alignItems: 'center',
  flexDirection: 'row',
  borderColor: COLOR.lighten,
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 20
},
formInput: {
  width: '100%',
  alignSelf: 'center',
  height: 40,
  paddingLeft: 10,
  color: COLOR.light
},
formText: {
  fontFamily: COLOR.bold,
  fontSize: SIZE.small,
  color: COLOR.light,
  marginLeft: 10,
  marginTop: 10
},
formIcon: {
  color: COLOR.light,
  fontSize: SIZE.huge,
  marginHorizontal: 20
},
sendBtn: {
  width: '100%',
  paddingHorizontal: 20,
  paddingVertical: 20,
  alignSelf: 'center',
  backgroundColor: COLOR.dark,
  borderRadius: 5,
  opacity: 0.9,
  marginTop: 10
},
sendBtnText: {
  textAlign: 'center',
  fontFamily: FAMILY.bold,
  fontSize: SIZE.small,
  color: COLOR.light
}
}