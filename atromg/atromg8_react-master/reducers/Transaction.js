import {
  SET_AMOUNT_TO_SEND,
  SET_RECIPIENT,
  TRANSACTION_SIGNING_FAILED,
  TRANSACTION_SIGNING_SUCCESS
} from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_RECIPIENT:
      return {
        ...state,
        to: action.data
      };
    case SET_AMOUNT_TO_SEND:
      return {
        ...state,
        amount: action.data
      };

    case TRANSACTION_SIGNING_SUCCESS:
      const { data } = action;
      return {
        ...state,
        hash: data
      };

    case TRANSACTION_SIGNING_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};
