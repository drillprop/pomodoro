import { put, call, takeLatest, all, delay } from 'redux-saga/effects';
import { START_TIMER, STOP_AND_SWITCH_FAZE } from './timerTypes';
import { incIntervalInFirestore } from './timerUtils';

export const playTimer = (startTime: any) => ({
  type: START_TIMER,
  startTime
});

export const stopTimerAndSwitchFaze = (isInterval: boolean) => ({
  type: STOP_AND_SWITCH_FAZE,
  isInterval
});

export function* startTimer({
  startTime,
  isTimerStart,
  isInterval,
  timeleft,
  selectedTask
}: any) {
  try {
    if (!isTimerStart) yield put(playTimer(startTime));
    yield delay(timeleft * 1000 + 1000);
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
