import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer, startPauseTimer } from '../duck/actions';
import useTimerState from './useTimerState';

const useTimer = (): [any] => {
  const [seconds, , isTimerStart] = useTimerState();
  const dispatch = useDispatch();

  const updateTimer = (num: number) => {
    if (num >= 0) {
      dispatch(setTimer(num));
    } else dispatch(setTimer(0));
  };

  const startPause = () => {
    dispatch(startPauseTimer(isTimerStart));
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTimerStart)
      timeout = setTimeout(() => updateTimer(seconds - 1), 1000);
    if (seconds === 0 && isTimerStart) startPause();
    return () => clearTimeout(timeout);
  });

  return [startPause];
};

export default useTimer;
