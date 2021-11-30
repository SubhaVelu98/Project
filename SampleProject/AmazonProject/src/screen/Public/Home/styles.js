
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;
export default {

  bgImgMain: {
    width: '100%',
    position: 'absolute',
  },
  searchForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    height: 45,
    borderRadius: 30,
    backgroundColor: COLOR.light,
    borderColor: COLOR.light,
    borderWidth: 0,
    marginHorizontal: 15
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    marginLeft: 15
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: SIZE.huge,
    color: COLOR.greyLight,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  /* Title */
  titleDisp: {
    marginVertical: 15,
    marginLeft: 20
  },
  trendDisplay: {
    marginTop: 20,
    marginLeft: 20
  },
  titleDisplay: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20
  },
  titleName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.lighten,
    letterSpacing: 1,
    textTransform:'uppercase'
  },
  titleDesc: {
    fontFamily:FAMILY.bold,
    fontSize: SIZE.medium,
    color:COLOR.light,
    letterSpacing: 0.5,
    textTransform:'uppercase'
  },

  /** -Trip - **/
  tripDetails: {
    marginVertical: 10,
    marginRight: 5,
    marginLeft:20
  },
  tripImg: {
    alignSelf: 'center',
    width: 72,
    height: 72,
    borderRadius: 36
  },
  tripImgDisplay: {
  },
  tripDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    marginTop: 5,
    letterSpacing: 0.5
  },
  layout: {
    marginLeft: 15
  },
  overView: {
    marginTop: 50
  },
  /** -Destinations - **/
  destinationDetails: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 5,
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
  destinationImgDisplay: {
  },
  destinationImg: {
    alignSelf: 'center',
    width: 140,
    height: 155,
    borderRadius: 10
  },
  destinationFeatures: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  destinationDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginBottom: 5
  },
  destinationRow: {
    flexDirection: 'row'
  },
  destinationStarting: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey
  },
  destinationPrice: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.green,
    marginLeft: 8
  },
  /** --Special Offers-- **/
  titleColorName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.grey,
    letterSpacing: 1,
    textTransform:'uppercase'
  },
  titleColorDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    letterSpacing: 0.5,
    textTransform:'uppercase'
  },
  offerDetails: {
    marginTop: 15,
    marginRight: 5,
    marginLeft: 20,
    marginBottom: 20
  },
  offerImgDisplay: {
  },
  offerImg: {
    width: 200,
    height: 140,
    borderRadius: 10
  },
  offerFeatures: {
    paddingVertical: 15
  },
  offerDesc: {
    fontFamily: FAMILY.bold,
   fontSize:SIZE.small,
    color:COLOR.dark,
    marginBottom: 3
  },
  offerRow: {
    flexDirection: 'row'
  },
  offerDays: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.grey
  },
  offerPrice: {
    fontFamily: FAMILY.bold,
   fontSize:SIZE.small,
    color: COLOR.green,
    marginTop: 10
  },
  /** -Adventures - **/
  sectionGrey: {
    paddingTop: 30,
    paddingBottom: 15,
    paddingLeft: 20,
    backgroundColor: COLOR.smokeLight
  },
  adventureDetails: {
    marginTop: 15,
    marginRight: 15,
    marginLeft: 20,
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
  adventureImgDisplay: {
  },
  adventureImg: {
    alignSelf: 'center',
    width: '100%',
    height: 130,
    borderRadius: 10
  },
  adventureFeatures: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  adventureDesc: {
    fontFamily: FAMILY.bold,
   fontSize:SIZE.small,
    color: COLOR.dark,
    marginBottom: 5
  },
  adventureRow: {
    flexDirection: 'row'
  },
  adventureStarting: {
    fontFamily: 'Montserrat-Regular',
   fontSize:SIZE.small,
    color:COLOR.grey
  },
  adventurePrice: {
    fontFamily: FAMILY.bold,
   fontSize:SIZE.small,
    color: COLOR.green,
    marginLeft: 8
  },
  spiritualcontainer: {
    paddingRight: 15
  },
}