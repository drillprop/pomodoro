import {
  START_TIMER,
  RESET_TIMER,
  SHOW_MENU,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  FETCH_INITIAL_STATE_START,
  FETCH_INITIAL_STATE_SUCCES,
  FETCH_INITIAL_STATE_FAILURE,
  SET_TIMERS_DURATION_SUCCES,
  SET_TIMERS_DURATION_FAILURE
} from './timerTypes';

import { SWITCH_TASK_SUCCESS } from '../tasks/taskTypes';
import { LOGIN_FAILURE } from '../users/userTypes';
import { TimerActionTypes } from './timerInterfaces';

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
  error: any | null;
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
  isFetching: true,
  error: null
};

export default (state = initialState, action: TimerActionTypes): TimerState => {
  const { intervalTime, breakTime } = state.config.initialTimeleft;
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
    case SWITCH_TASK_SUCCESS:
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        timeleft: intervalTime
      };
    case SHOW_MENU:
      return {
        ...state,
        isMenuVisible: action.payload
      };
    case SET_TIMERS_DURATION_SUCCES:
      return {
        ...state,
        isInterval: true,
        isTimerStart: false,
        timeleft: action.payload.intervalTime,
        config: {
          ...state.config,
          initialTimeleft: { ...action.payload }
        }
      };
    case SET_TIMERS_DURATION_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // case FETCH_INITIAL_STATE_START:
    //   return {
    //     ...state,
    //     isFetching: true
    //   };
    // case FETCH_INITIAL_STATE_SUCCES:
    //   const actionBreakTime: number = action.initial.config.breakTime;
    //   const actionIntervalTime: number = action.initial.config.intervalTime;
    //   return {
    //     ...state,
    //     isFetching: false,
    //     timeleft: state.isInterval ? actionIntervalTime : actionBreakTime,
    //     config: {
    //       ...state.config,
    //       initialTimeleft: action.initial.config
    //     }
    //   };
    // case FETCH_INITIAL_STATE_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: action.error
    //   };
    // case LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false
    //   };
    default:
      return state;
  }
};
