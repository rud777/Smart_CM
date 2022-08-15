import React from "react";
import Size from "../../assets/Size";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import CalendarDate from "../CalendarDate";
import CalendarDate2 from "../CalendarDate2";

function DateModal({ showDate, setShowDate,date,setDate }) {
  return (
    <Modal
      visible={showDate}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShowDate(!showDate)}>
        <SvgX />
      </TouchableOpacity>
      <View style={{ width: Size.size375, alignItems: "center", marginTop: Size.size5 }}>
        <Text style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: Size.size16,
          lineHeight: Size.size24,
          letterSpacing: 0.25,
          color: "#11493E",
        }}>
          Select Day
        </Text>
        <CalendarDate2 date={date} setDate={setDate} />
        <TouchableOpacity style={{width: Size.size335,
          height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23,marginTop:Size.size155}}
                          onPress={()=>setShowDate(!showDate)}
        >
          <Text style={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: Size.size14,
            lineHeight: Size.size16,
            letterSpacing: 0.25,
            color: '#FCFCFC',
          }}
          >Select</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default DateModal;
