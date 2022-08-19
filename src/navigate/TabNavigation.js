import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/pageHome/Home";
import Notification from "../screen/pageNotification/Notification";
import Statistic from "../screen/pageStatistic/Statistic";
import AcauntMe from "../screen/pageAcauntMe/AcauntMe";
import SvgHome from "../assets/svg/SvgHome";
import SvgNotif from "../assets/svg/SvgNotification";
import SvgStatic from "../assets/svg/SvgStatistic";
import SvgMe from "../assets/svg/SvgAcountMe";
import TabBar from "../components/TabBar";
import CreateTask from "../screen/createTask/createTask";
import CreateEvent from "../screen/createEvent/createEvent";
import CreateBook from "../screen/createBook/createBook";
import UpdateTaskes from "../screen/updateTaskes/UpdateTaskes";


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />} >
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
        <Tab.Screen name={"updateTaskes"} component={UpdateTaskes}  options={{
          headerShown: false,
        }} />
      </Tab.Navigator>
    </>
  );
}
