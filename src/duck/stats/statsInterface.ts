import {
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE
} from './statsTypes';

export interface StatsError {
  code: string;
  message: string;
}

export interface FetchIntervalsByDayStartAction {
  type: typeof FETCH_STATS_START;
}
export interface FetchIntervalsByDaySuccessAction {
  type: typeof FETCH_STATS_SUCCESS;
  payload: any;
}
export interface FetchIntervalsByDayFailureAction {
  type: typeof FETCH_STATS_FAILURE;
  payload: StatsError;
}

export type StatsActionTypes =
  | FetchIntervalsByDayStartAction
  | FetchIntervalsByDaySuccessAction
  | FetchIntervalsByDayFailureAction;
