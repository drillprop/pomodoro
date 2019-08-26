import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import useTimerState from './useTimerState';
import { countTimeLeft } from '../utils/helpers';
// import { switchFaze } from '../duck/timer/timerActions';

export default () => {
  // const dispatch = useDispatch();
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
      // timeoutSwitch = setTimeout(() => dispatch(switchFaze(isInterval)), 1000);
    }

    if (!isTimerStart) setCount(timeleft);

    return () => {
      clearTimeout(timeoutTimer);
      clearTimeout(timeoutSwitch);
    };
  }, [count, isTimerStart, isInterval, endTime, timeleft]);

  return count;
};
