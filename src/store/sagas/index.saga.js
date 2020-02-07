import { takeLatest, all } from "redux-saga/effects";
import { FORM_DATA } from "../action.types";

import { onLoginData } from "./login.saga";

function* sagas() {
  yield all([takeLatest(FORM_DATA, onLoginData)]);
}
export default sagas;
