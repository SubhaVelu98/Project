import * as actions from "../actions";
import { AsyncStorage } from "react-native";
import {
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_FAIL,
  REGISTER_ACCOUNT_FAIL,
  REGISTER_ACCOUNT_SUCCESS,
  LOADING,
  LOADED,
  UPLOADED,
  UPLOADING
} from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOADED:
      return {
        ...state,
        loading: false
      };
    case UPLOADED:
      console.log("UPLOADED");
      return {
        ...state,
        uploading: false
      };
    case UPLOADING:
      console.log("UPLOADING");
      return {
        ...state,
        uploading: true
      };
    case LOGIN_ACCOUNT_SUCCESS:
      const { token } = action;
      return {
        ...state,
        token
      };
    case REGISTER_ACCOUNT_SUCCESS:
      return {
        ...state
      };
    case LOGIN_ACCOUNT_FAIL:
      return {
        navigate: "AuthLoading"
      };
    case REGISTER_ACCOUNT_FAIL:
      return {
        ...state
      };
    default:
      return {};
  }
};
