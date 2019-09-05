import {
  UPDATE_TIMER,
  START_TIMER,
  RESET_TIMER,
  SWITCH_TASK,
  SHOW_MENU,
  SET_TIMERS,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  GET_INITIAL_STATE,
  FETCH_INITIAL_STATE_START,
  FETCH_INITIAL_STATE_SUCCES,
  FETCH_INITIAL_STATE_FAILURE
} from '../reduxTypes';

type InitialTimeleft = {
  intervalTime: number;
  breakTime: number;
};

type Config = {
  initialTimeleft: InitialTimeleft;
};

export interface TimerState {
  isMenuVisible: boolean;
  config: Config;
  isTimerStart: boolean;
  isInterval: boolean;
  endTime: number;
  timeleft: number;
  isFetching: boolean;
  errorMessage: string;
}

const config: Config = {
  initialTimeleft: {
    intervalTime: 5,
    breakTime: 2
  }
};

const initialState: TimerState = {
  isMenuVisible: false,
  config,
  isTimerStart: false,
  isInterval: true,
  endTime: 0,
  timeleft: config.initialTimeleft.intervalTime,
  isFetching: false,
  errorMessage: ''
};

export default (state: TimerState = initialState, action: any) => {
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
    case RESET_TIMER:
      return {
        ...state,
        isTimerStart: false,
        timeleft: state.isInterval ? intervalTime : breakTime
      };
    case SKIP_BREAK:
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        endTime: 0,
        timeleft: intervalTime
      };
    case STOP_AND_SWITCH_FAZE:
      return {
        ...state,
        isInterval: !state.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !state.isInterval ? intervalTime : breakTime
      };
    case SWITCH_TASK:
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        timeleft: intervalTime
      };
    case SHOW_MENU:
      return {
        ...state,
        isMenuVisible: action.isMenuVisible
      };
    case SET_TIMERS:
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
    case FETCH_INITIAL_STATE_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_INITIAL_STATE_SUCCES:
      const actionBreakTime: number = action.initial.config.breakTime;
      const actionIntervalTime: number = action.initial.config.intervalTime;

      const interval: number = actionIntervalTime || intervalTime;
      const breakK: number = actionBreakTime || breakTime;
      return {
        ...state,
        isFetching: false,
        timeleft: state.isInterval ? interval : breakK,
        config: {
          ...state.config,
          initialTimeleft: {
            ...state.config.initialTimeleft,
            intervalTime: interval,
            breakTime: breakK
          }
        }
      };
    case FETCH_INITIAL_STATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
