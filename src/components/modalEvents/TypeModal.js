import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";

function TypeModal({ showType,setShowType,data,setData }) {
  const key='Type';
  const arr=[
    {title:'Meeting',id:1},
    {title:'Teambuilding',id:2},
    {title:'Trainings',id:3},
    {title:'Events',id:4},
  ]
  return (
    <Modal
      visible={showType}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShowType(!showType)}>
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
      <View>
        <Check props={arr} data={data} setData={setData} ki={key}/>
      </View>
      <TouchableOpacity style={{width: Size.size335,
        height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23,marginTop:Size.size155}}
                        onPress={()=>setShowType(!showType)}
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

export default TypeModal;
