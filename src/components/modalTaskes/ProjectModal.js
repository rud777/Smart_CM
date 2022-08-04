import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import SvgX from "../../assets/svg/SvgX";
import CheckBox from "@react-native-community/checkbox";
import Check from "../Check";


function ProjectModal({ show, setData, setShow, data }) {
  const aray = [
    { title: "Project name 01",id:1 },
    { title: "Project name 02",id:2 },
    { title: "Project name 03",id:3 },
    { title: "Project name 04",id:4 },
  ];

  return (
    <Modal
      visible={show}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShow(!show)}>
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
          Select Project
        </Text>
      </View>
      <View>
        <Check props={aray} data={data} setData={setData}/>
      </View>
      <TouchableOpacity style={{width: Size.size335,
        height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23,marginTop:Size.size155}}
                        onPress={()=>setShow(!show)}
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

export default ProjectModal;
