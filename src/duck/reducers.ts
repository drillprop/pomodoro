import {
  UPDATE_TIMER,
  START_PAUSE_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE
} from './types';

interface Timer {
  breakTime: number;
  intervalTime: number;
  isTimerStart: boolean;
  isInterval: boolean;
  intervals: number;
}

const initialState: Timer = {
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
    default:
      return state;
  }
};
