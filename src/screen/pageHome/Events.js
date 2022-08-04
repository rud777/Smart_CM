import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Style from "./style";
import Size from "../../assets/Size";
import CalendarDate from "../../components/CalendarDate";

function Events({ props }) {
  const eventList = useSelector(state => state.eventList);
  console.log(eventList,111111111);
  const renderItem = ({ item }) => (

    <View style={Style.eventView}>
      <View style={Style.colorView}>
      </View>
      <View>
        <View style={{marginLeft:Size.size6}}>
        <Text style={Style.titleEvenet}>{item.title}</Text>
        </View>
        <View style={{marginLeft:Size.size6,marginTop:Size.size12}}>
        <Text style={Style.descEvent}>{item.description}</Text>
        </View>
        <View style={{marginLeft:Size.size6,marginTop:Size.size12,justifyContent:'space-between', flexDirection:'row',width:Size.size305}}>
          <Text style={Style.createDateEvent}>{item.create_date}</Text>
          <Text style={Style.createDateEvent}>{item.room}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <FlatList data={eventList} renderItem={renderItem} keyExtractor={item => item.id} ListHeaderComponent={props?null:<View style={{width:Size.size316,marginTop:Size.size31}}>
        <CalendarDate />
      </View>}/>
    </>
  );
}

export default Events;
