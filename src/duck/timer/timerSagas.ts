import {
  put,
  call,
  all,
  delay,
  take,
  takeLatest,
  race,
  select,
} from 'redux-saga/effects';
import {
  START_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  SKIP_BREAK,
  SET_TIMERS_DURATION_START,
} from './timerTypes';
import {
  setTimersDurationSuccess,
  setTimersDurationFailure,
} from './timerActions';
import { SetTimersDurationStartAction } from './timerInterfaces';
import { saveTimersInDB } from './timerUtils';
import { ReduxState } from '../store';
import { createNotification } from '../menu/menuActions';

const userUid = ({ user }: ReduxState) => user.currentUser;

export function* onSettingTimers() {
  yield takeLatest(SET_TIMERS_DURATION_START, setTimersDuration);
}

export function* setTimersDuration({ payload }: SetTimersDurationStartAction) {
  try {
    const { uid } = yield select(userUid);
    yield call(saveTimersInDB, uid, payload);
    yield put(setTimersDurationSuccess(payload));
    yield put(createNotification('Successfully changed timer'));
  } catch (error) {
    yield put(setTimersDurationFailure(error));
  }
}

export function* timerSagas() {
  yield all([call(onSettingTimers)]);
}
