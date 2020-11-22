import { all } from "redux-saga/effects";
import demoSagas from "./demo_redux/demoSaga"
import userSagas from "./users/usersSaga";

export default function* rootSaga(getState) {
  yield all([demoSagas(), userSagas()]);
}
