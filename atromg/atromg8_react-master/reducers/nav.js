import * as actions from "../actions";
import { NAVIGATE } from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.data;
    default:
      return state;
  }
};
