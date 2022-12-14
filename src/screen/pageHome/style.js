import { StyleSheet } from "react-native";
import Size from "../../assets/Size";
import size from "../../assets/Size";

const Style = StyleSheet.create({
  body: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    maxWidth: Size.size340,
    marginLeft: Size.size27,
    marginRight: Size.size21,
  },
  title: {
    width: Size.size153,
    height: Size.size32,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size24,
    lineHeight: Size.size32,
    letterSpacing: 0.25,
    color: "#11493E",
    marginTop: Size.size6,
  },
  bgImg: {
    width: Size.size315,
    height: Size.size145,
    marginTop: Size.size20,
  },
  buttens: {
    width: size.size101,
    height: size.size28,
    backgroundColor: "#11493E",
    justifyContent: "center",
    alignItems: "center",

  },
  activeButten: {
    width: Size.size101,
    height: Size.size28,
    backgroundColor: "#fff",
    borderRadius: Size.size4,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtens: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#FCFCFC",
  },
  activeTextButtens: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "black",
  },
  textDay: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#1B3131",
  },
  svgView: {
    width: Size.size24,
    height: Size.size24,
    borderRadius: Size.size4,
    alignItems: "center",
    justifyContent: "center",
  },
  activeSvgView: {
    width: Size.size24,
    height: Size.size24,
    borderRadius: Size.size4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#347474",
  },
  taskesView: {
    width: Size.size315,
    height: Size.size55,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EDF3F4",
    marginTop:Size.size10
  },
  ViewTitle: {
    marginRight: Size.size80,
  },
  viewProject: {
    width: Size.size56,
    height: Size.size16,
    backgroundColor: "#38A98E",
    justifyContent: "center",
    alignItems: "center",
  },
  textProject: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: Size.size11,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#FCFCFC",
  },
  createTask: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#616062",
  },
  createTaskDate: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#949494",
  },
  eventView: {
    width: Size.size315,
    height: Size.size111,
    backgroundColor: "#FFFFFF",
    marginTop: Size.size15,
    borderRadius: Size.size6,
    flexDirection: "row",
  },
  colorView: {
    width: Size.size6,
    height: Size.size111,
    backgroundColor: "#F4C584",
  },
  titleEvenet: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#616062",
  },
  descEvent: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size14,
    letterSpacing: 0.25,
    color: "#616062",
  },
  createDateEvent: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#949494",
  },
});
export default Style;
