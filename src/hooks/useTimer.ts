import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer, toggleTimer } from '../duck/actions';
import useTimerState from './useTimerState';

const useTimer = (): [any] => {
  const [seconds, , isTimerStart] = useTimerState();
  const dispatch = useDispatch();

  const updateTimer = (num: number) => {
    if (num >= 0) {
      dispatch(setTimer(num));
    } else dispatch(setTimer(0));
  };

  const startPauseTimer = () => {
    dispatch(toggleTimer(isTimerStart));
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTimerStart)
      timeout = setTimeout(() => updateTimer(seconds - 1), 1000);
    if (seconds === 0 && isTimerStart) startPauseTimer();
    return () => clearTimeout(timeout);
  });

  return [startPauseTimer];
};

export default useTimer;
