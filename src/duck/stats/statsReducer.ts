import {
  FETCH_INTERVALS_BY_DAY_FAILURE,
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS
} from './statsTypes';
import { StatsActionTypes, StatsError } from './statsInterface';

export interface StatsState {
  intervalsByDay: null | object;
  error: null | StatsError;
  isFetching: boolean;
}

const initalState: StatsState = {
  intervalsByDay: null,
  error: null,
  isFetching: false
};

export default (state = initalState, action: StatsActionTypes): StatsState => {
  switch (action.type) {
    case FETCH_INTERVALS_BY_DAY_START:
      return { ...state, isFetching: true, error: null };
    case FETCH_INTERVALS_BY_DAY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        intervalsByDay: { ...action.payload }
      };
    case FETCH_INTERVALS_BY_DAY_FAILURE:
      return { ...state, isFetching: false, error: { ...action.payload } };
    default:
      return {
        ...state
      };
  }
};
