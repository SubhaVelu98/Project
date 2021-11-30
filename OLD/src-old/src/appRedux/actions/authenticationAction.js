import {
  REGISTER_USER_DATA,
  REGISTER_USER_DATA_LOADING,
  REGISTER_USER_DATA_SUCCESS,
  REGISTER_USER_DATA_ERROR,
} from "../constants";

// NOTE: EXAMPLE DATA

export function registerUserData(params) {
  return {
    type: REGISTER_USER_DATA,
    data: params,
  };
}

export function registerUserLoading() {
  return {
    type: REGISTER_USER_DATA_LOADING,
  };
}

export function registerUserSuccess(params) {
  return {
    type: REGISTER_USER_DATA_SUCCESS,
    data: params,
  };
}

export function registerUserError(params) {
  return {
    type: REGISTER_USER_DATA_ERROR,
    errorMessage: params,
  };
}
