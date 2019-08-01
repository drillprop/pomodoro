import {
  UPDATE_TIMER,
  START_PAUSE_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SWITCH_CATEGORY
} from './timerTypes';

interface Config {
  initialInterval: number;
  initialBreak: number;
  categories: Array<string>;
}

interface Timer {
  config: Config;
  categories: any;
  selectedCategory: string;
  breakTime: number;
  intervalTime: number;
  isTimerStart: boolean;
  isInterval: boolean;
}

const config: Config = {
  initialInterval: 5,
  initialBreak: 2,
  categories: ['default', 'study', 'work']
};

const initialState: Timer = {
  config,
  categories: config.categories.reduce((acc, ctg) => {
    const obj = { ...acc, [ctg]: 0 };
    return obj;
  }, {}),
  selectedCategory: 'default',
  breakTime: config.initialBreak,
  intervalTime: config.initialInterval,
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
        breakTime: state.config.initialBreak,
        intervalTime: state.config.initialInterval
      };
    case SWITCH_FAZE:
      return {
        ...state,
        isInterval: !action.isInterval,
        breakTime: state.config.initialBreak,
        intervalTime: state.config.initialInterval,
        categories: {
          ...state.categories,
          [state.selectedCategory]: !action.isInterval
            ? state.categories[state.selectedCategory] + 1
            : state.categories[state.selectedCategory]
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
    case SWITCH_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.categoryName,
        isTimerStart: false,
        isInterval: true,
        breakTime: state.config.initialBreak,
        intervalTime: state.config.initialInterval
      };
    }
    default:
      return state;
  }
};
