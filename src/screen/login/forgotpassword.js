import React from 'react';
import { Image, Platform, Text, TextInput, TouchableOpacity, View ,KeyboardAvoidingView} from "react-native";
import style from "./style";
import image from "../../images/group.png";
import Svg from "../../images/user.png";
import SvgLock from "../../images/lock.png";
import { useNavigation } from "@react-navigation/native";
import Password from "../../assets/svg/SvgPassword";

function Forgotpassword(props) {
  const navigate=useNavigation()
  const pressHandler = () => {
    navigate.navigate('login')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <View style={style.body}>
        <View style={style.viewImage}>
          <Image source={image} style={style.image}/>
        </View>
        <Text style={style.login}>Forgot Password</Text>
        <View style={style.textView}>
        <Text style={style.text}>Enter your email address and we'll email you your new  password</Text>
        </View>
        <View style={style.inputView}>
          <Password/>
          <TextInput style={style.inputEmail} placeholder="Email" autoComplete="email"
                     keyboardType="email-address"/>
        </View>
        <TouchableOpacity style={style.buttens}>
          <Text style={style.loginText}>Send</Text>
        </TouchableOpacity>
        <View style={style.forgetView}>
          <Text style={style.forget} onPress={pressHandler}>
            Back To <Text style={style.loginColor}>Login</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
    );
}

export default Forgotpassword;
