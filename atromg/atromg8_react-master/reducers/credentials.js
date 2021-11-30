import * as actions from "../actions";
import { GOT_CREDENTIALS } from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_CREDENTIALS:
      const { data } = action;
      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
};
