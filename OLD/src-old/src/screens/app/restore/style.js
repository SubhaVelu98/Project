import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
export default StyleSheet.create({
  container: {
    flexGrow: 1
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
  inputBg:{
   borderTopWidth:1,
   borderRightWidth:1,
   borderLeftWidth:1,
   borderColor:'rgba(0,0,0,0.1)',
   borderRadius:10,
   paddingHorizontal:10,
   paddingVertical:5,
   shadowColor: '#fff',
   shadowOpacity: 0.20,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 15,
   elevation: 5,
  },
  inputText:{
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: 'normal',
  },
  submitBtn: {
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
  submitBtnText: {
    fontSize: 16,
    color: 'rgba(255,255,255,1)',
    fontWeight: 'normal',
    textAlign: 'center'
  },
});
