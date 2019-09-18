import { FETCH_INTERVALS_BY_DAY_START } from './statsTypes';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getIntervalsByDay } from './statsUtils';
import {
  fetchIntervalsByDaySuccess,
  fetchIntervalsByDayFailure
} from './statsActions';

export function* fetchIntervalsByDay() {
  try {
    const intervalsByDay = yield call(getIntervalsByDay);
    yield put(fetchIntervalsByDaySuccess(intervalsByDay));
  } catch (err) {
    yield put(fetchIntervalsByDayFailure(err));
  }
}

export function* onFetchIntervalsByDayStart() {
  yield takeLatest(FETCH_INTERVALS_BY_DAY_START, fetchIntervalsByDay);
}

export function* statsSagas() {
  yield all([call(onFetchIntervalsByDayStart)]);
}
