import { put, takeLatest } from "redux-saga/effects";
import { REQUEST_USERS } from "../constants";
import * as actions from "../actions/index";

function* fetchUsers() {
  try {
    const response = yield fetch("../../public/sample-data.json");
    console.log("Users Saga response", response);
    if (!response.ok) throw new Error("fetch Users failed");
    const json = yield response.json();
    console.log("Users Saga json", json);
    yield put(actions.receiveUsers(json));
  } catch (error) {
    yield put(actions.requestUsersFailed());
  }
}

export default function* watchRequestUsers() {
  yield takeLatest(REQUEST_USERS, fetchUsers);
}
