import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {

    /** * -- Content -- ***/
    layoutDefault: {
      flexGrow: 1,
      backgroundColor: 'rgba(0,0,0,0.02)'
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
      fontFamily:FAMILY.bold,
      fontSize: SIZE.compact,
      color: COLOR.light,
      letterSpacing: 3
    },
    desc: {
      fontFamily: FAMILY.regular,
      fontSize: SIZE.tiny,
      color: COLOR.lighten,
      letterSpacing: 2
    },
    contactLayout: {
      backgroundColor: COLOR.light,
      padding: 30,
      marginBottom: 30,
      borderRadius: 10
    },
    formInput: {
      fontFamily: FAMILY.regular,
      fontSize: SIZE.tiny,
      backgroundColor: COLOR.smoke,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 15,
      paddingVertical: 15
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderBottomWidth: 1,
      borderColor:COLOR.smoke,
  
      paddingHorizontal: 5,
      paddingVertical: 15,
      borderRadius: 5
    },
    infoItemLast: {
      borderBottomWidth: 0
    },
    infoIcon: {
      color: COLOR.greyLight,
      marginRight: 10,
    },
    infoHeader: {
      fontFamily: FAMILY.regular,
      color: COLOR.grey,
      marginBottom: 5,
      fontSize: SIZE.small,
      textTransform:'uppercase'
    },
    infoDesc: {
      fontFamily: FAMILY.regular,
      color: COLOR.dark,
      fontSize: SIZE.small
    },
    cBtn: {
      paddingVertical: 15,
      backgroundColor: '#11B719',
      borderRadius: 5
    },
    cBtnText: {
      fontFamily: FAMILY.regular,
      color: COLOR.light,
      fontSize: SIZE.small,
      textAlign: 'center'
    }
  }
  