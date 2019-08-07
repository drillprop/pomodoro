import { useDispatch } from 'react-redux';
import useTimerState from './useTimerState';
import { updateTimer } from '../duck/timer/timerActions';

export default () => {
  const dispatch = useDispatch();
  const { isInterval } = useTimerState();

  const updateSeconds = (num: number) => {
    if (num >= 0) {
      dispatch(updateTimer(num, isInterval));
    } else {
      dispatch(updateTimer(0, isInterval));
    }
  };

  return { updateSeconds };
};
