import { fork, all } from "redux-saga/effects";
import watchRequestUsers from "./users";

export default function* rootSaga() {
  yield all([fork(watchRequestUsers)]);
}
