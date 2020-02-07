import { put } from "redux-saga/effects";
import { loginDataSuccess } from "../actions/login.action";

export function* onLoginData(data) {
  let username = "hruday@gmail.com";
  let password = "hruday123";
  if (username === data.values.email && password === data.values.pass) {
    try {
      yield put(loginDataSuccess({ status: "success" }));
    } catch (error) {
      throw error;
    }
  } else {
    yield put(loginDataSuccess({ status: "failed" }));
  }
}
