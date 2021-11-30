import { GOT_TRANSACTION_HISTORY } from "../constants/Action";

export default (state = [], action) => {
  switch (action.type) {
    case GOT_TRANSACTION_HISTORY:
      return action.data || state
    default:
      return state;
  }
};
