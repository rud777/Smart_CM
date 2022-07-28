import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Pressable, Platform ,KeyboardAvoidingView} from "react-native";
import style from './style.js';
import image from '../../images/group.png'
import {useNavigation} from'@react-navigation/native'
import User from '../../assets/svg/SvgUser'
import Password from '../../assets/svg/SvgPassword'
import Ice from '../../assets/svg/SvgIce'


function Login(props) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const navigate=useNavigation()
  const pressHandler = () => {
    navigate.navigate('forgotpassword')
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
      <Text style={style.login}>Log in</Text>
      <View style={style.inputView}>
        <User/>
        <TextInput style={style.inputEmail} placeholder="Email" autoComplete="email"
                   keyboardType="email-address"/>
      </View>
      <View style={style.inputView}>
        <Password/>
        <TextInput style={style.inputPassword} placeholder="Password" autoComplete="password" secureTextEntry={isSecureEntry}
                   />
        <Pressable
          onPress={() => {
            setIsSecureEntry(prev => !prev);
          }}>
          <Ice/>
        </Pressable>
      </View>
      <TouchableOpacity style={style.buttens}>
        <Text style={style.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={style.forgetView}>
        <Text style={style.forget} onPress={pressHandler}>
          Forgot password?
        </Text>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}


export default Login;
