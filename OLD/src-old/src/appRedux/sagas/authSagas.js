import { put, call } from "redux-saga/effects";
import {
  registerUserLoading,
  registerUserSuccess,
  registerUserError,
} from "../actions/authenticationAction";
import { registerAPICall } from "../../services/authentication";

export function* registerUserData(data) {
  yield put(registerUserLoading());
  try {
    const response = yield call(registerAPICall, data.data);
    yield put(registerUserSuccess(response));
  } catch (error) {
    yield put(registerUserError("Something went Wrong Please try again"));
  }
}
