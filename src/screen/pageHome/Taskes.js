import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import CalendarDate from "../../components/CalendarDate";
import Style from "./style";
import TaskChack from "../../components/TaskChack";
import { useNavigation } from "@react-navigation/native";
import UpdateTaskes from "../updateTaskes/UpdateTaskes";

function Taskes( props ) {

  const eventList = [
    {
      id: 1,
      title: "Create Task",
      description: "Bob AI",
      create_date: "May 27,2022 ",
      create_duration:'15 minute'
    },
    {
      id: 2,
      title: "Research Dashboard",
      description: "New City",
      create_date: "May 27,2022",
      create_duration:'15 minute'
    },
    {
      id: 3,
      title: "Feedbacks",
      description: "Bob AI",
      create_date: "May 27,2022",
      create_duration:'15 minute'
    },
    {
      id: 4,
      title: "Sign up",
      description: "Mapllo",
      create_date: "May 27,2022 ",
      create_duration:'15 minute'
    },
    {
      id: 5,
      title: "Contact",
      description: "Broker ...",
      create_date: "May 27,2022 ",
      create_duration:'15 minute'
    },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity style={Style.taskesView} onPress={() => {
      props.navigation.navigate("updateTaskes",{item})
    }
    }>
      <TaskChack />
      <View style={Style.ViewTitle}>
        <Text style={Style.createTask}>{item.title}</Text>
        <Text style={Style.createTaskDate}>{item.create_date}|{item.create_duration}</Text>
      </View>
      <View style={Style.viewProject}>
        <Text style={Style.textProject}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList data={eventList} renderItem={renderItem} keyExtractor={item => item.id}
                ListHeaderComponent={ props.svg?null: <View style={{ width: Size.size316, marginTop: Size.size31 }}>
                  <CalendarDate />
                </View>} />
    </>
  );
}

export default Taskes;
