import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, toggleTimer } from '../duck/actions';
import { convertSeconds } from '../utils/helpers';

const useTimer = (): [string, number, (num: number) => void, any] => {
  const dispatch = useDispatch();
  const seconds = useSelector((state: any) => state.seconds);
  const isTimerStart = useSelector((state: any) => state.isTimerStart);

  // useTimer - to pause, play, stop, reset timer!
  // useConfigTimer - to set length of interval and break

  const timeAsString = convertSeconds(seconds);

  const updateTimer = (num: number) => {
    if (num >= 0) {
      dispatch(setTimer(num));
    } else dispatch(setTimer(0));
  };

  const startTimer = () => {
    dispatch(toggleTimer(isTimerStart));
  };

  useEffect(() => {
    let timeout: any;
    if (isTimerStart)
      timeout = setTimeout(() => updateTimer(seconds - 1), 1000);
    if (seconds === 0 && isTimerStart) startTimer();
    return () => clearTimeout(timeout);
  });

  return [timeAsString, seconds, updateTimer, startTimer];
};

export default useTimer;
