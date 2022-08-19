import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View, BackHandler } from "react-native";
import Bg from "../images/Rectangle.png";
import BgPlus from "../images/Polygon.png";
import size from "../assets/Size";
import SvgHome from "../assets/svg/SvgHome";
import SvgNotif from "../assets/svg/SvgNotification";
import SvgStatic from "../assets/svg/SvgStatistic";
import SvgMe from "../assets/svg/SvgAcountMe";
import SvgPlus from "../assets/svg/SvgPlus";
import SvgTask from "../assets/svg/SvgTask";
import SvgTaskStar from "../assets/svg/SvgTaskStar";
import SvgStar from "../assets/svg/SvgStar";
import SvgAir from "../assets/svg/SvgAir";
import BgPlusW from "../images/Polygon1.png";


function TabBar({ state, descriptors, navigation }) {
  const [active, setActive] = useState(true);

  const handlerTask = () => {
    setActive(!active);
    navigation.navigate("createtask");

  };
  const hendlerEvents = () => {
    setActive(!active);
    navigation.navigate("createevent");
  };
  const hendlerBook = () => {
    setActive(!active);
    navigation.navigate("createbook");
  };
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === "none") {
    return null;
  }
  return (
    <>
      <View>
        <TouchableOpacity style={{ alignItems: "center", zIndex: -1 }}>
          <ImageBackground source={Bg} style={{ width: size.size340, height: size.size70 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "absolute", bottom: size.size35, left: size.size140 }}
                          onPress={() => {
                            setActive(!active);
                          }}>
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
              <View style={{ flexDirection: "row", marginLeft: -20, position: "relative" }}>
                <TouchableOpacity style={{
                  width: size.size45,
                  height: size.size45,
                  backgroundColor: "#347474",
                  borderRadius: size.size50,
                  justifyContent: "center",
                  alignItems: "center",
                }} onPress={handlerTask}>
                  <SvgTask />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width: size.size45,
                  height: size.size45,
                  backgroundColor: "#347474",
                  borderRadius: size.size50,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  bottom: size.size20,
                }} onPress={hendlerEvents}>
                  <SvgTaskStar />
                  <View style={{ position: "absolute", right: size.size12, bottom: size.size12 }}>
                    <SvgStar />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width: size.size45,
                  height: size.size45,
                  backgroundColor: "#347474",
                  borderRadius: size.size50,
                  justifyContent: "center",
                  alignItems: "center",
                }} onPress={hendlerBook}>
                  <SvgAir />
                </TouchableOpacity>
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
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;
            const onPress = () => {
              setActive(true);
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

            if (index > 3) {
              return null;
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
    </>
  );
}

export default TabBar;
