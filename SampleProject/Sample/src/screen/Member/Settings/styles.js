import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
   
  /** * -- Content -- ***/
  layoutDefault: {
    flexGrow: 1
  },
  coverImg: {
    height: 225
  },
  imgLayout: {
    backgroundColor: '#000',
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
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  followBtnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.light
  },
  /** -- Settings -- **/
  titleDisplay: {
    marginHorizontal: 20
  },
  title: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginTop: 20
  },
  /* Accordion */
  filterBy: {
    marginTop: 30
  },
  sortBy: {
    marginTop: 30
  },
  accordion: {
    width: '100%'
  },
  accordionTab: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 0,
    marginBottom: 1
  },
  accordionTabText: {
    color: '#333',
    fontSize: SIZE.small,
    fontFamily: FAMILY.regular
  },
  accordionTabIcon: {
    fontSize: SIZE.large,
    color: COLOR.grey
  },
  accordionContent: {
    paddingVertical: 10
  },
  trendSelect: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderColor: COLOR.smoke,
    borderBottomWidth: 1
  },
  trendBorderNone: {
    borderBottomWidth: 0
  },
  trendDesc: {
    fontSize: SIZE.small,
    color: COLOR.grey,
    fontFamily: FAMILY.regular
  },
  checkColor: {
    marginRight: 15,
    borderRadius: 30
  },
  notify: {
    backgroundColor: '#f0f0f0',
    color: '#39405B',
    borderColor: '#DDD'
  },
  notifyChecked: {
    backgroundColor: '#39405B',
    borderColor: '#39405B',
    borderRadius: 0
  },
  notifyText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: '#666'
  },
  textInput: {
    fontFamily: FAMILY.regular,
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: SIZE.small,
    width: '100%',
    color: '#666',
    borderBottomWidth: 0
  },
  formBtnText: {
    fontFamily: FAMILY.regular,
    color: COLOR.light,
    fontSize: SIZE.small
  },
  formBtnIcon: {
    color: COLOR.light,
    fontSize: SIZE.extraHuge
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
  profileDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color:COLOR.grey,
    lineHeight: 30
  },
  superScript: {
    fontSize: 11,
    lineHeight: 18,
    color: 'rgba(255,0,0,1)'
  },
  profileInputDesc: {
    width: '100%',
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
    paddingLeft: 10
  },
  fRow: {
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 15,
    borderColor: COLOR.smoke,
    borderBottomWidth: 1
  },
  label: {
    flex: 1,
    fontFamily:FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
    marginTop: 5
  },
  inputDesc: {
    flex: 1,
    fontFamily:FAMILY.regular,
    fontSize: SIZE.medium,
    padding: 0,
    borderBottomWidth: 2,
    borderColor: COLOR.light,
    color:COLOR.light
  },
  doneBtn: {
    backgroundColor: 'rgba(17, 183, 25, 1)',
    marginVertical: 20,
    paddingVertical: 15,
    borderRadius: 5
  },
  doneBtnDesc: {
    textAlign: 'center',
    fontFamily:FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light

  }
}