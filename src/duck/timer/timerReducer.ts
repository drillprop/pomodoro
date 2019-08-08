import {
  UPDATE_TIMER,
  START_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SWITCH_CATEGORY,
  SHOW_MENU,
  SET_TIMERS
} from './timerTypes';

interface Config {
  intervalInit: number;
  breakInit: number;
  categories: Array<string>;
}

interface Timer {
  isMenuVisible: boolean;
  config: Config;
  categories: any;
  selectedCategory: string;
  isTimerStart: boolean;
  isInterval: boolean;
  endTime: number;
  timeleft: number;
}

const config: Config = {
  intervalInit: 5,
  breakInit: 2,
  categories: ['default', 'study', 'work']
};

const initialState: Timer = {
  isMenuVisible: false,
  config,
  categories: config.categories.reduce(
    (acc, ctg) => ({ ...acc, [ctg]: 0 }),
    {}
  ),
  selectedCategory: 'default',
  isTimerStart: false,
  isInterval: true,
  endTime: 0,
  timeleft: config.intervalInit
};

export default (state = initialState, action: any) => {
  const { intervalInit, breakInit } = state.config;
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        [action.field]: action[action.field]
      };
    case START_TIMER:
      const seconds = state.isInterval ? intervalInit : breakInit;
      return {
        ...state,
        isTimerStart: action.isTimerStart,
        endTime: action.startTime + seconds * 1000,
        timeleft: (action.startTime + seconds * 1000 - action.startTime) / 1000
      };
    case RESET_RETRY_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart,
        timeleft: state.isInterval ? intervalInit : breakInit
      };
    case SWITCH_FAZE:
      return {
        ...state,
        isInterval: !action.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !action.isInterval ? intervalInit : breakInit,
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
        config: {
          ...state.config,
          categories: [...state.config.categories, action.categoryName]
        },
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
        timeleft: intervalInit,
        categories: {
          ...state.categories,
          [state.selectedCategory]: !state.isInterval
            ? state.categories[state.selectedCategory] + 1
            : state.categories[state.selectedCategory]
        }
      };
    }
    case SHOW_MENU: {
      return {
        ...state,
        isMenuVisible: action.isMenuVisible
      };
    }
    case SET_TIMERS: {
      return {
        ...state,
        [`${action.timer}Time`]: action.seconds,
        config: {
          ...state.config,
          [`${action.timer}Init`]: action.seconds
        }
      };
    }
    default:
      return state;
  }
};
