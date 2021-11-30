import * as actions from "../actions";
import { CHANGE_SELECTED_CRYPTO } from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CRYPTO:
      return {
        ...state,
        cryptoIndex: action.data
      };
    default:
      return state;
  }
};
