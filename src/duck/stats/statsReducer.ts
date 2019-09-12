import {
  FETCH_INTERVALS_BY_DAY_FAILURE,
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS
} from './statsTypes';

const initalState = {
  intervalsByDay: null,
  error: null,
  isFetching: false
};

export default (state = initalState, action: any) => {
  switch (action.type) {
    case FETCH_INTERVALS_BY_DAY_START:
      return { ...state, isFetching: true, error: null };
    case FETCH_INTERVALS_BY_DAY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        intervalsByDay: action.intervalsByDay
      };
    case FETCH_INTERVALS_BY_DAY_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return {
        ...state
      };
  }
};
