import {
  UPDATE_TIMER,
  START_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SWITCH_CATEGORY,
  SHOW_MENU,
  SET_TIMERS,
  PAUSE_TIMER
} from './timerTypes';

interface InitialTimeleft {
  intervalTime: number;
  breakTime: number;
}

interface Config {
  initialTimeleft: InitialTimeleft;
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
  initialTimeleft: {
    intervalTime: 5,
    breakTime: 2
  },
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
  timeleft: config.initialTimeleft.intervalTime
};

export default (state = initialState, action: any) => {
  const { intervalTime, breakTime } = state.config.initialTimeleft;
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        [action.field]: action[action.field]
      };
    case START_TIMER:
      return {
        ...state,
        isTimerStart: true,
        endTime: state.timeleft * 1000 + action.startTime
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isTimerStart: false,
        timeleft: Math.floor((state.endTime - action.pauseTime) / 1000 + 1),
        endTime: 0
      };
    case RESET_RETRY_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart,
        timeleft: state.isInterval ? intervalTime : breakTime
      };
    case SWITCH_FAZE:
      return {
        ...state,
        isInterval: !action.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !action.isInterval ? intervalTime : breakTime,
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
        timeleft: intervalTime,
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
        isInterval: true,
        isTimerStart: false,
        timeleft:
          action.timer === 'breakTime' ? state.timeleft : action.seconds,
        config: {
          ...state.config,
          initialTimeleft: {
            ...state.config.initialTimeleft,
            [action.timer]: action.seconds
          }
        }
      };
    }
    default:
      return state;
  }
};
