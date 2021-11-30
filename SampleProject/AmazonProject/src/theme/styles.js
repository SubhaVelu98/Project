import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {

  /* Layout */
  layout: {
    flex: 1,
    backgroundColor: COLOR.default,

  },
  layoutFx: {
    flexGrow: 1,
    backgroundColor: COLOR.light
  },
  layoutFxCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  layoutFxBot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  /* Header Component */
  act: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: COLOR.default,
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRightIcon: {
    fontSize: SIZE.huge,
    color: COLOR.light
  },
  /** * Action Bar - Text, Icon, Button ***/
  nav: {
    backgroundColor: 'rgba(74, 74, 74, 1)',
    paddingVertical:20
  },
  navBarItems: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -10,
    paddingHorizontal: 5,
    borderBottomWidth: 0
  },
  navBarLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarMiddle: {
    flex: 7,
    alignItems: 'center'
  },
  navMiddleDesc: {
    fontFamily: 'SpaceAge',
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 2
  },
  navMiddleDescSm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 2
  },
  navBarRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navBarIcon: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 1)'
  },
  navBarMiddleItems: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navMiddleSubDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
    letterSpacing: 2
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 18, 33, 1)',
    borderColor: '#FF0000',
    borderWidth: 1
  },
  cartAddedDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)'
  },

  /* Avatar Sizes */
  avatarTiny: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  avatarSmall: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  },
  avatarMedium: {
    width: 128,
    height: 128,
    borderRadius: 125 / 2
  },
  imgResponsive: {
    width: '100%',
    minHeight: 1
  },

  row: {
    flexDirection: 'row'
  },

  /* Label, TextInput, Picker, Placeholder */
  label: {

  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textInputMulti: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  picker: {

  },
  placeholder: {

  },

  /* Button */
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.primary
  },
  btnDefault: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.default
  },
  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },

  headerLight: {
    backgroundColor: COLOR.primary,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerDark: {
    backgroundColor: COLOR.default,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTransparent: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
  },

  /* Colors */
  dark: {
    color: COLOR.dark
  },
  light: {
    color: COLOR.light
  },
  bgDark: {
    backgroundColor: COLOR.dark
  },
  bgLight: {
    backgroundColor: COLOR.light
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontSize: SIZE.medium,
    fontFamily: FAMILY.regular
  },
  compact: {
    fontSize: SIZE.compact
  },
  large: {
    fontSize: SIZE.large
  },
  huge: {
    fontSize: SIZE.huge
  },
  higantic: {
    fontSize: SIZE.higantic
  },
  regular: {
    fontFamily: FAMILY.regular
  },
  bold: {
    fontFamily: FAMILY.bold
  },

  // *** Footer *** //
  fItems: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: 'rgba(0, 0, 0, 1)'
  },
  fBtn: {
    flex: 1,
    alignItems: 'center'
  },

  fBtnIconActive: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)',
    paddingBottom: 5
  },
  fBtnIcon: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: 5
  },
  fBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    color: 'rgba(0,0,0,0.4)'
  },
  fBtnTextActive: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 8,
    color: 'rgba(0, 0, 0, 1)'
  },
  fBtnCircleIcon: {
    fontSize: 36,
    color: 'rgba(255,255,255,1)',
    paddingBottom: 5
  },
  fBtnCircleText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: 'rgba(255,255,255,1)'
  },
  botPop: {
    flex: 1,
    justifyContent: 'center'
  },
  botPopBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25
  },
  botPopWhBg: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  botPopSearch: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  sortBtns: {
    flexDirection: 'row',
    backgroundColor: 'rgba(219, 219, 219, 0.4)',
    borderTopWidth: 3,
    borderColor: 'rgba(239, 188, 14, 1)',
    paddingVertical: 10
  },
  sortItem: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fSortIcon: {
    color: 'rgba(0,0,0,0.4)',
    paddingRight: 5
  },

  fTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.07)'
  },
  fIconsRow: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  iconFtabActive: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 20
  },
  textFtabActive: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(0,0,0,0.8)',
    marginLeft: 5
  }
}
