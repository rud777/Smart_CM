import React, { useEffect, useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import Style from "../createEvent/style";
import Size from "../../assets/Size";
import SvgDown from "../../assets/svg/SvgDown";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import TypeModal from "../../components/modalEvents/TypeModal";
import OrgnizerModal from "../../components/modalEvents/OrgnizerModal";
import ParticipatorsModal from "../../components/modalEvents/ParticipatorsModal";
import RoomModal from "../../components/modalEvents/RoomModal";
import SvgLocation from "../../assets/svg/SvgLocation";
import DateModal from "../../components/modalTaskes/DateModal";
import DurationModal from "../../components/modalTaskes/DurationModal";
import Input from "../../components/Input";
import GreateModalEvents from "../../components/modalEvents/GreateModalEvents";

function CreateEvent(props) {
  const [showType, setShowType] = useState(false);
  const [showOrgnizer, setShowOrgnizer] = useState(false);
  const [showParticipators, setShowParticipators] = useState(false);
  const [showRoom, setShowRoom] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [data, setData] = useState({});
  const [showDuration, setShowDuration] = useState(false);
  const [greate,setGreate]=useState(false)
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();

if (greate){
  props.navigation.setOptions({
    tabBarStyle: { display: "none" },
  })
}else {
  props.navigation.setOptions({
    tabBarStyle: { display: "flex" },
  })
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Style.container}>
      <ScrollView style={Style.body}>
        <View style={{marginBottom:Size.size120}}>
        <View style={Style.titleView}>
          <Text style={Style.title}>
            Create New Events
          </Text>
        </View>
        <View style={Style.chooseView}>
          <Text style={Style.chooseText}>Choose event type*</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: Size.size15 }}>
          <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size35}} onPress={() => setShowType(!showType)}>
            <Text style={Style.text}>{data['Type']||'Type'}</Text>
            <View style={{ position: "absolute", top: Size.size5, right: Size.size10 }}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
          </View>
          <Input style={Style.input} {...props}
                     placeholder="Event Title*"
          />
          <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size15}} onPress={() => setShowOrgnizer(!showOrgnizer)}>
            <Text style={Style.text}>{data['Orgnizer']||'Orgnizer'}</Text>

            <View style={{ position: "absolute", top: Size.size5, right: Size.size10 }}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
          </View>
          <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size15}} onPress={() => setShowParticipators(!showParticipators)}>
            <Text style={Style.text}>{data["Participators"]||'Participators*'}</Text>
            <View style={{ position: "absolute", top: Size.size5, right: Size.size10 }}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
          </View>
          <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size15}} onPress={() => setShowRoom(!showRoom)}>
            <Text style={Style.text}>{data["Room"]||'Room'}</Text>
            <View style={{ position: "absolute", top: Size.size5, right: Size.size10 }}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Input style={Style.inputDown} {...props}
                       placeholder="1 Alek Manukyan, Gyumri"
            />
            <View style={{ position: "absolute", top: Size.size18, right: Size.size17}}>
              <SvgLocation />
            </View>
          </View>
          <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size15}} onPress={() => setShowDate(!showDate)}>
            <Text style={Style.text}>{date||'Date'}</Text>
            <View style={{position:'absolute',top:Size.size5,right:Size.size8}}>
              <SvgCalendar />
            </View>
          </TouchableOpacity>
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}} onPress={() => setShowDuration(!showDuration)}>
          </View>
          <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size15}}>
            <Text style={Style.text}>{duration||'Duration'}</Text>
            <View style={{position:'absolute',top:Size.size5,right:Size.size10}}>
              <SvgDown />
            </View>
          </TouchableOpacity >
          <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}} onPress={() => setShowDuration(!showDuration)}>
          </View>
          <Input multiline style={Style.area} numberOfLines = {4} placeholder='Description' {...props}/>
        </View>
        <TouchableOpacity style={Style.createButten} onPress={()=>{
          setGreate(!greate)
        }}>
          <Text style={Style.createText}>Create</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      {showType ? <TypeModal setShowType={setShowType} showType={showType} data={data} setData={setData} /> : null}
      {showRoom ? <RoomModal setShowRoom={setShowRoom} showRoom={showRoom} data={data} setData={setData} /> : null}
      {setShowParticipators ? <ParticipatorsModal setShowParticipators={setShowParticipators} showParticipators={showParticipators} data={data} setData={setData} /> : null}
      {showOrgnizer ? <OrgnizerModal setShowOrgnizer={setShowOrgnizer} showOrgnizer={showOrgnizer} data={data}
                                     setData={setData} /> : null}
      {showDate?<DateModal showDate={showDate} setShowDate={setShowDate} data={date} setDate={setDate} />:null}
      {showDuration?<DurationModal setShowDuration={setShowDuration} showDuration={showDuration} duration={duration} setDuration={setDuration}/>:null}
      {greate?<GreateModalEvents greate={greate} setGreate={setGreate}/>:null}
    </KeyboardAvoidingView>
  );
}

export default CreateEvent;
