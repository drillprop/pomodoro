import { UPDATE_TIMER, START_PAUSE_TIMER, RESET_RETRY_TIMER } from './types';

interface Timer {
  seconds: number;
  isTimerStart: boolean;
  isInterval: boolean;
}

const initialState: Timer = {
  seconds: 60 * 30,
  isTimerStart: false,
  isInterval: true
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        seconds: action.seconds
      };
    case START_PAUSE_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart
      };
    case RESET_RETRY_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart,
        seconds: initialState.seconds
      };
    default:
      return state;
  }
};
