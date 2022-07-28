import { StyleSheet } from "react-native";
import size from "../../assets/Size";


const style = StyleSheet.create({
  image: {
    width:size.size263,
    height:size.size241,
  },
  container: {
    flex: 1,
    justifyContent:"center"
  },
  body: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewImage: {},
  login: {
    fontWeight:'600',
    fontSize:size.size24,
    lineHeight: size.size32,
    letterSpacing:0.25,
    color: "#11493E",
  },
  inputView: {
    width: size.size329,
    height: size.size45,
    borderWidth: size.size1,
    borderStyle: "solid",
    borderColor: "#DEDEDE",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop:size.size16,
  },
  inputEmail: {
    width: size.size285,
    height: size.size45,
  },
  inputPassword:{
    width: size.size270,
    height: size.size45,
  },
  svgUser: {
    width: size.size18,
    height: size.size20,
  },
  forget: {
    width: size.size132,
    height: size.size17,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight:'400',
    fontSize: size.size14,
    lineHeight: size.size17,
    textAlign: "center",
    color: "#949494",
  },
  forgetView: {
    width: size.size329,
    alignItems: "flex-end",
    marginTop: size.size14,
  },
  buttens: {
    width: size.size328,
    height:size.size38,
    backgroundColor: "#11493E",
    borderRadius: size.size4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: size.size28,
  },
  loginText: {
    width: size.size42,
    height: size.size16,
    color: "#FCFCFC",
    fontWeight: '600',
    fontSize: size.size14,
    lineHeight: size.size16,
  },
  text: {
    width: size.size328,
    height: size.size32,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: '400',
    fontSize: size.size14,
    lineHeight: size.size16,
    letterSpacing: 0.25,
    color: "#616062",
  },
  textView:{
    width: size.size328,
    height: size.size32 ,
    marginTop:size.size6
  },
  loginColor:{
    color: '#11493E',
  }
});
export default style;
