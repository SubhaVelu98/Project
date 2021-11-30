
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;
export default {
  coverImg: {
    height: 250
  },
  imgLayout: {
    backgroundColor: '#000',
    position: 'absolute',
    width: '100%',
    height: 250,
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
    color: '(208, 2, 27, 1)'
  },
  memberHeader: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 250,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20
  },
  memberImg: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  memberDetails: {
    marginLeft: 10
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
    backgroundColor: COLOR.green,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  followBtnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.light
  },
  memberProfile: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20

  },
  memberProfileItems: {
    alignItems: 'center'
  },
  memberProfileTag: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color:COLOR.light
  },
  memberProfileUtility: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.lighten,
    marginTop: 5
  },

  /** -Destinations - **/
  titleDisplay: {
    marginTop: 20,
    marginHorizontal: 5
  },
  titleName: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.dark,
    marginLeft: 10
  },
  destinationDetails: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: COLOR.light,
    borderRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 0
  },
  destinationImgDisplay: {

  },
  destinationImg: {
    alignSelf: 'center',
    width: '100%',
    height: 160,
    borderRadius: 10
  },
  packageLayout: {
    position: 'absolute',
    backgroundColor: COLOR.dark,
    opacity: 0.4,
    width: '100%',
    height: 160,
    borderRadius: 10
  },
  packageDescription: {
    alignSelf: 'center'
  },
  iconLayout: {
    position: 'absolute',
    width: '100%',
    top: 0,
    alignItems: 'flex-end',
    padding: 10
  },
  favoriteIcon: {
    fontSize: SIZE.huge,
    color: 'rgba(255, 76, 59, 1)'
  },
  destinationPackageDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
    paddingLeft: 10
  },
  destinationPackage: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  destinationTagLayout: {
    width: 10,
    height: 10,
    position: 'absolute',
    right: -10,
    transform: [{ rotate: '90deg' }],
    backgroundColor: 'rgba(9, 110, 14, 1)',
    top: -10
  },
  destinationTagCurveLayout: {
    backgroundColor: COLOR.light,
    height: 15,
    width: 18,
    position: 'absolute',
    right: -20,
    top: -17,
    transform: [{ rotate: '45deg' }]
  },
  destinationSession: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17, 183, 25, 1)',
    right: -10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  destinationTiming: {
    fontFamily: COLOR.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  destinationFeatures: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  destinationDesc: {
    fontFamily:FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.green
  },
  destinationStarting: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.regular
  },
  destinationRow: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  destinationSplit: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  destinationPrice: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  destinationAvailable: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyLight,
    marginLeft: 5,
    marginBottom: 5
  },
  destinationFacility: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light
  },
  startingDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark
  },
  arrowIcon: {
    fontSize: SIZE.huge,
    color: COLOR.dark,
    marginHorizontal: 5
  },
  reachingDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark
  },
  destinationAmenities: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alignAmenity: {
    marginRight: 10
  },
  alignAmenityDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  /** -- Followers -- **/
  searchForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    height: 45,
    borderRadius: 5,
    backgroundColor: COLOR.light,
    borderColor: COLOR.smoke,
    borderWidth: 1,
    marginHorizontal: 10
  },
  searchInput: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginLeft: 15
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: SIZE.huge,
    color: COLOR.greyLight,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  followerDetails: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight,
  },
  followerDesc: {
    flex: 1,
    flexDirection: 'row'
  },
  followerLayout: {
    alignSelf: 'center',
    marginLeft: 10
  },
  followersImg: {
    width: 56,
    height: 56,
    borderRadius: 28
  },
  followersName: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  followersPlace: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.grey,
    marginTop: 5
  },
  followersBtn: {

  },
  followersBtnDesc: {
    fontFamily:FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    backgroundColor:COLOR.green,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  followingBtnDesc: {
    fontFamily:FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    backgroundColor: COLOR.greyDark,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  /** -- ModalFollow -- **/
  modalFollow: {
    width: 330,
    height: 250
  },
  remove: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor:COLOR.smoke
  },
  removeDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.greyDark
  },
  closeSortDesc: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  closeSortIcon: {
    fontSize: SIZE.huge,
    color: COLOR.grey,
    paddingVertical: 5
  },
  flwDetails: {
    alignItems: 'center',
    marginVertical: 20
  },
  flwImg: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  desc: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    marginTop: 10,
    marginHorizontal: 20
  },
  removeLayout: {
    marginHorizontal: 20
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    borderWidth: 1,
    borderColor: COLOR.smoke
  },
  btn: {

  },
  btnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.greyDark,
    paddingVertical: 20
  }
}