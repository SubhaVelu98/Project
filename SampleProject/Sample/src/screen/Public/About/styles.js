import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
    /** * -- Content -- ***/
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: COLOR.smokeLight
  },
  bgImgMain: {
    width: '100%',
    position: 'absolute'
  },
  /** -- Contact -- **/
  titleDisplay: {
    marginHorizontal: 20
  },
  titleLayout: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  title: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light,
    letterSpacing: 3,
    marginBottom: 5
  },
  desc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.lighten,
    letterSpacing: 2
  },
  aboutLayout: {
    backgroundColor: COLOR.light,
    padding: 30,
    marginBottom: 30,
    borderRadius: 5
  },
  aboutLayoutText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.grey,
    lineHeight: 20,
    marginBottom:10
  },
}
