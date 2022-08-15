import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import Check from "../ChackBox/Check";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import SvgBottom from "../../assets/svg/SvgBottom";
import Style from "../../screen/createEvent/style";
import Input from "../Input";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import * as Animatable from 'react-native-animatable'
import { GestureHandlerRootView } from "react-native-gesture-handler";

function BookLeaveModal({
                          showLeave,
                          setShowLeave,
                          setData,
                          data,
                          setDuration,
                          duration,
                          select,
                          setSelect,
                          setHourly,
                          hourly,
                          dayCalendar,
                          setVacation,
                          vacation,
                          setShow,
                          show,
                        }, props) {
  const sheetRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const key = "Type";
  const mouns = moment().format("MMM");
  const snapPoints = useMemo(() => ['70%','80%','100%'], [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const arr = [
    { title: "Hourly leave", id: 1 },
    { title: "Day off", id: 2 },
    { title: "Work remotely", id: 3 },
    { title: "Vacation", id: 4 },
  ];
  const time = moment(date).format("hh:mm");
  return (
    <GestureHandlerRootView style={{height:'100%',position:'absolute',width:'100%'}}>
    <View style={{flex: 1, padding: 24,backgroundColor: 'rgba(52, 52, 52, 0.5)'}}>

    <BottomSheet
      snapPoints={snapPoints}
      ref={sheetRef}
      index={0}
      onChange={handleSheetChanges}
    >
      <Animatable.View
        animation={'fadeInUp'}
        delay={500}
        easing={'ease-in-out'}
        duration={400}
      >
      {hourly && select ? <View>
          <View style={{ marginLeft: Size.size25, marginTop: Size.size30 }}>
            <Text style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: Size.size16,
              lineHeight: Size.size24,
              letterSpacing: 0.25,
              color: "#11493E",
            }}>Hourly leave</Text>
            <Text style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: Size.size16,
              lineHeight: Size.size24,
              letterSpacing: 0.25,
              color: "#11493E",
              marginTop: Size.size23,
            }}
            >{`${mouns} ${dayCalendar}`}</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: Size.size22 }}>
            <TouchableOpacity
              onPress={() => setOpenTime(true)}
              style={{
                backgroundColor: "#347474",
                width: Size.size289,
                height: Size.size38,
                borderRadius: Size.size4,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <View style={{ marginLeft: Size.size13 }}>
                <SvgCalendar iconColor={"#ffffff"} />
              </View>
              <Text style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: Size.size16,
                lineHeight: Size.size24,
                letterSpacing: 0.25,
                color: "#FCFCFC",
              }}>{time}</Text>
              <View style={{ marginRight: Size.size13 }}>
                <SvgBottom />
              </View>
            </TouchableOpacity>
            <DatePicker
              modal
              mode={"time"}
              open={openTime}
              date={date}
              onConfirm={(date) => {
                setOpenTime(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpenTime(false);
              }}
              onDateChange={setDate}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: Size.size22 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: Size.size289 }}>
              <View>
                <TouchableOpacity style={{
                  width: Size.size108,
                  height: Size.size32,
                  borderWidth: Size.size1,
                  borderStyle: "solid",
                  borderColor: "#347474",
                  borderRadius: Size.size4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                                  onPress={() => setDuration("15 minute")}
                >
                  <Text style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: Size.size14,
                    lineHeight: Size.size16,
                    letterSpacing: 0.25,
                    color: "#949494",
                  }}
                  >15 minute</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{
                  width: Size.size108,
                  height: Size.size32,
                  borderWidth: Size.size1,
                  borderStyle: "solid",
                  borderColor: "#347474",
                  borderRadius: Size.size4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                                  onPress={() => setDuration("2 hours")}
                >
                  <Text style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: Size.size14,
                    lineHeight: Size.size16,
                    letterSpacing: 0.25,
                    color: "#949494",
                  }}
                  > 2 hours</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: Size.size289 }}>
              <View style={{ marginTop: Size.size18 }}>
                <TouchableOpacity style={{
                  width: Size.size108,
                  height: Size.size32,
                  borderWidth: Size.size1,
                  borderStyle: "solid",
                  borderColor: "#347474",
                  borderRadius: Size.size4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                                  onPress={() => setDuration("30 minute")}
                >
                  <Text style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: Size.size14,
                    lineHeight: Size.size16,
                    letterSpacing: 0.25,
                    color: "#949494",
                  }}
                  >30 minute</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: Size.size18 }}>
                <TouchableOpacity style={{
                  width: Size.size108,
                  height: Size.size32,
                  borderWidth: Size.size1,
                  borderStyle: "solid",
                  borderColor: "#347474",
                  borderRadius: Size.size4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                                  onPress={() => setDuration("3 hours")}
                >
                  <Text style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: Size.size14,
                    lineHeight: Size.size16,
                    letterSpacing: 0.25,
                    color: "#949494",
                  }}
                  >3 hours</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: Size.size289 }}>
              <View style={{ marginTop: Size.size18 }}>
                <TouchableOpacity style={{
                  width: Size.size108,
                  height: Size.size32,
                  borderWidth: Size.size1,
                  borderStyle: "solid",
                  borderColor: "#347474",
                  borderRadius: Size.size4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                                  onPress={() => setDuration("1 hour")}
                >
                  <Text style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: Size.size14,
                    lineHeight: Size.size16,
                    letterSpacing: 0.25,
                    color: "#949494",
                  }}
                  >1 hour</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: Size.size18 }}>
                <TouchableOpacity style={{
                  width: Size.size108,
                  height: Size.size32,
                  borderWidth: Size.size1,
                  borderStyle: "solid",
                  borderColor: "#347474",
                  borderRadius: Size.size4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                                  onPress={() => setDuration("Half day")}
                >
                  <Text style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: Size.size14,
                    lineHeight: Size.size16,
                    letterSpacing: 0.25,
                    color: "#949494",
                  }}
                  > Half day</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Input multiline style={Style.area} numberOfLines={4} placeholder="Description" {...props} />
            <TouchableOpacity style={{
              width: Size.size289,
              height: Size.size38,
              backgroundColor: "#11493E",
              borderRadius: Size.size4,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: Size.size20,
              marginRight: Size.size23,
            }}
                              onPress={() => setShowLeave(!showLeave)}
            >
              <Text style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: Size.size14,
                lineHeight: Size.size16,
                letterSpacing: 0.25,
                color: "#FCFCFC",
              }}
              >Book</Text>
            </TouchableOpacity>
          </View>
        </View> :
        <View>
          <View style={{ alignItems: "center", marginTop: Size.size30 }}>
            <Text style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: Size.size16,
              lineHeight: Size.size24,
              letterSpacing: 0.25,
              color: "#11493E",
            }}>Coose book leave</Text>

          </View>
          <Check props={arr} data={data} setData={setData} ki={key} setHourly={setHourly} vacation={vacation}
                 setVacation={setVacation} />
          <TouchableOpacity style={{
            width: Size.size335,
            height: Size.size38,
            backgroundColor: "#11493E",
            borderRadius: Size.size4,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: Size.size20,
            marginRight: Size.size23,
            marginTop: Size.size40,
          }}
                            onPress={() => {
                              setShowLeave(!showLeave);
                              setShow(!show);
                            }}
          >
            <Text style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: Size.size14,
              lineHeight: Size.size16,
              letterSpacing: 0.25,
              color: "#FCFCFC",
            }}
            >Select</Text>
          </TouchableOpacity>
        </View>
      }
      </Animatable.View>
    </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default BookLeaveModal;
