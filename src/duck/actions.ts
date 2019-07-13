import { UPDATE_TIMER, START_PAUSE_TIMER, RESET_RETRY_TIMER } from './types';

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

export const resetRetryTimer = (isTimerStart: boolean) => {
  return {
    type: RESET_RETRY_TIMER,
    isTimerStart
  };
};
