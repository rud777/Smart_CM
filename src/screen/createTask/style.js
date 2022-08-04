import { StyleSheet } from "react-native";
import size from "../../assets/Size";
import Size from "../../assets/Size";


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },
  body: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    maxWidth: Size.size340,
    marginLeft: Size.size21,
    marginRight: Size.size21,
  },
  titleView: {
    alignItems:'center',
    marginTop:Size.size36
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
  input:{
    width:Size.size313,
    borderBottomColor:'#E3E3E3',
    borderStyle: "solid",
    borderBottomWidth: size.size1,
    paddingLeft:Size.size10,
    marginTop:Size.size19
  },
  inputDown:{
    width:Size.size313,
    borderBottomColor:'#E3E3E3',
    borderStyle: "solid",
    borderBottomWidth: size.size1,
    paddingLeft:Size.size10,
    marginTop:Size.size19,
    position:'relative',
  },
  createButten:{
    width: Size.size335,
    height:Size.size38,
    backgroundColor:'#11493E',
    borderRadius:Size.size4,
    alignItems:'center',
    justifyContent:'center',
    marginTop:Size.size70
  },
  createText:{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: '#FCFCFC',
  }
});
export default style;
