import React from "react";
import Size from "../../assets/Size";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";

function OrgnizerModal({ data,setData,setShowOrgnizer,showOrgnizer }) {
  const key='Orgnizer';
  const arr=[
    {title:'Name Surname',id:1},
    {title:'Name Surname',id:2},
    {title:'Name Surname',id:3},
    {title:'Name Surname',id:4},
    {title:'Name Surname',id:5},
    {title:'Name Surname',id:6},
    {title:'Name Surname',id:7},
    {title:'Name Surname',id:8},
    {title:'Name Surname',id:9},
    {title:'Name Surname',id:10},
    {title:'Name Surname',id:11},
    {title:'Name Surname',id:12},
    {title:'Name Surname',id:13},
    {title:'Name Surname',id:14},
    {title:'Name Surname',id:15},
    {title:'Name Surname',id:16},
  ]
  return (
    <Modal
      visible={showOrgnizer}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShowOrgnizer(!showOrgnizer)}>
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
          Participators
        </Text>
      </View>
      <View style={{height:Size.size460}}>
        <Check props={arr}  data={data} setData={setData} ki={key}/>
      </View>
      <TouchableOpacity style={{width: Size.size335,
        height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23}}
                        onPress={()=>setShowOrgnizer(!showOrgnizer)}
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

export default OrgnizerModal;
