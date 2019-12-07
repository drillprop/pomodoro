import { FETCH_STATS_START } from './statsTypes';
import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import {
  fetchStatsSuccess,
  fetchStatsFailure,
  incIntervals,
  incIntervalsFailure
} from './statsActions';
import { STOP_AND_SWITCH_FAZE } from '../timer/timerTypes';
import { StopTimerAndSwitchFazeAction } from '../timer/timerInterfaces';
import { ReduxState } from '../store';
import { incIntervalDB, fetchStatsDB } from './statsUtils';

const selectSelectedTask = ({ tasks }: ReduxState) => tasks.selectedTask;
const selectIntervalTime = ({ timer }: ReduxState) => timer.config.intervalTime;
const userUid = ({ user }: ReduxState) => user.currentUser;

export function* onfetchStatsStart() {
  yield takeLatest(FETCH_STATS_START, fetchStats);
}

export function* fetchStats() {
  try {
    const { uid } = yield select(userUid);
    const stats = yield call(fetchStatsDB, uid);
    yield put(fetchStatsSuccess(stats));
  } catch (error) {
    yield put(fetchStatsFailure(error));
  }
}

export function* onSwitchFaze() {
  yield takeLatest(STOP_AND_SWITCH_FAZE, incTaskInterval);
}

export function* incTaskInterval({
  payload: isInterval
}: StopTimerAndSwitchFazeAction) {
  try {
    if (!isInterval) return;
    const { uid } = yield select(userUid);
    const selectedTask = yield select(selectSelectedTask);
    const intervalTime = yield select(selectIntervalTime);
    yield call(incIntervalDB, uid, selectedTask, intervalTime);
    yield put(incIntervals());
  } catch (error) {
    yield put(incIntervalsFailure(error));
  }
}

export function* statsSagas() {
  yield all([call(onfetchStatsStart), call(onSwitchFaze)]);
}
