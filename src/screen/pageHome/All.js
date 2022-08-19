import React from "react";
import Events from "./Events";
import Taskes from "./Taskes";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import CalendarDate from "../../components/CalendarDate";
import Style from "./style";
import _ from "lodash";
import TaskChack from "../../components/TaskChack";

function All(props) {
  const AllList = [...props.taskList, ...props.eventList];
  const sortedAll = AllList.sort(
    (a, b) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime(),
  );
  console.log(new Date(sortedAll[sortedAll.length - 1].create_date).getTime());
  console.log(sortedAll);
  const renderItem = ({ item }) => (
    item.project ? <TouchableOpacity style={Style.taskesView} onPress={() => {
        props.navigation.navigate("updateTaskes", { item });
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
      </TouchableOpacity> :
      <View style={Style.eventView}>
        <View style={Style.colorView}>
        </View>
        <View>
          <View style={{ marginLeft: Size.size6 }}>
            <Text style={Style.titleEvenet}>{item.title}</Text>
          </View>
          <View style={{ marginLeft: Size.size6, marginTop: Size.size12 }}>
            <Text style={Style.descEvent}>{item.description}</Text>
          </View>
          <View style={{
            marginLeft: Size.size6,
            marginTop: Size.size12,
            justifyContent: "space-between",
            flexDirection: "row",
            width: Size.size305,
          }}>
            <Text style={Style.createDateEvent}>{item.create_date}|{item.time}</Text>
            <Text style={Style.createDateEvent}>{item.room}</Text>
          </View>
        </View>
      </View>
  );
  return (
    <>
      <FlatList data={sortedAll} renderItem={renderItem} keyExtractor={item => item.id}
                ListHeaderComponent={props.svg ? null : <View style={{ width: Size.size316, marginTop: Size.size31 }}>
                  <CalendarDate />
                </View>} />
    </>
  );
}

export default All;
