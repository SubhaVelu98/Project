
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;
export default {

  /** * -- Content -- ***/
  bgImgMain: {
    width: '100%',
    position: 'absolute'
  },
  searchDisplay: {
  },
  searchForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    height: 45,
    borderRadius: 30,
    backgroundColor: COLOR.light,
    borderColor:COLOR.light,
    borderWidth: 0,
    marginHorizontal: 15
  },
  searchInput: {
    flex: 1,
    marginLeft: 15,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    paddingVertical: 15
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: SIZE.huge,
    color: COLOR.greyLight,
    paddingVertical: 5,
    paddingHorizontal: 15
  },

  /** -Destinations - **/
  titleDisplay: {
    marginTop: 20,
    marginHorizontal: 5
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
    backgroundColor: COLOR.grey,
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
    fontSize: 24,
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
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  destinationTagLayout: {
  },
  destinationTagCurveLayout: {
  },
  destinationSession: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17, 183, 25, 1)',
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  destinationTiming: {
    fontFamily: FAMILY.regular,
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
    fontFamily: FAMILY.bold,
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
    color:COLOR.dark
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
    marginRight: 10,
    width: 18,
    height: 18
  },
  alignAmenityDesc: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark
  },
  /** --Modal Filter -- **/
  modalFilter: {
    width: '100%',
    height: '100%',
    marginTop: 40,
    paddingBottom: 60
  },
  describe: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(74, 74, 74, 1)',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  describeDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  closeDesc: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  closeIcon: {
    fontSize: SIZE.extraHuge,
    color: COLOR.light,
    paddingVertical: 5
  },
  describebudget: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.smoke,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  budgetDesc: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.dark
  },
  clearDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.grey
  },
  budgetLevel: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor:COLOR.smoke
  },
  budgetLimit: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.greyDark,
    marginLeft: 25
  },
  checkIcon: {
    borderRadius: 3,
    color: COLOR.grey
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.smoke
  },
  durationLevel: {
    flex: 5,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  applyBtn: {
    backgroundColor: 'rgba(17, 183, 25, 1)',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  applyBtnDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.light,
    paddingVertical: 15
  },
  /** -- ModalSort -- **/
  modalSort: {
    width: 300,
    height: 250,
    borderRadius: 5
  },
  sort: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  describeSortDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark
  },
  closeSortDesc: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  closeSortIcon: {
    fontSize: SIZE.extraHuge,
    color: COLOR.greyDark,
    paddingVertical: 5
  },
  sortRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sortColorRow: {
    backgroundColor: 'rgba(236, 249, 236, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  sortDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark
  },
  checkSortIcon: {
    borderRadius: 3,
    color: COLOR.grey,
    marginRight: 10
  }
}
