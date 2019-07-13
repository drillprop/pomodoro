import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTimer, startPauseTimer, resetRetryTimer } from '../duck/actions';
import useTimerState from './useTimerState';

const useTimer = (): [any, any, any] => {
  const [seconds, , isTimerStart] = useTimerState();
  const dispatch = useDispatch();

  const updateSeconds = (num: number) => {
    if (num >= 0) {
      dispatch(updateTimer(num));
    } else dispatch(updateTimer(0));
  };

  const startPause = () => {
    dispatch(startPauseTimer(isTimerStart));
  };
  const reset = () => {
    dispatch(resetRetryTimer(false));
  };
  const retry = () => {
    dispatch(resetRetryTimer(isTimerStart));
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTimerStart)
      timeout = setTimeout(() => updateSeconds(seconds - 1), 1000);
    if (seconds === 0 && isTimerStart) startPause();
    return () => clearTimeout(timeout);
  });

  return [startPause, reset, retry];
};

export default useTimer;
