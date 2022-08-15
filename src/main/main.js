import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/login/Login";
import Forgotpassword from "../screen/login/forgotpassword";
import TabNavigation from "../navigate/TabNavigation";
import Navigate from '../navigate/TabNavigation'
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

function main(props) {
  const  auth_key=useSelector(state=>state.auth_key)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={auth_key?'navigate':'login'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'login'} component={Login}/>
        <Stack.Screen name={'forgotpassword'} component={Forgotpassword}/>
        <Stack.Screen name={'navigate'} component={Navigate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default main
