import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import SvgX from "../../assets/svg/SvgX";
import Check2 from "../ChackBox/Chack2";

function ParticipatorsModal({ setShowParticipators,showParticipators,data,setData }) {
  const key='Participators'
  const arr=[
    {title:'Frontend team',id:1},
    {title:'Backend team',id:2},
    {title:'Mobile team',id:3},
    {title:'Design team',id:4},
    {title:'Managers',id:5},
    {title:'Team Leads',id:6},
  ]
  return (
    <Modal
      visible={showParticipators}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShowParticipators(!showParticipators)}>
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
        <Check2 props={arr}  data={data} setData={setData} ki={key}/>
      </View>
      <TouchableOpacity style={{width: Size.size335,
        height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23}}
                        onPress={()=>setShowParticipators(!showParticipators)}
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

export default ParticipatorsModal;
