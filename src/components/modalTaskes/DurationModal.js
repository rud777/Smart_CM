import React from "react";
import Size from "../../assets/Size";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import size from "../../assets/Size";

function DurationModal({ showDuration,setDuration,setShowDuration,duration }) {

  return (
    <Modal
      visible={showDuration}
      style={{ width: Size.size375, height: Size.size446 }}
    >
      <TouchableOpacity
        style={{ marginTop: Size.size23, justifyContent: "flex-end", flexDirection: "row", marginRight: Size.size23 }}
        onPress={() => setShowDuration(!showDuration)}>
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
          Actual duration
        </Text>
        <Text style={{fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: Size.size14,
          lineHeight: Size.size16,
          letterSpacing: 0.25,
          color: '#616062',
          marginTop:Size.size24
        }}>Select actual duration you spent on this task</Text>
        <View style={{flexDirection:'row'}}>
        <View style={{marginTop:Size.size24}}>
          <TouchableOpacity style={{width:Size.size108,height:Size.size32,borderWidth: Size.size1,
            borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center'}}
                            onPress={()=> setDuration('15 minute')}
          >
            {/*setDuration('15 minute')*/}
            <Text style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: Size.size14,
              lineHeight: Size.size16,
              letterSpacing: 0.25,
              color: '#949494',
            }}
            >15 minute</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:Size.size24,marginRight:Size.size15,marginLeft:Size.size15}}>
          <TouchableOpacity style={{width:Size.size108,height:Size.size32,borderWidth: Size.size1,
            borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center'}}
                            onPress={()=>setDuration('30 minute')}>
            <Text style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: Size.size14,
              lineHeight: Size.size16,
              letterSpacing: 0.25,
              color: '#949494',
            }}>30 minute</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:Size.size24}}>
          <TouchableOpacity style={{width:Size.size108,height:Size.size32,borderWidth: Size.size1,
            borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center'}}
                            onPress={()=>setDuration('2 hours')}>
            <Text style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: Size.size14,
              lineHeight: Size.size16,
              letterSpacing: 0.25,
              color: '#949494',
            }}>2 hours</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{marginTop:Size.size24}}>
            <TouchableOpacity style={{width:Size.size108,height:Size.size32,borderWidth: Size.size1,
              borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center'}}
                              onPress={()=>setDuration('1 hours')}>
              <Text style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Size.size14,
                lineHeight: Size.size16,
                letterSpacing: 0.25,
                color: '#949494',
              }}>1 hours</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:Size.size24,marginRight:Size.size15,marginLeft:Size.size15}}>
            <TouchableOpacity style={{width:Size.size108,height:Size.size32,borderWidth: Size.size1,
              borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center'}}
                              onPress={()=>setDuration('3 hours')}>
              <Text style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Size.size14,
                lineHeight: Size.size16,
                letterSpacing: 0.25,
                color: '#949494',
              }}>3 hours</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:Size.size24}}>
            <TouchableOpacity style={{width:Size.size108,height:Size.size32,borderWidth: Size.size1,
              borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center'}}
                              onPress={()=>setDuration('Half day')}>
              <Text style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Size.size14,
                lineHeight: Size.size16,
                letterSpacing: 0.25,
                color: '#949494',
              }}>Half day</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{width:Size.size350,height:Size.size32,borderWidth: Size.size1,
          borderStyle: "solid", borderColor: "#347474",borderRadius:Size.size4,justifyContent:'center',alignItems:'center',marginTop:Size.size24}}
                          onPress={()=>setDuration('Full day')}>
          <Text style={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: Size.size14,
            lineHeight: Size.size16,
            letterSpacing: 0.25,
            color: '#949494',
          }}>Full day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: Size.size335,
          height:Size.size38,backgroundColor:'#11493E',borderRadius:Size.size4,alignItems:'center',justifyContent:'center',marginLeft:Size.size20,marginRight:Size.size23,marginTop:Size.size155}}
                          onPress={()=>setShowDuration(!showDuration)}
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
      export default DurationModal;
