import * as actions from "../actions";
import { GOT_MNEMONIC } from "../constants/Action";

export default (state = [], action) => {
  switch (action.type) {
    case GOT_MNEMONIC:
      return action.data;
    default:
      return state;
  }
};
