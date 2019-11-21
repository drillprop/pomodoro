import {
  FETCH_STATS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  INC_INTERVALS,
  INC_INTERVALS_FAILURE
} from './statsTypes';
import {
  FetchIntervalsByDayStartAction,
  FetchIntervalsByDaySuccessAction,
  StatsError,
  FetchIntervalsByDayFailureAction,
  IncIntervalsAction,
  IncIntervalsFailureAction
} from './statsInterface';

export const fetchIntervalsByDayStart = (): FetchIntervalsByDayStartAction => ({
  type: FETCH_STATS_START
});

export const fetchIntervalsByDaySuccess = (
  interValsByDay: any
): FetchIntervalsByDaySuccessAction => ({
  type: FETCH_STATS_SUCCESS,
  payload: interValsByDay
});

export const fetchIntervalsByDayFailure = (
  error: StatsError
): FetchIntervalsByDayFailureAction => ({
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
