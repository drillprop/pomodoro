import { useState, useEffect } from 'react';

import useTimerState from './useTimerState';
import { countTimeLeft } from '../utils/helpers';

export default () => {
  const { isTimerStart, isInterval, endTime, timeleft } = useTimerState();

  const initTime: number = endTime
    ? Math.floor((endTime - Date.now()) / 1000 + 1)
    : timeleft;

  let [count, setCount] = useState(initTime);

  useEffect(() => {
    let timeoutTimer: any;
    let timeoutSwitch: any;
    const left = countTimeLeft(Date.now(), endTime);

    if (isTimerStart) {
      timeoutTimer = setTimeout(() => {
        setCount(left);
      }, 1000);
    }

    if (count <= 0 && isTimerStart) {
      setCount(0);
      clearTimeout(timeoutTimer);
    }

    if (!isTimerStart) setCount(timeleft);

    return () => {
      clearTimeout(timeoutTimer);
      clearTimeout(timeoutSwitch);
    };
  }, [count, isTimerStart, isInterval, endTime, timeleft]);

  return count;
};
