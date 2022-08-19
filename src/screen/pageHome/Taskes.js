import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import CalendarDate from "../../components/CalendarDate";
import Style from "./style";
import TaskChack from "../../components/TaskChack";

function Taskes( props ) {
  console.log(props.taskList);

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
        <Text style={Style.textProject}>{item.project}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList data={props.taskList} renderItem={renderItem} keyExtractor={item => item.id}
                ListHeaderComponent={ props?null: <View style={{ width: Size.size316, marginTop: Size.size31 }}>
                  <CalendarDate />
                </View>} />
    </>
  );
}

export default Taskes;
