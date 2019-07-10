import { SET_TIMER } from './types';

export const setTimer = (seconds: number) => {
  return {
    type: SET_TIMER,
    seconds
  };
};
