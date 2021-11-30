import {
  REGISTER_USER_DATA_LOADING,
  REGISTER_USER_DATA_SUCCESS,
  REGISTER_USER_DATA_ERROR,
} from "../constants";

const INITIAL_STATE = {
  registerUserDataIsLoading: false,
  registerUserData: {},
  registerUserDataErrorMessage: null,
};

export const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_DATA_LOADING:
      return {
        ...state,
        registerUserDataIsLoading: true,
      };
    case REGISTER_USER_DATA_SUCCESS:
      return {
        ...state,
        registerUserDataIsLoading: false,
        registerUserData: action.data,
      };
    case REGISTER_USER_DATA_ERROR:
      return {
        ...state,
        registerUserDataIsLoading: false,
        registerUserDataErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
