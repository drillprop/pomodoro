import { SET_TIMER, START_PAUSE_TIMER } from './types';

interface Timer {
  seconds: number;
  isTimerStart: boolean;
}

const initialState: Timer = {
  seconds: 60 * 30,
  isTimerStart: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        seconds: action.seconds
      };
    case START_PAUSE_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart
      };
    default:
      return state;
  }
};
