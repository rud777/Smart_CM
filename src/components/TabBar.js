import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Bg from "../images/Rectangle.png";
import BgPlus from "../images/Polygon.png";
import size from "../assets/Size";
import SvgHome from "../assets/svg/SvgHome";
import SvgNotif from "../assets/svg/SvgNotification";
import SvgStatic from "../assets/svg/SvgStatistic";
import SvgMe from "../assets/svg/SvgAcountMe";


function TabBar({ state, descriptors, navigation }) {
  return (
    <View>
      <TouchableOpacity style={{ alignItems: "center", zIndex: -1 }}>
        <ImageBackground source={Bg} style={{ width: size.size340, height: size.size70 }} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          const Svg = {
            Home: <SvgHome iconColor={isFocused ? "#347474" : "#fff"} />,
            notification: <SvgNotif iconColor={isFocused ? "#347474" : "#fff"} />,
            statistic: <SvgStatic iconColor={isFocused ? "#347474" : "#fff"} />,
            acauntme: <SvgMe iconColor={isFocused ? "#347474" : "#fff"} />,
          };
          if (route.name === 'navigateTask') {
            return null
          }
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center", zIndex: 1, marginTop: -60 }}
              key={route.key}
            >
              <View style={isFocused ? {
                width: size.size44,
                height: size.size44,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: size.size50,
              } : { width: size.size44, height: size.size44, alignItems: "center", justifyContent: "center" }}>
                {Svg[route.name]}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;
