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
  selectedCategory: string;
  breakTime: number;
  intervalTime: number;
  isTimerStart: boolean;
  isInterval: boolean;
}
type Category = { [name: string]: number };

const initialState: Timer = {
  categories: {
    default: 0
  },
  selectedCategory: 'default',
  breakTime: 2,
  intervalTime: 4,
  isTimerStart: false,
  isInterval: true
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
        categories: {
          ...state.categories,
          [action.categoryName]: !action.isInterval
            ? state.categories[action.categoryName] + 1
            : state.categories[action.categoryName]
        }
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
      const {
        [action.categoryName]: toDelete,
        ...restCategories
      } = state.categories;
      return {
        ...state,
        categories: {
          ...restCategories
        }
      };
    }
    default:
      return state;
  }
};
