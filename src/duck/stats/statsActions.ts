import {
  FETCH_STATS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS
} from './statsTypes';
import {
  FetchIntervalsByDayStartAction,
  FetchIntervalsByDaySuccessAction,
  StatsError
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

export const fetchIntervalsByDayFailure = (error: StatsError) => ({
  type: FETCH_STATS_FAILURE,
  payload: error
});
