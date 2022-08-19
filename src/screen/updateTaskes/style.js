import { StyleSheet } from "react-native";
import size from "../../assets/Size";
import Size from "../../assets/Size";


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  body: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    maxWidth: Size.size340,
    marginLeft: Size.size21,
    marginRight: Size.size21,
  },
  titleView: {
    justifyContent: "center",
    marginTop: Size.size35,
    marginRight: Size.size60,
  },
  title: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#1B3131",
  },
  svgLeft: {
    marginTop: Size.size40,
    marginRight: Size.size60,
  },
  input: {
    width: Size.size313,
    borderBottomColor: "#E3E3E3",
    borderStyle: "solid",
    borderBottomWidth: size.size1,
    paddingLeft: Size.size10,
    marginTop: Size.size19,
  },
  text: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#818195",
  },
  delete: {
    width: Size.size155,
    height: Size.size38,
    borderWidth: Size.size1,
    borderStyle: "solid",
    borderColor: "#D6453D",
    borderRadius: Size.size4,
    alignItems: "center",
    justifyContent: "center",
  },
  TextDelete: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#D6453D",
  },
  update: {
    width: Size.size155,
    height: Size.size38,
    backgroundColor: "#11493E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Size.size4,
  },
  TextUpdate: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#FCFCFC",
  },
});
export default style;
