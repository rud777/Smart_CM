import React, { useState } from "react";
import { Platform, Text, TextInput, View, KeyboardAvoidingView, Modal, TouchableOpacity } from "react-native";
import Style from "./style";
import Size from "../../assets/Size";
import ProjectModal from "../../components/modalTaskes/ProjectModal";
import SvgDown from "../../assets/svg/SvgDown";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import DateModal from "../../components/modalTaskes/DateModal";
import DurationModal from "../../components/modalTaskes/DurationModal";

function CreateTask(props) {
  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [data, setData] = useState();
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
            <TextInput style={Style.input}
                       placeholder="Title*"
            />
            <View style={{flexDirection:'row'}}>
            <TextInput style={Style.inputDown}
                       placeholder="Projects*"
                       onPressIn={() => setShow(!show)}
                       value={data}
            />
              <View style={{position:'absolute',top:Size.size37,right:Size.size10}}>
            <SvgDown />
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={Style.inputDown}
                         placeholder="Date"
                         onPressIn={() => setShowDate(!showDate)}
                         value={date}
              />
              <View style={{position:'absolute',top:Size.size37,right:Size.size10}}>
                <SvgCalendar />
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={Style.inputDown}
                         placeholder="Duration"
                         onPressIn={() => setShowDuration(!showDuration)}
                         value={duration}
              />
              <View style={{position:'absolute',top:Size.size37,right:Size.size10}}>
                <SvgDown />
              </View>
            </View>
          </View>
        <TouchableOpacity style={Style.createButten}>
          <Text style={Style.createText}>Create</Text>
        </TouchableOpacity>
        </View>

        : <ProjectModal show={show} data={data} setShow={setShow} setData={setData} />
      }
      {showDate?<DateModal showDate={showDate} setShowDate={setShowDate} date={date} setDate={setDate} />:null}
      {showDuration?<DurationModal setShowDuration={setShowDuration} showDuration={showDuration} duration={duration} setDuration={setDuration}/>:null}

    </KeyboardAvoidingView>
  );
}

export default CreateTask;
