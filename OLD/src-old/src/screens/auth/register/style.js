import { StyleSheet } from "react-native";
import { Colors, FontFamily } from "../../../theme";
import fontsFamily from "../../../theme/fontsFamily";
export default StyleSheet.create({
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
