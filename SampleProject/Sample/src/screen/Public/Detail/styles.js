import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;
export default {

  /** * -- Content -- ***/
  coverImg: {
    height: 250
  },
  imgLayout: {
    backgroundColor: '#000',
    position: 'absolute',
    width: '100%',
    height: 250,
    opacity: 0.3
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
  destinationHeader: {
    position: 'absolute',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  destinationName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.light,
    letterSpacing: 5,
    textTransform: 'uppercase'
  },
  destinationPlan: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  destinationItems: {
    marginHorizontal: 10
  },
  destinationTag: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  destinationUtility: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light,
    marginTop: 5
  },
  /** -Destinations - **/
  titleDisplay: {
    marginTop: 30,
    marginLeft: 20
  },
  titleDisp: {
    marginTop: 20,
    marginLeft: 20
  },
  titleColorName: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.grey,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  titleColorDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  destinationDetails: {
    flex: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 15,
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
    width: 300,
    height: 160,
    borderRadius: 10
  },
  packageLayout: {
    position: 'absolute',
    backgroundColor: '#000',
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
    color: COLOR.light
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
    transform: [{ rotate: '90deg' }],
    backgroundColor: 'rgba(9, 110, 14, 1)',
    right: -10,
    top: -10
  },
  destinationTagCurveLayout: {
    backgroundColor: COLOR.light,
    height: 15,
    width: 18,
    top: -17,
    position: 'absolute',
    transform: [{ rotate: '46deg' }],
    right: -20
  },
  destinationSession: {
    backgroundColor: 'rgba(17, 183, 25, 1)',
    right: -10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  destinationTiming: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light
  },
  destinationFeatures: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  destinationDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(17, 183, 25, 1)'
  },
  destinationStarting: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.dark
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
    marginLeft: 5
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
    fontSize: SIZE.tiny,
    color: COLOR.dark
  },
  arrowIcon: {
    fontSize: 24,
    color: COLOR.dark,
    marginHorizontal: 5
  },
  reachingDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.dark
  },
  destinationAmenities: {
    flexDirection: 'row',
    paddingTop: 10,
    borderColor: COLOR.smokeLight,
    borderTopWidth: 1
  },
  alignAmenity: {
    marginRight: 10,
    width: 18,
    height: 18
  },
  alignAmenityDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  /** -- packageBtn --**/
  overView: {
    marginHorizontal: 20
  },
  packageBtn: {
    backgroundColor: 'rgba(239, 103, 0, 1)',
    borderRadius: 5,
    marginVertical: 15
  },
  packageBtnDesc: {
    textAlign: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    paddingVertical: 15
  },
  selectPackage: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 5,
    marginVertical: 20,
    padding: 20
  },
  suitPackage: {
    alignSelf: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  suitPackageDesc: {
    textAlign: 'center',
    width: '100%',
    flexWrap: 'wrap',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    marginVertical: 5
  },
  requestBtn: {
    backgroundColor: COLOR.dark,
    borderRadius: 5,
    marginVertical: 10
  },
  /** -Attractions - **/
  attractionDetails: {
    width: 140,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 5,
    marginBottom: 20,
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
  destinationContentItem: {
    marginLeft: 15
  },
  attractionImgDisplay: {
  },
  attractionImg: {
    alignSelf: 'center',
    width: '100%',
    height: 160,
    borderRadius: 10
  },
  attractionFeatures: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  attractionDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    marginBottom: 5
  },
  /** -- Reach -- **/
  wayDisp: {
    marginHorizontal: 20
  },
  wayLayout: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR.smokeLight,
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  wayImg: {
    width: 50
  },
  wayDescript: {
    flex: 2
  },
  wayOption: {
    fontFamily: FAMILY.regular,
    fontSize: 14,
    color: COLOR.dark
  },
  wayOptionDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    flexWrap: 'wrap',
    marginTop: 5
  }

}
