import React, { useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import Check from "../ChackBox/Check";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import SvgBottom from "../../assets/svg/SvgBottom";
import Style from "../../screen/createEvent/style";
import Input from "../Input";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import CalendarDate from "../CalendarDate";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GreateModal from "./GreateModal";

function VacationModal({ setShowLeave,showLeave,show,setShow,greate,setGreate },props) {
  const sheetRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const key = "Type";
  const snapPoints = useMemo(() => ['70%','80%','100%'], [])
  const mouns= moment().format('MMM');
  const time = moment(date).format("hh:mm");
  return (
    <GestureHandlerRootView style={{height:'100%',position:'absolute',width:'100%'}}>
      <View style={{flex: 1, padding: 24,backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
    <BottomSheet
      snapPoints={snapPoints}
      ref={sheetRef}
      index={0}
      onClose={() => setOpen(!open)}
    >
     <BottomSheetView>
       <View style={{ marginLeft: Size.size25}}>
         <Text style={{
           fontFamily: "Montserrat",
           fontStyle: "normal",
           fontWeight: "500",
           fontSize: Size.size16,
           lineHeight: Size.size24,
           letterSpacing: 0.25,
           color: "#11493E",
         }}>Vacation</Text>
         <Text style={{
           fontFamily: "Montserrat",
           fontStyle: "normal",
           fontWeight: "500",
           fontSize: Size.size16,
           lineHeight: Size.size24,
           letterSpacing: 0.25,
           color: "#11493E",
           marginTop: Size.size10,
         }}
         >May 22 - 24, 2022</Text>
       </View>
       <View style={{width:Size.size400,alignItems:'center',height:Size.size252}}>
       <CalendarDate/>
       </View>
       <View style={{alignItems:'center'}}>
       <Input multiline style={Style.area} numberOfLines = {4} placeholder='Description' {...props}/>
       </View>
       <TouchableOpacity style={{
         width: Size.size335,
         height: Size.size38,
         backgroundColor: "#11493E",
         borderRadius: Size.size4,
         alignItems: "center",
         justifyContent: "center",
         marginLeft: Size.size20,
         marginRight: Size.size23,
       }}
                         onPress={() => {
                           setShow(!show)
                           setGreate(!greate)
                         }}
       >
         <Text style={{
           fontFamily: "Montserrat",
           fontStyle: "normal",
           fontWeight: "600",
           fontSize: Size.size14,
           lineHeight: Size.size16,
           letterSpacing: 0.25,
           color: "#FCFCFC",
         }}
         >Book</Text>
       </TouchableOpacity>
        </BottomSheetView>
    </BottomSheet>
      </View>

    </GestureHandlerRootView>
  );
}

export default VacationModal;
