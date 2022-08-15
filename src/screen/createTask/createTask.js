import React, { useState } from "react";
import { Platform, Text, TextInput, View, KeyboardAvoidingView, Modal, TouchableOpacity } from "react-native";
import Style from "./style";
import Size from "../../assets/Size";
import ProjectModal from "../../components/modalTaskes/ProjectModal";
import SvgDown from "../../assets/svg/SvgDown";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import DateModal from "../../components/modalTaskes/DateModal";
import DurationModal from "../../components/modalTaskes/DurationModal";
import Input from "../../components/Input";

function CreateTask(props) {
  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [data, setData] = useState({});
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Style.container}
    >

      {!show ? <View style={Style.body}>
          <View style={Style.titleView}>
            <Text style={Style.title}>
              Create Task
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: Size.size50 }}>
            <Input style={Style.input} {...props}
                       placeholder="Title*"
            />
            <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size35}} onPress={() => setShow(!show)}>
                <Text style={Style.text}>{data["Projects"]||'Projects*'}</Text>
              <View style={{ position: "absolute",top:Size.size5,  right: Size.size10 }}>
                <SvgDown />
              </View>
            </TouchableOpacity>
            <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
            </View>
            <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size35}} onPress={() => setShowDate(!showDate)}>
              <Text style={Style.text}>{date||'Date'}</Text>
              <View style={{ position: "absolute",  right: Size.size8 }}>
                <SvgCalendar />
              </View>
            </TouchableOpacity>
            <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
            </View>
            <TouchableOpacity style={{flexDirection:"row",width:Size.size295,height:Size.size25,marginTop:Size.size35}} onPress={() => setShowDuration(!showDuration)}>
              <Text style={Style.text}>{duration||'Duration'}</Text>
              <View style={{ position: "absolute", top: Size.size5, right: Size.size10 }}>
                <SvgDown />
              </View>
            </TouchableOpacity>
            <View style={{width:Size.size319, height:Size.size1,backgroundColor:'#E3E3E3',marginTop:Size.size8}}>
            </View>
          </View>
          <TouchableOpacity style={Style.createButten}>
            <Text style={Style.createText}>Create</Text>
          </TouchableOpacity>
        </View>

        : <ProjectModal show={show} data={data} setShow={setShow} setData={setData} />
      }
      {showDate ? <DateModal showDate={showDate} setShowDate={setShowDate} date={date} setDate={setDate} /> : null}
      {showDuration ? <DurationModal setShowDuration={setShowDuration} showDuration={showDuration} duration={duration}
                                     setDuration={setDuration} /> : null}

    </KeyboardAvoidingView>
  );
}

export default CreateTask;
