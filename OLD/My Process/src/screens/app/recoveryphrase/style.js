import { StyleSheet,Dimensions } from 'react-native';
import fontsFamily from "../../../theme/fontsFamily";
const windowWidth = Dimensions.get('window').width / 2 -30
const windowHeight = Dimensions.get('window').height;

// console.log("sdjfjd", windowWidth, windowHeight)
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'#fff'
  },
  navBar: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navBarIcon: {
    fontSize: 26,
    color: 'rgba(0,0,0,0.7)'
  },
  content: {
    padding: 20,
    marginTop: 40
  },
  recoveryTitle: {
    marginBottom: 20,
    fontFamily: fontsFamily.MontserratBold,
    color: "#494B69",
    fontSize: 20,   
    lineHeight: 20
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  shadowStyle: {
    shadowRadius: 1.3,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
    width: windowWidth,
    height: 58,
    margin: 3,
  },
  phraseText: {
    flex: 1,
    fontFamily: fontsFamily.Montserrat,
    color: "#515166",
    fontSize: 12,
    padding:20,
  },
  submitBtn: {
    backgroundColor:'#fff',
    padding: 20,
  },
});
