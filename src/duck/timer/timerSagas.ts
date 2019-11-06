import {
  put,
  call,
  all,
  delay,
  take,
  takeLatest,
  race
} from 'redux-saga/effects';
import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from './timerTypes';
import { incIntervalInFirestore } from './timerUtils';
import { stopTimerAndSwitchFaze } from './timerActions';

export function* startTimer({ isInterval, timeleft, selectedTask }: any) {
  try {
    yield delay(timeleft * 1000);
    yield !isInterval && call(incIntervalInFirestore, selectedTask);
    yield put(stopTimerAndSwitchFaze(isInterval));
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function* onStartTimer() {
  yield takeLatest(START_TIMER, function*(...args) {
    yield race({
      task: call(startTimer, ...args),
      cancel: take([PAUSE_TIMER, RESET_TIMER])
    });
  });
}

export function* timerSagas() {
  yield all([call(onStartTimer)]);
}
