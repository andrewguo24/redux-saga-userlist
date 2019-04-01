import watchRequestUsers from "./users";

export default function* rootSaga() {
  yield [watchRequestUsers];
}
