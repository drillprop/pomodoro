import {
  UPDATE_TIMER,
  START_TIMER,
  RESET_TIMER,
  SWITCH_FAZE,
  SWITCH_TASK,
  SHOW_MENU,
  SET_TIMERS,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE
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
  timeleft: config.initialTimeleft.intervalTime
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
    case SWITCH_FAZE:
      return {
        ...state,
        isInterval: !action.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !action.isInterval ? intervalTime : breakTime
      };
    case STOP_AND_SWITCH_FAZE:
      return {
        ...state,
        isInterval: !state.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !state.isInterval ? intervalTime : breakTime
      };
    case SWITCH_TASK: {
      return {
        ...state,
        isTimerStart: false,
        isInterval: true,
        timeleft: intervalTime
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
