import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CheckBox from '@react-native-community/checkbox'
import Style from "./style";
import Img from "../../images/Frame.png";
import Size from "../../assets/Size";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import CalendarDate from "../../components/CalendarDate";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { listEventRequest } from "../../store/actions";
import Events from "./Events";
import Taskes from "./Taskes";
import All from "./All";
import UpdateTaskes from "../updateTaskes/UpdateTaskes";


function Home(props) {
  const eventList = [
    {title:'Meeting with team',
      id:1,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      create_date:'May 30,2022 ',
      time:'12:00 - 15:00',
      room:'Meeting room 306',
    },
    {title:'Meeting with team',
      id:2,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      create_date:'May 19,2022 ',
      time:'12:00 - 15:00',
      room:'Meeting room 306',
    },
    {title:'Meeting with team',
      id:3,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      create_date:'May 24,2022 ',
      time:'12:00 - 15:00',
      room:'Meeting room 306',
    },
    {title:'Meeting with team',
      id:4,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      create_date:'May 28,2022  ',
      time:'12:00 - 15:00',
      room:'Meeting room 306',
    },
    {title:'Meeting with team',
      id:5,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      create_date:'May 09,2022 ',
      time:'12:00 - 15:00',
      room:'Meeting room 306',
    },
    {title:'Meeting with team',
      id:6,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      create_date:'May 05,2022 ',
      time:'12:00 - 15:00',
      room:'Meeting room 306',
    }
  ]
  const taskList = [
    {
      id: 7,
      title: "Create Task",
      project: "Bob AI",
      create_date: "May 27,2022 ",
      create_duration:'15 minute'
    },
    {
      id: 8,
      title: "Research Dashboard",
      project: "New City",
      create_date: "May 19,2022",
      create_duration:'15 minute'
    },
    {
      id: 9,
      title: "Feedbacks",
      project: "Bob AI",
      create_date: "May 03,2022",
      create_duration:'15 minute'
    },
    {
      id: 10,
      title: "Sign up",
      project: "Mapllo",
      create_date: "May 30,2022 ",
      create_duration:'15 minute'
    },
    {
      id: 11,
      title: "Contact",
      project: "Broker ...",
      create_date: "May 20,2022 ",
      create_duration:'15 minute'
    },
  ];
  const dispach=useDispatch()
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [svg, setSvg] = useState(true);


  const { employee_information } = useSelector(state => state.formData);
  const  auth_key=useSelector(state=>state.auth_key)
  const handlerButten = () => {
    setActive(false);
    setActive1(true);
    setActive2(true);
  };
  const handlerButten1 = () => {
    dispach(listEventRequest(auth_key))
    setActive(true);
    setActive1(false);
    setActive2(true);
  };
  const handlerButten2 = () => {
    setActive(true);
    setActive1(true);
    setActive2(false);
  };
  const currentDate = moment().format("DD MMMM YYYY");
  return (
    <View style={Style.body}>
      <Text style={Style.title}>Hello, {employee_information?.first_name}</Text>
      <View style={{ alignItems: "center", width: Size.size315, height: Size.size145 }}>
        <Image source={Img} style={Style.bgImg} />
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        width: Size.size316,
        height: Size.size28,
        borderRadius: Size.size4,
        marginTop: Size.size37,
      }}>
        <TouchableOpacity style={active ? Style.buttens : Style.activeButten} onPress={handlerButten}>
          <Text style={active ? Style.textButtens : Style.activeTextButtens}>Taskes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={active1 ? Style.buttens : Style.activeButten} onPress={handlerButten1}>
          <Text style={active1 ? Style.textButtens : Style.activeTextButtens}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={active2 ? Style.buttens : Style.activeButten} onPress={handlerButten2}>
          <Text style={active2 ? Style.textButtens : Style.activeTextButtens}>All</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        width: Size.size308,
        justifyContent: "space-between",
        flexDirection: "row",
        marginLeft: Size.size7,
        marginTop: Size.size25,
      }}>
        <Text style={Style.textDay}>
          {currentDate}
        </Text>
        <TouchableOpacity onPress={() => setSvg(!svg)} style={svg ? Style.svgView : Style.activeSvgView}>
          <SvgCalendar iconColor={svg ? "#347474" : "#FCFCFC"} />
        </TouchableOpacity>
      </View>
      {active? null:<Taskes svg={svg} {...props} taskList={taskList} />}
      {active1?null: <Events props={svg} eventList={eventList}/>}
      {active2?null: <All svg={svg} taskList={taskList} eventList={eventList}/>}
    </View>
  );
}

export default Home;

