// export default function() {
//   return [
//     {
//       id: 1,
//       first: "Bucky",
//       last: "Roberts",
//       age: 71,
//       description: "Bucky is a React developer and YouTuber",
//       thumbnail: "http://i.imgur.com/7yUvePI.jpg"
//     },
//     {
//       id: 2,
//       first: "Joby",
//       last: "Wasilenko",
//       age: 27,
//       description: "Joby loves the Packers, cheese, and turtles.",
//       thumbnail: "http://i.imgur.com/52xRlm8.png"
//     },
//     {
//       id: 3,
//       first: "Madison",
//       last: "Williams",
//       age: 24,
//       description: "Madi likes her dog but it is really annoying.",
//       thumbnail: "http://i.imgur.com/4EMtxHB.png"
//     }
//   ];
// }

import {
  USERS_RECEIVED,
  REQUEST_USERS,
  REQUEST_USERS_FAILED
} from "../constants/index";

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
