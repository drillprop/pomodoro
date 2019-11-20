import {
  put,
  call,
  all,
  delay,
  take,
  takeLatest,
  race,
  select
} from 'redux-saga/effects';
import {
  START_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  SKIP_BREAK,
  SET_TIMERS_DURATION_START
} from './timerTypes';
import {
  stopTimerAndSwitchFaze,
  setTimersDurationSuccess,
  setTimersDurationFailure
} from './timerActions';
import { SetTimersDurationStartAction } from './timerInterfaces';
import { saveTimersInDB } from './timerUtils';
import { ReduxState } from '../store';

const userUid = ({ user }: ReduxState) => user.currentUser;

export function* onStartTimer() {
  yield takeLatest(START_TIMER, function*(...args) {
    yield race({
      start: call(startTimer, ...args),
      cancel: take([PAUSE_TIMER, RESET_TIMER, SKIP_BREAK])
    });
  });
}

export function* startTimer({ payload }: any) {
  try {
    const { isInterval, timeleft } = payload;
    yield delay(timeleft * 1000 + 1000);
    yield put(stopTimerAndSwitchFaze(isInterval));
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function* onSettingTimers() {
  yield takeLatest(SET_TIMERS_DURATION_START, setTimersDuration);
}

export function* setTimersDuration({ payload }: SetTimersDurationStartAction) {
  try {
    const { uid } = yield select(userUid);
    yield call(saveTimersInDB, uid, payload);
    yield put(setTimersDurationSuccess(payload));
  } catch (err) {
    yield put(setTimersDurationFailure(err));
  }
}

export function* timerSagas() {
  yield all([call(onStartTimer), call(onSettingTimers)]);
}
