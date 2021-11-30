import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
   
  /** * -- Content -- ***/
  layoutDefault: {
    flexGrow: 1
  },
  coverImg: {
    height: 225,
  },
  imgLayout: {
    backgroundColor: COLOR.dark,
    position: 'absolute',
    width: '100%',
    height: 225,
    opacity: 0.8
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
  navRightIcon: {
    fontSize: SIZE.huge,
    color: 'rgba(208, 2, 27, 1)'
  },
  memberHeader: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 225,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20
  },
  memberImg: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  iconLayout: {
    backgroundColor: COLOR.grey,
    borderRadius: 20,
    position: 'absolute',
    padding: 5,
    right: 0,
    bottom: 0
  },
  editIcon: {
    fontSize: SIZE.large,
    color: COLOR.light
  },
  memberDetails: {
    marginLeft: 20
  },
  memberName: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.light,
    letterSpacing: 0.5
  },
  memberPlace: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.lighten,
    marginVertical: 5
  },
  followBtn: {
    backgroundColor: 'rgba(17, 183, 25, 1)',
    borderRadius: 5,
    paddingVertical: 5
  },
  followBtnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color:COLOR.light
  },
  /** -- edit -- **/
  titleDisplay: {
    marginHorizontal: 20,
  },
  editDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.dark,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.smoke
  },
  editLayout: {
    marginVertical: 30
  },
  profileEditRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileDetailRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20
  },
  editRow: {
    flexDirection: 'row'
  },
  editRowDetails: {
    flexDirection: 'row',
    marginTop: 10
  },
  startRow: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  startDescRow: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  profileDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.grey,
    lineHeight: 30
  },
  superScript: {
    fontSize: 11,
    lineHeight: 18,
    color: 'rgba(255,0,0,1)'
  },
  profileCol: {
    flexDirection: 'row'
  },
  formInput: {
    width: '100%',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  profileInputCc: {
    flex: 2,
    fontFamily: FAMILY.regular,
    fontSize: 12,
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 10
  },
  profileInputMobile: {
    flex: 8,
    fontFamily: FAMILY.regular,
    fontSize: 12,
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  pickerDetails: {
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
  },
  postalInputDesc: {
    width: '50%',
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
    paddingLeft: 10
  },
  numDetailRow: {
    flex: 2
  },
  numDetail: {
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 25,
    marginLeft: 10
  },
  saveBtn: {
    backgroundColor: 'rgba(17, 183, 25, 1)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginTop: 20
  },
  saveBtnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: 'rgba(255,255,255,1)',
    letterSpacing: 1
  }
}