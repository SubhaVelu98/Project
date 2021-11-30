import { SET_CRYPTO_BALANCE } from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CRYPTO_BALANCE:
      const { data } = action;
      return data.length ? data : state;
    default:
      return state;
  }
};
