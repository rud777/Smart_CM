import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/login/Login";
import Forgotpassword from "../screen/login/forgotpassword";

const Stack = createNativeStackNavigator();

function index(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'login'} component={Login}/>
        <Stack.Screen name={'forgotpassword'} component={Forgotpassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default index
