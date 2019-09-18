import {
  FETCH_INTERVALS_BY_DAY_FAILURE,
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS
} from './statsTypes';
import { getIntervalsByDay } from './statsUtils';

export const fetchIntervalsByDayStart = () => ({
  type: FETCH_INTERVALS_BY_DAY_START
});

export const fetchIntervalsByDaySuccess = (intervalsByDay: any) => ({
  type: FETCH_INTERVALS_BY_DAY_SUCCESS,
  intervalsByDay
});

export const fetchIntervalsByDayFailure = (error: any) => ({
  type: FETCH_INTERVALS_BY_DAY_FAILURE,
  error
});
