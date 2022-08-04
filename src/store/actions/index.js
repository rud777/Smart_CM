export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function loginRequest(formData,cb) {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { formData,cb }
  }
}
export const LIST_EVENT_REQUEST = 'LIST_EVENT_REQUEST';
export const LIST_EVENT_SUCCESS = 'LIST_EVENT_SUCCESS';
export const LIST_EVENT_FAIL = 'LIST_EVENT_FAIL';
export function listEventRequest(auth_key) {
  return {
    type: LIST_EVENT_REQUEST,
    payload: {auth_key}
  }
}
