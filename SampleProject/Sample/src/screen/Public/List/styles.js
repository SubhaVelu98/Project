
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
    marginBottom: 15,
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
  /** -Destinations - **/
  destinationDetails: {
    flex: 1,
    marginTop: 15,
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
  destinationContentItem: {
    marginLeft: 15
  },
  destinationImg: {
    alignSelf: 'center',
    width: '100%',
    height: 155,
    borderRadius: 10
  },
  destinationLayout: {
    backgroundColor: '#000',
    width: '100%',
    height: 155,
    position: 'absolute',
    opacity: 0.3,
    borderRadius: 10
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
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light,
    letterSpacing: 1,
    marginBottom: 5
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
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  destinationFacility: {
    alignSelf: 'center',
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light
  }
}