import {
  FETCH_INTERVALS_BY_DAY_FAILURE,
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS
} from './statsTypes';

const initalState = {
  intervalsByDay: null
};

export default (state = initalState, action: any) => {
  switch (action.type) {
    case FETCH_INTERVALS_BY_DAY_START:
      return { ...state };
    case FETCH_INTERVALS_BY_DAY_SUCCESS:
      return { ...state };
    case FETCH_INTERVALS_BY_DAY_FAILURE:
      return { ...state };
    default:
      return {
        ...state
      };
  }
};
