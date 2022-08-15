import React, { useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Size from "../../assets/Size";
import CalendarDate from "../CalendarDate";
import Input from "../Input";
import Style from "../../screen/createEvent/style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgGreate from "../../assets/svg/SvgGreate";
import SvgX from "../../assets/svg/SvgX";

function GreateModal({ greate,setGreate }) {
  const snapPoints = useMemo(() => ["45%", "80%", "100%"], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <GestureHandlerRootView style={{ height: "100%", position: "absolute", width: "100%" }}>
      <View style={{ flex: 1, padding: 24, backgroundColor: "rgba(52, 52, 52, 0.8)" }}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}
        >
          <TouchableOpacity
            style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
            onPress={() => setGreate(!greate)}>
            <SvgX />
          </TouchableOpacity>
          <View style={{alignItems:'center',marginTop:Size.size17}}>
            <SvgGreate />
            <Text style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: Size.size16,
              lineHeight: Size.size24,
              letterSpacing: 0.25,
              color: '#11493E',
              marginTop:Size.size32
            }}>Greate !</Text>
            <Text style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: Size.size14,
              lineHeight: Size.size16,
              letterSpacing: 0.25,
              color: '#6B6A6C',
              marginTop:Size.size29
            }}>Time successfully booked</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default GreateModal;
