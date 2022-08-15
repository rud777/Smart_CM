import {createLogic} from "redux-logic";
const {LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS} = require("../actions/index");
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
import { LIST_EVENT_FAIL, LIST_EVENT_REQUEST, LIST_EVENT_SUCCESS } from "../actions";

 export const fetchPollsLogic = createLogic({
    type: LOGIN_USER_REQUEST,
    latest: true,
    process({ getState, action }, dispatch, done) {

      const data=action.payload.formData
        axios
            .post('https://manage-company.app/api/site/login',data,{headers:'Content-Type: application/json'})
            .then((polls) => {

              if (action.payload.cb) {
                action.payload.cb(polls.data, null)
              }
              dispatch({ type: LOGIN_USER_SUCCESS, payload: polls.data })
            })

            .catch((err) => {
                console.log(err);
                dispatch({ type: LOGIN_USER_FAIL, payload: err, error: true });
            })
            .then(() => done());
    }
});
export const fetchPollsList = createLogic({
  type: LIST_EVENT_REQUEST,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const token=action.payload.auth_key
    axios
      .get('https://manage-company.app/api/event/list?my_events=0&start=2022-05-01&end=2022-05-31',{headers:{
        'auth_key': `${token}`
      }})
      .then((polls) => {
        dispatch({ type:LIST_EVENT_SUCCESS, payload: polls.data.data })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LIST_EVENT_FAIL, payload: err, error: true });
      })
      .then(() => done());
  }
});
