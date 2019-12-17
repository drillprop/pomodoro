import {
  START_TIMER,
  RESET_TIMER,
  SHOW_MENU,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  SET_TIMERS_DURATION_SUCCES,
  SET_TIMERS_DURATION_FAILURE
} from './timerTypes';
import { SWITCH_TASK_SUCCESS } from '../tasks/taskTypes';
import { LOGIN_SUCCESS, SIGN_OUT_SUCCESS } from '../users/userTypes';
import { TimerActionTypes } from './timerInterfaces';

export interface Config {
  intervalTime: number;
  breakTime: number;
}

export interface TimerState {
  isMenuVisible: boolean;
  config: Config;
  isTimerStart: boolean;
  isInterval: boolean;
  endTime: number;
  timeleft: number;
  isFetching: boolean;
  error: any | null;
}

const config: Config = {
  intervalTime: 5,
  breakTime: 2
};

const initialState: TimerState = {
  isMenuVisible: false,
  config,
  isTimerStart: false,
  isInterval: true,
  endTime: 0,
  timeleft: config.intervalTime,
  isFetching: true,
  error: null
};

export default (state = initialState, action: TimerActionTypes): TimerState => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isTimerStart: true,
        endTime: state.timeleft * 1000 + action.payload.startTime
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isTimerStart: false,
        timeleft: Math.floor((state.endTime - action.payload) / 1000 + 1),
        endTime: 0
      };
    case RESET_TIMER:
      return {
        ...state,
        isTimerStart: false,
        timeleft: state.isInterval
          ? state.config.intervalTime
          : state.config.breakTime
      };
    case SKIP_BREAK:
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        endTime: 0,
        timeleft: state.config.intervalTime
      };
    case STOP_AND_SWITCH_FAZE:
      return {
        ...state,
        isInterval: !state.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !state.isInterval
          ? state.config.intervalTime
          : state.config.breakTime
      };
    case SWITCH_TASK_SUCCESS:
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        timeleft: state.config.intervalTime
      };
    case SET_TIMERS_DURATION_SUCCES:
      return {
        ...state,
        isInterval: true,
        isTimerStart: false,
        timeleft: action.payload.intervalTime,
        config: {
          ...state.config,
          ...action.payload
        }
      };
    case SET_TIMERS_DURATION_FAILURE:
      return {
        ...state,
        error: {
          message: action.payload.message || null,
          code: action.payload.code || null
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        timeleft: state.isInterval
          ? action.payload.config.intervalTime
          : action.payload.config.breakTime,
        isFetching: false,
        config: { ...action.payload.config }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        config: { ...initialState.config },
        timeleft: initialState.config.intervalTime
      };
    default:
      return state;
  }
};
