import {put, call} from 'redux-saga/effects';
import {
  getExampleDataLoading,
  getExampleDataSuccess,
  getExampleDataError,
} from '../actions/exampleAction';
import {exampleApiCall} from '../../services/example';

export function* getExampleData() {
  yield put(getExampleDataLoading());
  try {
    const response = yield call(exampleApiCall);
    yield put(getExampleDataSuccess(response));
  } catch (error) {
    yield put(getExampleDataError('Something went Wrong Please try again'));
  }
}
