export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export function registerRequest(formData, cb) {
  return {
    type: ADD_USER_REQUEST,
    payload: { formData, cb }
  }
}
