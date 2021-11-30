import * as actions from "../actions";
import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  AUTHENTICATE,
  GOT_ACCOUNT
} from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_ACCOUNT:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
