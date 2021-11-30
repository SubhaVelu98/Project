import * as actions from "../actions";
import { Clipboard } from "react-native";
import { Toast } from "native-base";

import {
  CREATE_WALLET,
  GET_WALLET,
  SEND_CRYPTO,
  RECEIVE_CRYPTO,
  COPY_ADDRESS
} from "../constants/Action";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_WALLET:
      return state;
    case GET_WALLET:
      return state;
    case SEND_CRYPTO:
      return state;
    case COPY_ADDRESS:
      const { content } = action;
      if (typeof content === "string") Clipboard.setString(content);
      // TOOD set default selected in clipboard
      // else if (!content) Clipboard.setString(state.f);
      return state;
    default:
      return state;
  }
};
