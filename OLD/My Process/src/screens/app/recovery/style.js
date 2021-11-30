import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 20,
    marginTop: 40
  },
  recoveryTitle: {
    fontSize: 28,
    color: '#494B69',
    fontWeight: 'bold',
    marginBottom: 20
  },
  imgBg:{
    height:100,
    width:100,
    marginBottom:15
  },
  recoveryText: {
    fontSize: 14,
    color: '#515166',
    fontWeight: 'normal',
    lineHeight: 18,
    letterSpacing:0.5
  },
  btnBg: {
    backgroundColor: '#fff'
  },
  continueBtn: {
    backgroundColor: '#5591ed',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    padding: 15,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity: -0.58,
    shadowRadius: -16.00,
    elevation: -24,
  },
  recoveryIcon: {
    fontSize: 100,
    color: 'rgb(85, 211, 242)',
    marginBottom: 20
  },
  continueBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
    textAlign: 'center'
  },
});
