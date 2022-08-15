import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../createEvent/style";
import Size from "../../assets/Size";
import SvgDown from "../../assets/svg/SvgDown";
import CalendarDate2 from "../../components/CalendarDate2";
import Input from "../../components/Input";
import BookLeaveModal from "../../components/modalBook/BookLeaveModal";
import RBSheet from "react-native-raw-bottom-sheet";
import { rgbaColor } from "react-native-reanimated/lib/types/lib";
import VacationModal from "../../components/modalBook/VacationModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GreateModal from "../../components/modalBook/GreateModal";

function CreateBook(props) {
  const [date, setDate] = useState();
  const [showLeave,setShowLeave]=useState(false)
  const [data,setData]=useState({})
  const [dayCalendar, setDayCalendar] = useState();
  const [duration, setDuration] = useState();
  const [hourly, setHourly] = useState();
  const [vacation,setVacation]=useState()
  const [show,setShow]=useState(false)
  const [select,setSelect]=useState(false)
  const [greate,setGreate]=useState(false)
  if(!showLeave){
    props.navigation.setOptions({
      tabBarStyle: { display: "flex" },
    })
  }
  if (show){
    props.navigation.setOptions({
      tabBarStyle: { display: "none" },
    })
  }
  if (greate){
    props.navigation.setOptions({
      tabBarStyle: { display: "none" },
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Style.container}>
      <ScrollView style={Style.body}>
        <View style={{marginBottom:Size.size40}}>
          <View style={Style.titleView}>
            <Text style={Style.title}>
              Book your leave time
            </Text>
          </View>
          <View style={Style.chooseView}>
            <Text style={Style.chooseText}>Choose book leave type*</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size15}} onPress={()=>{
              setShowLeave(!showLeave)
              setHourly(false)
              setVacation(false)
              setShow(false)
              props.navigation.setOptions({
                tabBarStyle: { display: "none" },
              })
            }}>
              <Text style={Style.text}>{data['Type']||'Type'}</Text>
              <View style={{position:'absolute',top:Size.size5,right:Size.size10}}>
                <SvgDown />
              </View>
            </TouchableOpacity>
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}} onPress={() => setShowDuration(!showDuration)}>
          </View>
          </View>
          <View style={{marginTop:Size.size23}}>
          <CalendarDate2  setDayCalendar={setDayCalendar} date={date}  setDate={setDate}/>
          </View>
            <Input multiline style={Style.area} numberOfLines = {4} placeholder='Description' {...props}/>
          </View>
          <TouchableOpacity style={Style.createButten} onPress={()=>{
            setSelect(!select)
            setShowLeave(!showLeave)
            setGreate(!greate)
          }} >
            <Text style={Style.createText}>Create</Text>
          </TouchableOpacity>
      </ScrollView>
      {showLeave?<BookLeaveModal show={show} setShow={setShow}  vacation={vacation} setVacation={setVacation} dayCalendar={dayCalendar} hourly={hourly} setHourly={setHourly} select={select} setSelect={setSelect} duration={duration} setDuration={setDuration} showLeave={showLeave} setShowLeave={setShowLeave} data={data} setData={setData}/>:null}
      {show&&vacation?<VacationModal show={show} setShow={setShow}  showLeave={showLeave} setShowLeave={setShowLeave} greate={greate} setGreate={setGreate}/>:null}
      {greate&&!showLeave?<GreateModal greate={greate} setGreate={setGreate}/>:null}
    </KeyboardAvoidingView>
  );
}

export default CreateBook;



