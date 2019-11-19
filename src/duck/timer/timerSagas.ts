import {
  put,
  call,
  all,
  delay,
  take,
  takeLatest,
  race
} from 'redux-saga/effects';
import {
  START_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  SKIP_BREAK,
  SET_TIMERS_DURATION_START,
  FETCH_CONFIG_START
} from './timerTypes';
// import {
//   incIntervalInFirestore,
//   saveInitialTimelefts,
//   fetchInitialState
// } from './timerUtils';
import {
  stopTimerAndSwitchFaze,
  setTimersDurationSuccess,
  setTimersDurationFailure
  // fetchInitialStateSucces,
  // fetchInitialStateFailure
} from './timerActions';
import { SetTimersDurationStartAction } from './timerInterfaces';

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
    const { isInterval, timeleft, selectedTask } = payload;
    yield delay(timeleft * 1000 + 1000);
    yield put(stopTimerAndSwitchFaze(isInterval));
    // yield isInterval && call(incIntervalInFirestore, selectedTask);
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
    // yield call(saveInitialTimelefts, timelefts);
    yield put(setTimersDurationSuccess(payload));
  } catch (err) {
    yield put(setTimersDurationFailure(err));
  }
}

export function* onFetchingConfig() {
  yield takeLatest(FETCH_CONFIG_START, fetchConfig);
}

export function* fetchConfig() {
  try {
    // const initialState = yield call(fetchInitialState);
    // console.log(initialState);
    // yield put(fetchInitialStateSucces(initialState));
  } catch (err) {
    // yield put(fetchInitialStateFailure(err));
  }
}

export function* timerSagas() {
  yield all([
    call(onStartTimer),
    call(onSettingTimers),
    call(onFetchingConfig)
  ]);
}
