import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { BackHandler, Keyboard, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Input(props) {
  const { ...p } = props;
  useEffect(()=>{
    Keyboard.addListener("keyboardDidHide", () => {
      props.navigation.setOptions({
        tabBarStyle: { display: "flex" },
      })
    });
  },[])

  return (
    <>
      <TextInput {...p}
                 onFocus={() => props.navigation.setOptions({
                   tabBarStyle: { display: "none" },
                 })}
                 onBlur={() => props.navigation.setOptions({
                   tabBarStyle: { display: "flex" },
                 })}
      />
    </>
  );
}

export default Input;
