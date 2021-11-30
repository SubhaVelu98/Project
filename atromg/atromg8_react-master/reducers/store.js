import * as actions from "../actions";
import { LOADED_CREDENTIALS } from "../constants/Action";

export default (state = [], action) => {
  switch (action.type) {
    case LOADED_CREDENTIALS:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
