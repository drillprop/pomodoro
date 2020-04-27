import { useState, useEffect } from 'react';
import { countTimeLeft } from '../utils/helpers';
import { ReduxState } from '../duck/store';
import { createStructuredSelector } from 'reselect';
import {
  selectIsTimerStart,
  selectIsInterval,
  selectEndTime,
  selectTimeleft,
} from '../duck/timer/timerSelectors';
import { stopTimerAndSwitchFaze } from '../duck/timer/timerActions';
import { useSelector, useDispatch } from 'react-redux';

const sound = new Audio(require('../assets/sounds/typewriter.mp3'));
const blank = new Audio(require('../assets/sounds/blank.ogg'));
blank.playbackRate = 0.1;

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
  timeleft: selectTimeleft,
});

export default () => {
  const dispatch = useDispatch();
  const { isTimerStart, endTime, timeleft, isInterval } = useSelector(
    timerSelectors
  );

  const initTime: number = endTime
    ? Math.floor((endTime - Date.now()) / 1000 + 1)
    : timeleft;

  let [count, setCount] = useState(initTime);

  useEffect(() => {
    if (isTimerStart) {
      blank.play();
    } else {
      blank.pause();
      blank.currentTime = 0;
    }
  }, [isTimerStart]);

  useEffect(() => {
    let timeoutTimer: any;
    const left = countTimeLeft(Date.now(), endTime);

    if (isTimerStart) {
      timeoutTimer = setTimeout(() => {
        setCount(left);
      }, 1000);
    } else {
      setCount(timeleft);
    }

    if (isTimerStart && count <= 0) {
      clearTimeout(timeoutTimer);
      sound.play();
      dispatch(stopTimerAndSwitchFaze(isInterval));
    }

    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [count, isTimerStart, endTime, timeleft, isInterval]);

  return count;
};
