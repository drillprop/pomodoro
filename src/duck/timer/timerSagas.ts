import {
  put,
  call,
  all,
  delay,
  take,
  takeEvery,
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
  setTimersDurationFailure,
  fetchConfigStart,
  fetchConfigSuccess,
  fetchConfigFailure
  // fetchInitialStateSucces,
  // fetchInitialStateFailure
} from './timerActions';
import {
  SetTimersDurationStartAction,
  FetchConfigStartAction,
  FetchConfigSuccessAction
} from './timerInterfaces';
import { LOGIN_START, CHECK_SESSION } from '../users/userTypes';
import { getCurrentUser } from '../../utils/firebase/auth';
import { getUserConfig } from './timerUtils';

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

export function* onLoginStart() {
  yield takeEvery([CHECK_SESSION, LOGIN_START], fetchConfig);
}

export function* fetchConfig({}: FetchConfigStartAction) {
  try {
    yield put(fetchConfigStart());
    const { uid } = yield call(getCurrentUser);
    const config = yield call(getUserConfig, uid);
    if (config) {
      yield put(fetchConfigSuccess(config));
    } else {
      yield put(
        fetchConfigFailure({ code: 'no-config', message: 'Cannot find config' })
      );
    }
  } catch (err) {
    fetchConfigFailure(err);
  }
}

export function* timerSagas() {
  yield all([call(onStartTimer), call(onSettingTimers), call(onLoginStart)]);
}
