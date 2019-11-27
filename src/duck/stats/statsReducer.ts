import {
  FETCH_STATS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  INC_INTERVALS_FAILURE
} from './statsTypes';
import { StatsActionTypes, StatsError } from './statsInterface';

export interface StatsState {
  statsByDay: null | object;
  error: null | StatsError;
  isFetching: boolean;
}

const initalState: StatsState = {
  statsByDay: null,
  error: null,
  isFetching: false
};

export default (state = initalState, action: StatsActionTypes): StatsState => {
  switch (action.type) {
    case FETCH_STATS_START:
      return { ...state, isFetching: true, error: null };
    case FETCH_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        statsByDay: { ...action.payload }
      };
    case FETCH_STATS_FAILURE:
    case INC_INTERVALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: {
          message: action.payload.message || null,
          code: action.payload.code || null
        },
        statsByDay: null
      };
    default:
      return {
        ...state
      };
  }
};
