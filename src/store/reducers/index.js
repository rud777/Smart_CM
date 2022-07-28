import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
} from "../actions/index";

const initialState = {

}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD_USER_SUCCESS: {

      return {
        ...state,
        formData: action.payload
      }
    }
    case ADD_USER_FAIL: {

      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}
