import { StyleSheet } from 'react-native';
import { Colors, FontFamily } from "../../../theme";
import fontsFamily from "../../../theme/fontsFamily";
export default StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
  },
  navText: {
    fontFamily: fontsFamily.MontserratSemiBold,
    color: "#494B69",
    fontSize: 16,
    lineHeight: 20
  },
  headerIcon: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 22
  },
  // inputBg: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   borderTopWidth: 1,
  //   borderRightWidth: 1,
  //   borderLeftWidth: 1,
  //   borderColor: 'rgba(0,0,0,0.05)',
  //   paddingHorizontal: 15,
  //   borderRadius: 5,
  //   shadowColor: 'black',
  //   shadowOpacity: 0.26,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 10,
  //   elevation: 2,
  //   backgroundColor: 'white',
  // },
  inputText: {
    flex: 1,
    fontFamily: fontsFamily.Montserrat,
    color: '#000',
    fontSize: 16
  },
  inputIcon: {
    color: '#86cef7',
    fontSize: 20
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  // bgContainer: {
  //   flexGrow: 1,
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   marginTop: 60,
  //   shadowColor: 'black',
  //   shadowOpacity: 0.26,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 10,
  //   elevation: 10,
  //   backgroundColor: 'white',
  // },

  titleText: {
    paddingTop: 20,
    paddingHorizontal: 30,
    color: "rgba(0,0,0,0.8)",
    fontSize: 18,
  },
  pinContent: {
    marginHorizontal: 30,
    marginVertical: 50
  },
  iconInfo: {
    fontSize: 36,
    color: "#000",
  },
  listContainer: {
    marginVertical: 20,
    marginBottom: 20
  },

  item: {
    flex: 1,
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 15,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign:'center',
    alignSelf: 'center',

  },
});

