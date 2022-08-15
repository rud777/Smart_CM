import React from "react";
import Size from "../../assets/Size";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";

function RoomModal({ showRoom,setShowRoom,setData,data }) {
  const key='Room';
  const arr=[
    {title:'Meeting rooms',id:1},
    {title:'Meeting room1',id:2},
  ]
  return (
    <Modal
      visible={showRoom}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShowRoom(!showRoom)}>
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
          Choose event type
        </Text>
      </View>
      <View style={{height:Size.size460}}>
        <Check props={arr}  data={data} setData={setData} ki={key}/>
      </View>
      <TouchableOpacity style={{width: Size.size335,
        height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23}}
                        onPress={()=>setShowRoom(!showRoom)}
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

    </Modal>
  );
}

export default RoomModal;
