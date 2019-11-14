import {
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS,
  FETCH_INTERVALS_BY_DAY_FAILURE
} from './statsTypes';

export interface StatsError {
  code: string;
  message: string;
}

export interface FetchIntervalsByDayStartAction {
  type: typeof FETCH_INTERVALS_BY_DAY_START;
}
export interface FetchIntervalsByDaySuccessAction {
  type: typeof FETCH_INTERVALS_BY_DAY_SUCCESS;
  payload: any;
}
export interface FetchIntervalsByDayFailureAction {
  type: typeof FETCH_INTERVALS_BY_DAY_FAILURE;
  payload: StatsError;
}

export type StatsActionTypes =
  | FetchIntervalsByDayStartAction
  | FetchIntervalsByDaySuccessAction
  | FetchIntervalsByDayFailureAction;
