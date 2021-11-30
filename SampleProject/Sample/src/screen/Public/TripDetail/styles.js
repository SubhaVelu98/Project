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
  tripDetailLayout: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  tripDetailPlace: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.dark
  },
  tripDetailRow: {
    flexDirection: 'row'
  },
  tripDetailAmenities: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  from: {
    fontFamily: FAMILY.regular,
  fontSize: SIZE.small,
    color: COLOR.greyDark,
    marginTop: 10
  },
  tripDetailSpeciality: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tripDetailPrice: {
    alignSelf: 'center',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.dark
  },
  tripDetailDays: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.greyDark,
    marginLeft: 5
  },
  /** --Tour OverView --**/
  sectionGrey: {
    marginVertical: 20,
    backgroundColor: COLOR.smoke,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  description: {
    fontFamily: FAMILY.bold,
  fontSize: SIZE.small,
    color:COLOR.grey,
    paddingVertical: 10,
    lineHeight: 20
  },
  readmoreBtn: {

  },
  readmoreDesc: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: 'rgba(17, 183, 25, 1)',
    textTransform:'uppercase',
    backgroundColor: COLOR.light,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR.smoke
  },
  /** --Essential Info --**/
  sectionWhite: {
    marginVertical: 20,
    paddingHorizontal: 20
  },
  essentialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor:COLOR.smoke
  },
  essentialHeading: {
    fontFamily: FAMILY.regular,
   fontSize: SIZE.small,
    color: COLOR.dark
  },
  essentialDesc: {
    fontFamily: FAMILY.regular,
   fontSize: SIZE.small,
    color: COLOR.dark
  },
  essentialActivityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  iconRow: {
    flexDirection: 'row'
  },
  radioIcon: {
    fontSize: SIZE.compact
  },
  /** -- include --**/
  includeRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.smoke
  },
  includeRowLost: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  checkIcon: {
    fontSize: SIZE.huge
  },
  includeDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginLeft: 10
  },
  /** -- Itinerary --**/
  itineraryLayout: {
    marginVertical: 15
  },
  itineraryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 5,
    backgroundColor: COLOR.light,
    borderBottomWidth: 1,
    borderColor: COLOR.smoke
  },
  itineraryDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:   COLOR.dark
  },
  itineraryRowLost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  /** -- Availability --**/
  heading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLOR.greyDark,
    marginTop: 15
  },
  headingDate: {
    flex: 1.5,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    marginLeft: 5
  },
  headingPrice: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    marginLeft: 20
  },
  headingAvailibility: {
    flex: 1.5,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  headingGrey: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLOR.smoke,
    borderBottomWidth: 1,
    borderColor: COLOR.light
  },
  headingDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:   COLOR.dark
  },
  availabilityDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:   COLOR.dark
  },
  headingDescColor: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:   COLOR.dark
  },
  bookBtn: {
    alignSelf: 'center'
  },
  bookBtnDesc: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    textTransform:'uppercase',
    color: COLOR.light,
    backgroundColor: 'rgba(17, 183, 25, 1)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.smoke
  },
  /** -- Map --**/
  mapGrey: {
    backgroundColor: COLOR.smoke,
    paddingVertical: 30
  },
  alignMap: {
    marginHorizontal: 20,
    marginBottom: 15
  },
  mapLayout: {
    width: '100%',
    height: 200,
    paddingVertical: 10
  },
  /* Reviews */
  reviewItems: {
    width: 280,
    marginTop: 40,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 5,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#DDD',
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  reviewerAvatar: {
    alignItems: 'center',
    paddingBottom: 15,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: -40
  },
  avatarImg: {
    width: 86,
    height: 86,
    borderRadius: 43
  },
  reviewerInfo: {
    marginTop: 40,
    minHeight: 150,
    alignItems: 'center'
  },
  reviewerName: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium
  },
  reviewerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  reviewerDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    paddingHorizontal: 10
  },
  reviewStar: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 5
  },
  starIconActive: {
    fontSize: SIZE.large,
    color: 'rgba(255, 220, 100, 1)',
    marginRight: 3
  },
  starIconInactive: {
    fontSize: SIZE.large,
    color: 'rgba(221, 221, 221, 1)',
    marginRight: 3
  },
  reviewerMsg: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    textAlign: 'center',
    lineHeight: 16,
    padding: 15
  },
  reviewerFeedback: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  feedbackBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  feedbackDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(221, 221, 221, 1)'
  },
  feedbackIcon: {
    fontSize: SIZE.huge,
    paddingRight: 5
  },
  feedbackRed: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(255, 76, 59, 1)'
  },
  feedbackGrey: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
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
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.grey,
    textTransform:'uppercase',
    letterSpacing: 1
  },
  titleColorDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color:   COLOR.dark,
    textTransform:'uppercase',
    letterSpacing: 0.5
  },
  destinationDetails: {
    flex: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
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
    transform: [{ rotate: '90deg' }],
    backgroundColor: 'rgba(9, 110, 14, 1)',
    right: -10,
    top: -10
  },
  destinationTagCurveLayout: {
    backgroundColor: '#FFF',
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
    color:COLOR.dark
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
    color:COLOR.dark
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
    color:COLOR.light
  },
  startingDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color:COLOR.dark
  },
  arrowIcon: {
    fontSize: SIZE.huge,
    color:COLOR.dark,
    marginHorizontal: 5
  },
  reachingDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color:   COLOR.dark
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
    color:   COLOR.dark
  },
  /** --Modal Days -- **/
  modalDays: {
    width: '100%',
    height: '100%',
    marginTop: 60
  },
  describe: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  closeDesc: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  closeIcon: {
    fontSize: SIZE.huge,
    color: COLOR.grey,
    paddingVertical: 5
  },
  modalLayout: {
    paddingHorizontal: 20
  },
  daysDetail: {
    paddingBottom: 15
  },
  dayDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:   COLOR.dark
  },
  place: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color:   COLOR.dark
  },
  modalImg: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  tourDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    lineHeight: 18,
    marginTop: 20
  },
  tourDescript: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    lineHeight: 18,
    marginTop: 10
  },
  dayBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  dayBtn: {
    backgroundColor: COLOR.greyDark,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 25
  },
  dayBtnDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    textTransform:'uppercase'
  },
  /** --Modal Booking -- **/
  modalBooking: {
    width: '100%',
    height: '100%',
    marginTop: 100
  },
  thnkDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color:   COLOR.dark,
    marginTop: 30,
    marginBottom: 10
  },
  thnkLayout: {
    alignItems: 'center',
    marginVertical: 30
  },
  thnkDetails: {
    marginTop: 50
  },
  thnkIcon: {
    fontSize: 72,
    color: '#11B719'
  },
  thnkDescript: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
    marginBottom: 5
  }
}
