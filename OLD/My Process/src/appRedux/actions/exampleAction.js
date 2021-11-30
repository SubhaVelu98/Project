import {
  GET_EXAMPLE_DATA,
  GET_EXAMPLE_DATA_LOADING,
  GET_EXAMPLE_DATA_SUCCESS,
  GET_EXAMPLE_DATA_ERROR,
} from '../constants';

// NOTE: EXAMPLE DATA

export function getExampleData(params) {
  return {
    type: GET_EXAMPLE_DATA,
  };
}

export function getExampleDataLoading() {
  return {
    type: GET_EXAMPLE_DATA_LOADING,
  };
}

export function getExampleDataSuccess(params) {
  return {
    type: GET_EXAMPLE_DATA_SUCCESS,
    data: params,
  };
}

export function getExampleDataError(params) {
  return {
    type: GET_EXAMPLE_DATA_ERROR,
    errorMessage: params,
  };
}
