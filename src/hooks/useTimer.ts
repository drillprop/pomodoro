import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateTimer,
  startPauseTimer,
  resetRetryTimer,
  switchFaze,
  switchCategory
} from '../duck/timer/actions';
import useTimerState from './useTimerState';

const useTimer = (): [any, any, any, any] => {
  const [seconds, , isTimerStart, isInterval] = useTimerState();
  const dispatch = useDispatch();

  const updateSeconds = (num: number) => {
    if (num >= 0) {
      dispatch(updateTimer(num, isInterval));
    } else {
      dispatch(updateTimer(0, isInterval));
    }
  };

  const startPause = () => {
    dispatch(startPauseTimer(isTimerStart));
  };

  const reset = () => {
    dispatch(resetRetryTimer(false));
    if (!isInterval) {
      updateSeconds(0);
      fazeSwitch();
    }
  };

  const retry = () => {
    dispatch(resetRetryTimer(isTimerStart));
  };

  const fazeSwitch = () => {
    dispatch(switchFaze(isInterval));
  };

  const categorySwitch = (categoryName: string) => {
    dispatch(switchCategory(categoryName));
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTimerStart)
      timeout = setTimeout(() => {
        updateSeconds(seconds - 1);
        !seconds && startPause();
        !seconds && fazeSwitch();
      }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return [startPause, reset, retry, categorySwitch];
};

export default useTimer;
