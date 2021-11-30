import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { normalize } from "../utils/screenSize";
import Layout from "./Layout";
import { Dimensions } from "react-native";
import screenSize from "../utils/screenSize";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.backgroundColor,
    justifyContent: "space-between",
    alignContent: "center"
  },
  content: {
    // shadowRadius:""
  },
  accordion: {paddingBottom:50},
  send: {},
  formItem: { justifyContent: "space-evenly", backgroundColor: "transparent" },
  formIcon: {},
  formLabel: {
    fontFamily: "ubuntu",
    width: "45%",
    color: Colors.inputLabel,
    fontSize: normalize(15),
    paddingLeft: normalize(10),
    paddingBottom: normalize(20)
  },
  formInput: {
    fontFamily: "ubuntu",
    fontSize: normalize(17),
    color: Colors.inputLabel
  },
  borderBottom: {
    borderColor: Colors.inputLabel,
    borderBottomWidth: 1
  },
  form: {
    marginLeft: 14,
    marginRight: 20
  },
  cardItem: {
    borderColor: "transparent",
    backgroundColor: Colors.backgroundColor
  },
  centerAlignedText: {
    fontFamily: "ubuntu",
    textAlign: "center",
    fontSize: normalize(16),
    color: Colors.noticeText
  }
});
export const Login = StyleSheet.create({
   form:{
       backgroundColor:'rgba(255, 255, 255, 0.95)',
       width: width - 30,
       borderRadius:20,
       textAlign:'center',
       alignSelf: 'stretch',
       alignItems:'center',
       margin:15,
       marginBottom:0,
       marginTop:normalize(40),
       padding:30,
       fontFamily: "Quicksand-Light",
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 12,
       },
       shadowOpacity: 0.58,
       shadowRadius: 16.00,
       elevation: 35,
   },
    list:{
      width:'100%',
    },
    scroll:{
      width:'100%'
    },
    loginHead:{
        fontFamily: "Quicksand-Bold",
        color: Colors.blackText,
        textAlign: "center",
        fontSize: normalize(24),
        marginTop:20,
        letterSpacing:-1

    },
    subText:{
       marginBottom:40,
       marginTop:20,
       textAlign:'center',
        fontFamily: "Quicksand-Light",
        width:'100%',
        justifyContent:'center',
        color: Colors.blackText,
        fontSize: normalize(15)
    },
    formInput: {
        width:'100%',
        fontFamily: "Quicksand-Regular",
        fontSize: normalize(17),
        color: Colors.blackText,
        marginBottom: 0,
        paddingBottom:25

    },
    formLabel: {
        fontFamily: "Quicksand-Regular",
        color: Colors.blackText,
        fontSize: normalize(15),
        marginTop:-10
    },
    itemWrap:{
     marginBottom:normalize(30)
    },
    button:{
        backgroundColor:Colors.btnClr,
        color:'#fff',
        textAlign:'center',
        fontFamily: "Quicksand-Regular",
        letterSpacing:-1,
        padding:10,
        paddingLeft:normalize(60),
        paddingRight:normalize(60),
        borderRadius:10,
        marginTop:normalize(50),
        shadowColor: Colors.btnClr,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 20,
    },
    goReg:{
        marginTop:normalize(40),
        fontFamily: "Quicksand-Regular",
        color:Colors.noticeText,
    },
    text:{
     color:'#fff'
    }
});
export const PinScreen = StyleSheet.create({
    form:{
        backgroundColor:'rgba(255, 255, 255, 0.95)',
        width: width - 30,
        borderRadius:20,
        textAlign:'center',
        alignSelf: 'stretch',
        alignItems:'center',
        margin:15,
        marginBottom: normalize(25),
        marginTop:normalize(40),
        padding:30,
        paddingBottom:0,
        fontFamily: "Quicksand-Light",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 35,
    },
    formPin:{
        backgroundColor:'rgba(255, 255, 255, 0.95)',
        width: width - 30,
        borderRadius:20,
        textAlign:'center',
        alignSelf: 'stretch',
        alignItems:'center',
        margin:15,
        marginBottom: normalize(25),
        marginTop:normalize(40),
        padding:30,
        paddingBottom:0,
        fontFamily: "Quicksand-Light",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 35,
    },
    top:{
      alignItems:'center',
      justifyContent:'center',
        marginTop:15,
        width:width,
        flexWrap:'wrap'
    },
    pinHead:{
        fontFamily: "Quicksand-Bold",
        color:Colors.whiteText,
        fontSize:normalize(25),
        letterSpacing:-1,
        marginTop:20,
        textAlign:'center',
        width:'100%'
    },
    subText:{
        marginBottom:40,
        marginTop:20,
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        maxWidth:370,
        textAlign:'center',
        fontFamily: "Quicksand-Light",
        justifyContent:'center',
        color: Colors.whiteText,
        fontSize: normalize(15)
    },
    subTextMn:{
        marginBottom:40,
        marginTop:20,
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        maxWidth:250,
        textAlign:'center',
        fontFamily: "Quicksand-Light",
        justifyContent:'center',
        color: Colors.whiteText,
        fontSize: normalize(15)
    },
    button:{
        backgroundColor:Colors.btnClr,
        color:'#fff',
        textAlign:'center',
        fontFamily: "Quicksand-Regular",
        letterSpacing:-1,
        padding:10,
        paddingLeft:normalize(60),
        paddingRight:normalize(60),
        borderRadius:10,
        maxWidth:250,
        margin:0,
        shadowColor: Colors.btnClr,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 20,
    },
    text:{
        color:'#fff',
        textAlign:'center',
        margin:0
    },
    touch:{
        alignItems:'center',
        padding:0,
        marginTop:normalize(150),
        marginBottom:25,
    },
    touch2:{
        alignItems:'center',
        padding:0,
        marginBottom:25,
    },
    mnemonicHead:{
        color: Colors.blackText,
        fontSize: normalize(19),
        textAlign: "center",
        fontFamily: "Quicksand-Bold",
        marginTop: normalize(30),
        marginBottom: 10
    },
    mnemonicText:{
        color: Colors.mnuColor,
        fontSize: normalize(15),
        textAlign: "center",
        fontFamily: "Quicksand-Regular",
        marginTop: 20,
    },
    mnemonicText2:{
        color: Colors.mnuColor,
        fontSize: normalize(15),
        textAlign: "center",
        fontFamily: "Quicksand-Regular",
        marginBottom: normalize(40),
        lineHeight:24,
        maxWidth:'80%'
    },
    list:{
        maxHeight:160,
        backgroundColor:'#e8eff4',
        borderRadius:10,
        padding:12,
        marginTop: normalize(30),
        marginBottom:normalize(30),
        alignItems:'center',
        borderColor:'#d3dbe1',
        borderWidth:1,
        justifyContent:'center'
    },
    listStyle:{
        width: screenSize(10),
        marginBottom:7
    }
});
export const EditProfile = StyleSheet.create({
  cardItem: {
    borderColor: "transparent",
    backgroundColor: Colors.backgroundColor,
    alignContent: "center",
    marginLeft: normalize(8),
    marginRight: normalize(8),
    // paddingTop: normalize(20),
    // paddingBottom: normalize(20),
    borderTopColor: Colors.borderColor1,
    borderTopWidth: 1,
    minHeight: normalize(40)
  },
  formInput: {
    minWidth: Layout.window.width - normalize(100),
    fontFamily: "ubuntu",
    fontSize: normalize(16),
    color: Colors.noticeText,
    borderBottomColor: "transparent",
    borderBottomWidth: normalize(0.3),
    height: normalize(40),
    paddingLeft: normalize(3)
  },
  formLabel: {
    fontFamily: "ubuntu",
    color: Colors.inputLabel,
    fontSize: normalize(15),
    marginLeft: normalize(7),
    marginBottom: normalize(-5)
  }
});

export const Profile = StyleSheet.create({
  formInput: {
    minWidth: Layout.window.width - normalize(100),
    fontFamily: "ubuntu",
    height: normalize(23),
    fontSize: normalize(16),
    color: Colors.noticeText,
    borderBottomColor: "transparent",
    borderBottomWidth: normalize(0.3),
    height: normalize(40)
  },
  topBarFormInput: {
    fontFamily: "ubuntu",
    fontSize: normalize(14),
    minWidth: Layout.window.width - normalize(100),
    height: normalize(35),
    borderBottomColor: Colors.successColor,
    borderBottomWidth: normalize(0.3),
    color: Colors.tintColor
  },
  formLabel: {
    fontFamily: "ubuntu",
    color: Colors.inputLabel,
    fontSize: normalize(15),
    marginLeft: normalize(7),
    marginBottom: normalize(-5)
  },
  textarea: {
    minWidth: Layout.window.width - normalize(100),
    fontFamily: "ubuntu",
    height: normalize(30),
    fontSize: normalize(16),
    color: Colors.noticeText,
    height: normalize(60),
    width: normalize(200),
    borderColor: "transparent",
    paddingLeft: normalize(3)
  },
  cardItem: {
    borderColor: "transparent",
    backgroundColor: Colors.backgroundColor,
    alignContent: "center",
    marginLeft: normalize(8),
    marginRight: normalize(8),
    // paddingTop: normalize(20),
    // paddingBottom: normalize(20),
    borderTopColor: Colors.borderColor1,
    borderTopWidth: 1,
    minHeight: normalize(60)
  },
  icon: {
    color: Colors.tintColor,
    fontSize: normalize(24),
    alignSelf: "center"
  },
  label: {
    fontFamily: "ubuntu-bold",
    color: Colors.noticeText,
    fontSize: normalize(16),
    marginBottom: normalize(4)
  },
  text: {
    fontFamily: "ubuntu",
    fontSize: normalize(16),
    color: Colors.inputLabel,
    textAlign: "left",
    overflow: "hidden",
    height: normalize(25)
  }
});

export const Tokens = StyleSheet.create({
  formInput: {
    minWidth: Layout.window.width - normalize(100),
    fontFamily: "ubuntu",
    fontSize: normalize(15),
    color: Colors.tintColor,
    borderBottomColor: Colors.successColor,
    borderBottomWidth: normalize(0.3)
  },
  topBarFormInput: {
    fontFamily: "ubuntu",
    fontSize: normalize(14),
    color: Colors.tintColor
  },
  card: {
    minHeight: normalize(600)
  },
  cardItem: {
    borderColor: "transparent",
    backgroundColor: Colors.backgroundColor,
    alignContent: "center",
    marginLeft: normalize(8),
    marginRight: normalize(8),
    // paddingTop: normalize(20),
    // paddingBottom: normalize(20),
    borderBottomColor: Colors.borderColor1,
    borderBottomWidth: 1,
    minHeight: normalize(60),
    flex: 1,
    justifyContent: "space-between"
  },
  icon: {
    color: Colors.tintColor,
    fontSize: normalize(24),
    alignSelf: "center"
  },
  label: {
    fontFamily: "ubuntu-bold",
    color: Colors.noticeText,
    fontSize: normalize(14)
  },
  text: {
    fontFamily: "ubuntu",
    fontSize: normalize(14),
    color: Colors.labelColorToken,
    textAlign: "left",
    overflow: "hidden"
  },
  cover: {
    backgroundColor: Colors.borderColor1
  },
  sheet: {
    position: "absolute",
    top: Layout.window.height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end"
  },
  popup: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: 300,
    alignItems: "center",
    justifyContent: "center"
  }
});

export const Home = StyleSheet.create({
    logo: {
        flex: 1,
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
    logoWrap:{
        width:120,
        height:120,
        textAlign:'center',
        alignItems:'center',
    },
    topWrap:{
        width:'100%',
        textAlign:'center',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        position:"relative"
    },
    profile:{
        position:'absolute',
        right:10,
        top:50
    },
    profile2:{
        position:'absolute',
        right:20,
        top:50
    },
    welcome:{
        color:'#fff',
        fontFamily: "ubuntu",
        fontSize:normalize(26),
        textAlign:'center',
        marginBottom:20

    },
    card:{
        backgroundColor:'rgba(255, 255, 255, 0.95)',
        borderRadius:20,
        // textAlign:'center',
        // alignSelf: 'stretch',
        // alignItems:'center',
        // padding:30,
        // paddingBottom:0,
        fontFamily: "Quicksand-Light",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        width:'100%',
        marginBottom:15,
        paddingBottom:10
    },
    code:{
        textAlign: "right",
        fontSize: normalize(21),
        fontFamily: "ubuntu-bold",
        color: '#c0111d'
    },
    display:{
    textAlign: "right",
        fontSize: normalize(15),
    fontFamily: "ubuntu",
    color: Colors.mnuColor
    },
    usBal:{
        textAlign: "right",
        fontSize: normalize(23),
        fontFamily: "ubuntu",
        color: Colors.noticeText
    },
    mainBal:{
        textAlign: "left",
        fontSize: normalize(27),
        fontFamily: "ubuntu-bold",
        color: '#216cb1',
        position:'relative',
        paddingLeft:7
    },
    symbol:{
        fontSize: normalize(15),
        position:"absolute",
        top:-5,
        color: '#216cb1',
    },
    pos:{
        position:'relative'
    },
    pinHead:{
        fontFamily: "Quicksand-Bold",
        color:Colors.whiteText,
        fontSize:normalize(26),
        letterSpacing:-1,
        marginTop:0,
        textAlign:'center',
    },
    subText:{
        marginBottom:normalize(20),
        marginTop:20,
        paddingLeft:10,
        paddingRight:10,
        maxWidth:370,
        textAlign:'center',
        fontFamily: "Quicksand-Light",
        justifyContent:'center',
        color: Colors.whiteText,
        fontSize: normalize(15)
    },
    formCard:{
        backgroundColor:'rgba(255, 255, 255, 0.95)',
        width: width - 30,
        borderRadius:20,
        textAlign:'center',
        alignSelf: 'stretch',
        alignItems:'center',
        margin:15,
        marginBottom:0,
        marginTop:normalize(40),
        padding:30,
        paddingBottom:0,
        fontFamily: "Quicksand-Light",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 35,
    },
    formCard2:{
        backgroundColor:'rgba(255, 255, 255, 0.95)',
        width: width - 30,
        borderRadius:20,
        textAlign:'center',
        alignSelf: 'stretch',
        alignItems:'center',
        margin:15,
        marginBottom:30,
        marginTop:normalize(40),
        padding:20,
        paddingBottom:0,
        fontFamily: "Quicksand-Light",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 35,
    },
    button:{
        backgroundColor:Colors.btnClr,
        color:'#fff',
        textAlign:'center',
        fontFamily: "Quicksand-Regular",
        letterSpacing:-1,
        padding:14,
        // paddingLeft:normalize(40),
        // paddingRight:normalize(40),
        borderRadius:10,
        width:230,
        margin:0,
        shadowColor: "#2bd097",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 20,
    },
    btnAdd:{
        marginTop:normalize(20),
    },
    text:{
        color:'#fff',
        textAlign:'center',
        margin:0,
        fontFamily: "Quicksand-Regular",
    },
    touch:{
        alignItems:'center',
        padding:0,
        marginTop:normalize(250),
        marginBottom:25,
    },
    touch2:{
        alignItems:'center',
        padding:0,
        marginBottom:25,
    },
});
