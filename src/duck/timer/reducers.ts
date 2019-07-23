import {
  UPDATE_TIMER,
  START_PAUSE_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  CREATE_CATEGORY,
  DELETE_CATEGORY
} from './types';

interface Timer {
  categories: Category;
  breakTime: number;
  intervalTime: number;
  isTimerStart: boolean;
  isInterval: boolean;
  intervals: number;
}
type Category = { [name: string]: number };

const initialState: Timer = {
  categories: {
    smth: 2,
    another: 3,
    else: 5
  },
  breakTime: 2,
  intervalTime: 4,
  isTimerStart: false,
  isInterval: true,
  intervals: 0
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        [action.field]: action[action.field]
      };
    case START_PAUSE_TIMER:
      return {
        ...state,
        isTimerStart: !action.isTimerStart
      };
    case RESET_RETRY_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart,
        breakTime: initialState.breakTime,
        intervalTime: initialState.intervalTime
      };
    case SWITCH_FAZE:
      return {
        ...state,
        isInterval: !action.isInterval,
        breakTime: initialState.breakTime,
        intervalTime: initialState.intervalTime,
        intervals: !action.isInterval ? state.intervals + 1 : state.intervals
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.categoryName]: 0
        }
      };
    case DELETE_CATEGORY: {
      const { [action.categoryName]: toDelete, ...rest } = state.categories;
      return {
        ...state,
        categories: {
          ...rest
        }
      };
    }
    default:
      return state;
  }
};
