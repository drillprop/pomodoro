import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateTimer,
  startPauseTimer,
  resetRetryTimer,
  switchFaze,
  switchCategory
} from '../duck/timer/timerActions';
import { useSelector } from 'react-redux';
import { convertSeconds } from '../utils/helpers';

interface TimerState {
  seconds: number;
  isInterval: boolean;
  timeAsString: string;
  isTimerStart: boolean;
  categories: object;
}

interface TimerMethods {
  startPause: any;
  reset: any;
  retry: any;
  switchCtg: any;
}
const useTimer = (): [TimerState, TimerMethods] => {
  const seconds: number = useSelector((state: any) =>
    state.isInterval ? state.intervalTime : state.breakTime
  );
  const isInterval = useSelector((state: any) => state.isInterval);
  const timeAsString = convertSeconds(seconds);
  const isTimerStart = useSelector((state: any) => state.isTimerStart);
  const categories = useSelector((state: any) => state.categories);

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

  const switchCtg = (categoryName: string) => {
    dispatch(switchCategory(categoryName));
  };

  const fazeSwitch = () => {
    dispatch(switchFaze(isInterval));
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
  return [
    { seconds, timeAsString, isTimerStart, isInterval, categories },
    { startPause, reset, retry, switchCtg }
  ];
};

export default useTimer;
