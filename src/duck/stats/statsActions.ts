import {
  FETCH_STATS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  INC_INTERVALS,
  INC_INTERVALS_FAILURE
} from './statsTypes';
import {
  FetchStatsStartAction,
  FetchStatsSuccessAction,
  StatsError,
  FetchStatsFailureAction,
  IncIntervalsAction,
  IncIntervalsFailureAction
} from './statsInterface';

export const fetchStatsStart = (): FetchStatsStartAction => ({
  type: FETCH_STATS_START
});

export const fetchStatsSuccess = (
  interValsByDay: any
): FetchStatsSuccessAction => ({
  type: FETCH_STATS_SUCCESS,
  payload: interValsByDay
});

export const fetchStatsFailure = (
  error: StatsError
): FetchStatsFailureAction => ({
  type: FETCH_STATS_FAILURE,
  payload: error
});

export const incIntervals = (): IncIntervalsAction => ({
  type: INC_INTERVALS
});

export const incIntervalsFailure = (
  error: StatsError
): IncIntervalsFailureAction => ({
  type: INC_INTERVALS_FAILURE,
  payload: error
});
