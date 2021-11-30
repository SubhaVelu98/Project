import { combineReducers } from "redux";
import example from "./emample";
import { register } from "./authReducer";

export default combineReducers({
  example: example,
  register: register,
});
