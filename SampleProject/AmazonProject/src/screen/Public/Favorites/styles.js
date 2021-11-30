
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;
export default {
  /** * -- Content -- ***/

  bgImgMain: {
    position: 'absolute',
    width: '100%'
  },
  favoriteLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.lighten,
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 5
  },
  destinationBtn: {
    flex: 1
  },
  destinationBtnDesc: {
    backgroundColor: COLOR.light,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontFamily:FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.dark,
    textAlign: 'center'
  },
  destinationBtnDarkDesc: {
    backgroundColor: COLOR.smokeDark,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    textAlign: 'center'
  },
  tourBtn: {
    flex: 1
  },
  tourBtnDarkDesc: {
    backgroundColor:COLOR.smokeDark,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 10,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    textAlign: 'center'
  },
  tourBtnDesc: {
    backgroundColor:COLOR.light,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 10,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    textAlign: 'center'
  },
  /** -Destinations - **/
  destinationDetails: {
    flex: 1,
    margin: 5,
    backgroundColor: 'transparent',
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
    height: 155,
    borderRadius: 10
  },
  destinationLayout: {
    backgroundColor: COLOR.dark,
    width: '100%',
    height: 155,
    position: 'absolute',
    opacity: 0.3,
    borderRadius: 10
  },
  destinationfavoriteIcon: {
    fontSize: SIZE.large,
    color: 'rgba(255, 76, 59, 1)'
  },
  destinationFeatures: {
    width: '100%',
    height: 155,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  destinationDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.light,
    letterSpacing: 1
  },
  destinationStarting: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light
  },
  destinationRow: {
    flexDirection: 'row'
  },
  destinationPrice: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  destinationFacility: {
    alignSelf: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.light
  },
  /** -Tour - **/
  titleDisplay: {
    marginTop: 20,
    marginHorizontal: 5
  },
  tourDetails: {
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
  tourImgDisplay: {

  },
  tourImg: {
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
    fontSize: SIZE.large,
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
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  tourFeatures: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  tourDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(17, 183, 25, 1)'
  },
  tourRow: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  destinationSplit: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  tourPrice: {
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
    justifyContent: 'space-between',
    paddingTop: 10,
    borderColor: COLOR.smokeLight,
    borderTopWidth: 1
  },
  alignAmenity: {
    marginRight: 10
  },
  alignAmenityDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark
  }
}