import {
  GET_EXAMPLE_DATA_LOADING,
  GET_EXAMPLE_DATA_SUCCESS,
  GET_EXAMPLE_DATA_ERROR,
} from '../constants';

const INITIAL_STATE = {
  getExampleDataIsLoading: false,
  getExampleData: [],
  getExampleDataErrorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EXAMPLE_DATA_LOADING:
      return {
        ...state,
        getExampleDataIsLoading: true,
      };
    case GET_EXAMPLE_DATA_SUCCESS:
      return {
        ...state,
        getExampleDataIsLoading: false,
        getExampleData: action.data,
      };
    case GET_EXAMPLE_DATA_ERROR:
      return {
        ...state,
        getExampleDataIsLoading: false,
        getExampleDataErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
