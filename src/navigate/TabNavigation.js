import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/pageHome/Home";
import Notification from "../screen/pageNotification/Notification";
import Statistic from "../screen/pageStatistic/Statistic";
import AcauntMe from "../screen/pageAcauntMe/AcauntMe";
import Icon from "react-native-vector-icons/MaterialIcons";
import SvgHome from "../assets/svg/SvgHome";
import SvgNotif from "../assets/svg/SvgNotification";
import SvgStatic from "../assets/svg/SvgStatistic";
import SvgMe from "../assets/svg/SvgAcountMe";
import SvgPlus from "../assets/svg/SvgPlus";
import SvgTask from "../assets/svg/SvgTask";
import Bar from "../components/TabBar";
import { Image, ImageBackground, Keyboard, TouchableOpacity, View } from "react-native";
import BgPlus from "../images/Polygon.png";
import BgPlusW from "../images/Polygon1.png";
import Air from "../images/air.png";
import size from "../assets/Size";
import { useEffect, useLayoutEffect, useState } from "react";
import SvgTaskStar from "../assets/svg/SvgTaskStar";
import SvgStar from "../assets/svg/SvgStar";
import SvgAir from "../assets/svg/SvgAir";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "../screen/createTask/createTask";
import CreateEvent from "../screen/createEvent/createEvent";
import CreateBook from "../screen/createBook/createBook";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function TabNavigation() {
  const [active, setActive] = useState(true);
  const navigate = useNavigation();
  const [showTab, setShowTab] = useState(true);
  useEffect(() => {
    const DidShow = Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    const DidHide = Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      DidShow.remove()
      DidHide.remove()
    };
  }, []);

  const _keyboardDidShow = (e) => {
    setShowTab(false);
  };

  const _keyboardDidHide = () => {
    setShowTab(true);
  };


  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <Bar {...props} showTab={showTab}/>} >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: <SvgHome />,
          headerShown: false,
        }}
        />
        <Tab.Screen name="notification" component={Notification}
                    options={{
                      tabBarIcon: <SvgNotif />, headerShown: false,
                    }}
        />
        <Tab.Screen name="statistic" component={Statistic}
                    options={{
                      tabBarIcon: <SvgStatic />, headerShown: false,
                    }}
        />
        <Tab.Screen name="acauntme" component={AcauntMe}
                    options={{
                      tabBarIcon: <SvgMe />, headerShown: false,
                    }}
        />
         <Tab.Screen name={"createtask"} component={CreateTask}  options={{
          headerShown: false,
        }} />
        <Tab.Screen name={"createevent"} component={CreateEvent}  options={{
          headerShown: false,
        }} />
        <Tab.Screen name={"createbook"} component={CreateBook}  options={{
          headerShown: false,
        }} />
      </Tab.Navigator>
    </>
  );
}
