import { SET_TIMER, TOGGLE_TIMER } from './types';

export const setTimer = (seconds: number) => {
  return {
    type: SET_TIMER,
    seconds
  };
};

export const toggleTimer = (isTimerStart: boolean) => {
  return {
    type: TOGGLE_TIMER,
    isTimerStart: !isTimerStart
  };
};
