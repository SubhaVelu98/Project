import { StyleSheet } from 'react-native';
import { Colors, FontFamily } from "../../../theme";
import fontsFamily from "../../../theme/fontsFamily";
export default StyleSheet.create({
  Container: {
    flex: 1
  },
  bgContainer: {
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'white'
  },
  closeIcon: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
    color: "#494B69",
    fontSize: 30
  },
  titleText: {
    fontFamily: fontsFamily.MontserratSemiBold,
    paddingTop: 20,
    paddingHorizontal: 30,
    color: "#494B69",
    fontSize: 16,
    lineHeight: 20
  },
  pinContent: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
    height: 600
  },
  iconInfo: {
    fontSize: 36,
    color: "#000",
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    // flex: 1,
    height: "100%",
    width: "100%",
  },
  debLogo: {
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: "15%",
    height: 93,
    width: 79.05,
  },
  welcomeLabel: {
    fontSize: 25,
    lineHeight: 30.48,
    alignSelf: "center",
    color: Colors.white,
    fontFamily: fontsFamily.MontserratBold,
    fontWeight: "700",
    marginTop: "3%",
  },
  formWrap: {
    marginTop: 15,
    margin: 15,
  },
  promoCodeLabel: {
    fontSize: 12,
    lineHeight: 14.63,
    fontFamily: FontFamily.MontserratMedium,
    color: Colors.white,
    marginTop: 15,
  },
  signUpButton: {
    marginTop: 15,
  },
});
