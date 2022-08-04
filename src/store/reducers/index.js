import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LIST_EVENT_SUCCESS,
  LIST_EVENT_REQUEST,
  LIST_EVENT_FAIL
} from "../actions/index";

const initialState = {

}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        formData: action.payload.data,
        auth_key:action.payload.data.auth_key
      }
    }
    case LOGIN_USER_REQUEST: {

      return {
        ...state,
      }
    }

    case LOGIN_USER_FAIL: {

      return {
        ...state,
      }
    }
    case LIST_EVENT_SUCCESS:{
      return {
        ...state,
        eventList: action.payload
      }
    }
    default: {
      return state
    }
  }
}
