import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Size from '../../assets/Size'
import ChackBoxP from "./ChackBoxP";

function Check2({props,data,setData,ki}) {
  const [toggleCheckBox, setToggleCheckBox] = useState()
  const changeValue=(item,kay,value)=>{
    setToggleCheckBox(item.index)
    setData({ ...data, [kay]: value })
  }

  return (
    <View style={{marginTop:Size.size27}}>
      <FlatList data={props} renderItem={item=> (
        <View style={{marginLeft:Size.size16,marginTop:Size.size20}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox===item.index}
              onValueChange={() => changeValue(item,ki,item.item.title)
              }
            />
            <Text>{item.item.title}</Text>
          </View>
          <View style={{width:Size.size335, height:Size.size1,backgroundColor:'#E3E3E3'}}>
          </View>
          {toggleCheckBox===item.index?<ChackBoxP/>:null}
        </View>
      )
      } keyExtractor={item =>item.id} />

    </View>
  );
}

export default Check2;
