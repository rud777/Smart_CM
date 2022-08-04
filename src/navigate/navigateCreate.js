import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screen/login/Login";
import Forgotpassword from "../screen/login/forgotpassword";
import Navigate from "./TabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "../screen/createTask/createTask";
import CreateEvent from "../screen/createEvent/createEvent";
const Stack = createNativeStackNavigator();

function NavigateCreate(props) {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'createtask'} component={CreateTask}/>
        <Stack.Screen name={'createevent'} component={CreateEvent}/>
      </Stack.Navigator>
  );
}

export default NavigateCreate;
