import { GOT_FILES } from "../constants/Action";

export default (state = [], action) => {
  switch (action.type) {
    case GOT_FILES:
      return action.data;
    default:
      return state;
  }
};
