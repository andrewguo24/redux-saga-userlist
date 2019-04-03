import {
  USERS_RECEIVED,
  REQUEST_USERS,
  REQUEST_USERS_FAILED
} from "../constants";

const initialState = {
  users: [],
  isFetching: false,
  hasError: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_RECEIVED:
      return {
        ...state,
        users: action.payload
      };
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_USERS_FAILED:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
};

export default userReducer;
