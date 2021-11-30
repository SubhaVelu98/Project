import * as actions from "../actions";
import { GOT_PROFILE, UPLOADED_PROFILE } from "../constants/Action";

export default (state = {}, action) => {
  const { data, type } = action;

  switch (type) {
    case GOT_PROFILE:
      return {
        ...state,
        ...data
      };
    case UPLOADED_PROFILE:
      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
};
