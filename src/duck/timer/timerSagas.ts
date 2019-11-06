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
  SKIP_BREAK
} from './timerTypes';
import { incIntervalInFirestore } from './timerUtils';
import { stopTimerAndSwitchFaze } from './timerActions';

export function* startTimerSaga({ isInterval, timeleft, selectedTask }: any) {
  try {
    console.log(isInterval);
    yield delay(timeleft * 1000 + 1000);
    yield put(stopTimerAndSwitchFaze(isInterval));
    yield isInterval && call(incIntervalInFirestore, selectedTask);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function* onStartTimer() {
  yield takeLatest(START_TIMER, function*(...args) {
    yield race({
      task: call(startTimerSaga, ...args),
      cancel: take([PAUSE_TIMER, RESET_TIMER, SKIP_BREAK])
    });
  });
}

export function* timerSagas() {
  yield all([call(onStartTimer)]);
}
