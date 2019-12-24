import { useState, useEffect } from 'react';
import { countTimeLeft } from '../utils/helpers';
import { ReduxState } from '../duck/store';
import { createStructuredSelector } from 'reselect';
import {
  selectIsTimerStart,
  selectIsInterval,
  selectEndTime,
  selectTimeleft
} from '../duck/timer/timerSelectors';
import { useSelector } from 'react-redux';

const sound = new Audio(require('../assets/sounds/typewriter.mp3'));

interface Selectors {
  isTimerStart: boolean;
  isInterval: boolean;
  endTime: number;
  timeleft: number;
}

const timerSelectors = createStructuredSelector<ReduxState, Selectors>({
  isTimerStart: selectIsTimerStart,
  isInterval: selectIsInterval,
  endTime: selectEndTime,
  timeleft: selectTimeleft
});

export default () => {
  const { isTimerStart, endTime, timeleft } = useSelector(timerSelectors);

  const initTime: number = endTime
    ? Math.floor((endTime - Date.now()) / 1000)
    : timeleft;

  let [count, setCount] = useState(initTime);

  useEffect(() => {
    let timeoutTimer: any;
    const left = countTimeLeft(Date.now(), endTime);

    if (isTimerStart) {
      timeoutTimer = setTimeout(() => {
        setCount(left);
      }, 1000);
    }

    if (count < 0) {
      setCount(0);
      clearTimeout(timeoutTimer);
    }

    if (!isTimerStart) {
      setCount(timeleft);
    }

    if (!isTimerStart && count === 0) {
      sound.play();
    }

    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [count, isTimerStart, timeleft]);

  return count;
};
