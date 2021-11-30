import { takeLatest } from "redux-saga/effects";
import { getExampleData } from "./example";
import { registerUserData } from "./authSagas";
import { GET_EXAMPLE_DATA, REGISTER_USER_DATA } from "../constants";

function* rootSagas() {
  yield takeLatest(GET_EXAMPLE_DATA, getExampleData);
  yield takeLatest(REGISTER_USER_DATA, registerUserData);
}

export default rootSagas;
