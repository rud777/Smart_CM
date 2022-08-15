import React, { useState } from "react";
import moment from "moment";
import { Calendar } from "react-native-calendars";

function CalendarDate2({ date, setDate,setDayCalendar,dayCalendar }) {
  const currentDate = moment().format("YYYY-MM-DD");
  const [day, setDay] = useState();
  return (
    <>
      <Calendar
        hideDayNames = { true }
        markingType={'dot'}
        markedDates={{
          [currentDate]: {selected: true,  selectedColor: '#347474'},
          [day]: { selected: true, selectedColor: "yellow" },
        }}
        onDayPress={day => {
          setDate(day.dateString);
          setDay(day.dateString);
          setDayCalendar(day.day)
        }}
      />
    </>
  );
}

export default CalendarDate2;
