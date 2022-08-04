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
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import BgPlus from "../images/Polygon.png";
import BgPlusW from "../images/Polygon1.png";
import Air from "../images/air.png";
import size from "../assets/Size";
import { useState } from "react";
import SvgTaskStar from "../assets/svg/SvgTaskStar";
import SvgStar from "../assets/svg/SvgStar";
import SvgAir from "../assets/svg/SvgAir";
import NavigateCreate from "./navigateCreate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function TabNavigation() {
  const [active, setActive] = useState(true);
  const navigate = useNavigation();
  const handlerTask = () => {
    navigate.navigate('createtask')
  }
  const hendlerEvents = () => {
    navigate.navigate('createevent')
  }
  return (
    <>

      <Tab.Navigator
        tabBar={(props) => <Bar {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: <SvgHome />,
          headerShown: false,
        }} />
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
        <Tab.Screen name={'navigateTask'} component={NavigateCreate}
                    options={{
                       headerShown: false,
                    }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={{ position: "absolute", bottom: size.size35, left: size.size140 }}
                        onPress={() => setActive(!active)}>
        {active ? <ImageBackground source={BgPlus} style={{
            width: size.size97,
            height: size.size80,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 40,
          }}>
            <SvgPlus />
          </ImageBackground> :
          <>
            <View style={{flexDirection:"row",marginLeft:-20,position:'relative'}}>
            <TouchableOpacity style={{ width: size.size45, height: size.size45, backgroundColor: "#347474",borderRadius:size.size50,justifyContent:'center',alignItems:'center' }} onPress={handlerTask}>
              <SvgTask />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: size.size45, height: size.size45, backgroundColor: "#347474",borderRadius:size.size50,justifyContent:'center',alignItems:'center' ,position:'relative',bottom:20}} onPress={hendlerEvents}>
              <SvgTaskStar />
              <View style={{position:'absolute',right:size.size12,bottom:size.size12}}>
                <SvgStar/>
              </View>
            </TouchableOpacity>
            <View style={{ width: size.size45, height: size.size45, backgroundColor: "#347474",borderRadius:size.size50,justifyContent:'center',alignItems:'center' }}>
              <SvgAir/>
            </View>
            </View>

            <ImageBackground source={BgPlusW} style={{
              width: size.size97,
              height: size.size80,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 40,
            }}>
              <SvgPlus iconColor={"#347474"} />
            </ImageBackground>
          </>
        }
      </TouchableOpacity>
    </>
  );
}
