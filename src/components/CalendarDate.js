import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Size from "../assets/Size";
import moment from "moment";

function CalendarDate({ date, setDate }) {
  const currentDate = moment().format("YYYY-MM-DD");
  const [day, setDay] = useState();

  return (
    <>
      <Calendar
        markingType="dot"
        markedDates={{
          [currentDate]: { selected: true, selectedColor: "#11493E" },
          [day]: { selected: true, selectedColor: "yellow" },
        }}
        onDayPress={day => {
          console.log("selected day", day.dateString);
          setDate(day.dateString);
          setDay(day.dateString)
        }}
      />
    </>
  );

}

export default CalendarDate;
