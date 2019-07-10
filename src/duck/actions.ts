import { SET_TIMER } from './types';

export const setTimer = (seconds: number, timeAsString: string) => ({
  type: SET_TIMER,
  seconds,
  timeAsString
});
