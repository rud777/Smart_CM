import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Size from "../../assets/Size";
import CalendarDate from "../../components/CalendarDate";
import Style from "./style";
import TaskChack from "../../components/TaskChack";

function Taskes({ props }) {

  const eventList = [
    {
      title: "Create Task",
      description: "Bob AI",
      create_date: "May 27,2022 | 15 minute",
    },
    {
      title: "Research Dashboard",
      description: "New City",
      create_date: "May 27,2022 | 15 minute",
    },
    {
      title: "Feedbacks",
      description: "Bob AI",
      create_date: "May 27,2022 | 15 minute",
    },
    {
      title: "Sign up",
      description: "Mapllo",
      create_date: "May 27,2022 | 15 minute",
    },
    {
      title: "Contact",
      description: "Broker ...",
      create_date: "May 27,2022 | 15 minute",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={Style.taskesView}>
      <TaskChack />
      <View style={Style.ViewTitle}>
        <Text style={Style.createTask}>{item.title}</Text>
        <Text style={Style.createTaskDate}>{item.create_date}</Text>
      </View>
      <View style={Style.viewProject}>
        <Text style={Style.textProject}>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <>
      <FlatList data={eventList} renderItem={renderItem} keyExtractor={item => item.index}
                ListHeaderComponent={props ? null : <View style={{ width: Size.size316, marginTop: Size.size31 }}>
                  <CalendarDate />
                </View>} />
    </>
  );
}

export default Taskes;
