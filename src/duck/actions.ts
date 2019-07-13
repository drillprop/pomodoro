import { SET_TIMER, START_PAUSE_TIMER } from './types';

export const setTimer = (seconds: number) => {
  return {
    type: SET_TIMER,
    seconds
  };
};

export const startPauseTimer = (isTimerStart: boolean) => {
  return {
    type: START_PAUSE_TIMER,
    isTimerStart: !isTimerStart
  };
};
