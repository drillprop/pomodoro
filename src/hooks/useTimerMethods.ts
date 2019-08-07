import { useDispatch } from 'react-redux';
import useTimerState from './useTimerState';
import { updateTimer, switchFaze } from '../duck/timer/timerActions';

export default () => {
  const dispatch = useDispatch();
  const { isInterval } = useTimerState();

  const fazeSwitch = () => {
    dispatch(switchFaze(isInterval));
  };

  const updateSeconds = (num: number) => {
    if (num >= 0) {
      dispatch(updateTimer(num, isInterval));
    } else {
      dispatch(updateTimer(0, isInterval));
    }
  };

  return { fazeSwitch, updateSeconds };
};
