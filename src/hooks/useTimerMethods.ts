import { useDispatch } from 'react-redux';
import useTimerState from './useTimerState';
import {
  updateTimer,
  startPauseTimer,
  resetRetryTimer,
  switchCategory,
  switchFaze
} from '../duck/timer/timerActions';

export default () => {
  const dispatch = useDispatch();
  const { seconds, isInterval, isTimerStart } = useTimerState();

  //DISPATCHERS
  const retry = () => {
    dispatch(resetRetryTimer(isTimerStart));
  };

  const switchCtg = (categoryName: string) => {
    dispatch(switchCategory(categoryName));
  };

  const fazeSwitch = () => {
    dispatch(switchFaze(isInterval));
  };

  const startPause = () => {
    dispatch(startPauseTimer(isTimerStart));
  };

  const updateSeconds = (num: number) => {
    if (num >= 0) {
      dispatch(updateTimer(num, isInterval));
    } else {
      dispatch(updateTimer(0, isInterval));
    }
  };

  const reset = () => {
    dispatch(resetRetryTimer(false));
    if (!isInterval) {
      updateSeconds(0);
      fazeSwitch();
    }
  };

  return { startPause, reset, retry, switchCtg, fazeSwitch, updateSeconds };
};
