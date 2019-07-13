import { UPDATE_TIMER, START_PAUSE_TIMER } from './types';

export const updateTimer = (seconds: number) => {
  return {
    type: UPDATE_TIMER,
    seconds
  };
};

export const startPauseTimer = (isTimerStart: boolean) => {
  return {
    type: START_PAUSE_TIMER,
    isTimerStart: !isTimerStart
  };
};
