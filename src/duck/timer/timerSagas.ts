import { put, call, takeLatest, all, delay } from 'redux-saga/effects';
import { START_TIMER } from './timerTypes';
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
  yield takeLatest(START_TIMER, startTimer);
}

export function* timerSagas() {
  yield all([call(onStartTimer)]);
}
