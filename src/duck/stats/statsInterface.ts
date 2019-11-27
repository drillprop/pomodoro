import {
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  INC_INTERVALS,
  INC_INTERVALS_FAILURE
} from './statsTypes';

export interface StatsError {
  code: string;
  message: string;
}

export interface FetchStatsStartAction {
  type: typeof FETCH_STATS_START;
}
export interface FetchStatsSuccessAction {
  type: typeof FETCH_STATS_SUCCESS;
  payload: any;
}
export interface FetchStatsFailureAction {
  type: typeof FETCH_STATS_FAILURE;
  payload: StatsError;
}
export interface IncIntervalsAction {
  type: typeof INC_INTERVALS;
}
export interface IncIntervalsFailureAction {
  type: typeof INC_INTERVALS_FAILURE;
  payload: StatsError;
}

export type StatsActionTypes =
  | FetchStatsStartAction
  | FetchStatsSuccessAction
  | FetchStatsFailureAction
  | IncIntervalsAction
  | IncIntervalsFailureAction;
