import React, { useEffect, useMemo, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import style from "./style.js";
import image from "../../images/group.png";
import { useNavigation } from "@react-navigation/native";
import User from "../../assets/svg/SvgUser";
import Password from "../../assets/svg/SvgPassword";
import Ice from "../../assets/svg/SvgIce";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";



function Login(props) {
  const dispatch = useDispatch();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigation();
  const handlerChange = (key, val) => {
    setFormData({ ...formData, [key]: val });
  };
  const pressHandler = () => {
    navigate.navigate("forgotpassword");
  };
  const handlerLogin = () => {
    dispatch(loginRequest(formData, (data) => {
      if (data.success===true) {
        navigate.navigate("navigate");
      }
      if (data.success===false){
        alert(`${data?.errors?.password}
        ${data?.errors?.username}`)
      }
    }))
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <View style={style.body}>
        <View style={style.viewImage}>
          <Image source={image} style={style.image} />
        </View>
        <Text style={style.login}>Log in</Text>
        <View style={style.inputView}>
          <User />
          <TextInput style={style.inputEmail} placeholder="Email" autoComplete="email"
                     keyboardType="email-address"
                     onChangeText={(v) => handlerChange("username", v)}
          />
        </View>
        <View style={style.inputView}>
          <Password />
          <TextInput style={style.inputPassword} placeholder="Password" autoComplete="password"
                     secureTextEntry={isSecureEntry}
                     onChangeText={(v) => handlerChange("password", v)}

          />
          <Pressable
            onPress={() => {
              setIsSecureEntry(prev => !prev);
            }}>
            <Ice />
          </Pressable>
        </View>
        <TouchableOpacity style={style.buttens} onPress={handlerLogin}>
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
