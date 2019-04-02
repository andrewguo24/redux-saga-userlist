import { put, takeLatest } from "redux-saga/effects";
import { REQUEST_USERS } from "../constants";
import * as actions from "../actions";

function* fetchUsers() {
  try {
    const response = yield fetch("../../public/sample-data.json");
    if (!response.ok) throw new Error("fetch Users failed");
    console.log("Saga Response", response);
    const json = yield response.json();
    console.log("Saga Json", json);
    yield put(actions.receiveUsers(json));
  } catch (error) {
    yield put(actions.requestUsersFailed());
  }
}

export default function* watchRequestUsers() {
  console.log("Watch Request Users");
  yield takeLatest(REQUEST_USERS, fetchUsers);
}
