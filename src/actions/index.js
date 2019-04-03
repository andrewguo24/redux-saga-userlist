import {
  USER_SELECTED,
  USERS_RECEIVED,
  REQUEST_USERS_FAILED,
  REQUEST_USERS
} from "../constants";

// export const selectUser = user => {
//   console.log("You click on user:", user.first);
//   return {
//     type: "USER_SELECTED",
//     payload: user
//   };
// };

export const selectUser = user => ({
  type: USER_SELECTED,
  payload: user
});

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const requestUsersFailed = () => ({
  type: REQUEST_USERS_FAILED
});

export const receiveUsers = json => ({
  type: USERS_RECEIVED,
  payload: json.users
});
