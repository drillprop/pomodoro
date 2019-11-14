import {
  FETCH_INTERVALS_BY_DAY_FAILURE,
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS
} from './statsTypes';
import {
  FetchIntervalsByDayStartAction,
  FetchIntervalsByDaySuccessAction,
  StatsError
} from './statsInterface';

export const fetchIntervalsByDayStart = (): FetchIntervalsByDayStartAction => ({
  type: FETCH_INTERVALS_BY_DAY_START
});

export const fetchIntervalsByDaySuccess = (
  interValsByDay: any
): FetchIntervalsByDaySuccessAction => ({
  type: FETCH_INTERVALS_BY_DAY_SUCCESS,
  payload: interValsByDay
});

export const fetchIntervalsByDayFailure = (error: StatsError) => ({
  type: FETCH_INTERVALS_BY_DAY_FAILURE,
  payload: error
});
