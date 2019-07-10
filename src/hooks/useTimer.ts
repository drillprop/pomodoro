import moment = require('moment');
import { useDispatch, useSelector } from 'react-redux';
import { setTimer } from '../duck/actions';

const useTimer = (inputValue = 0): [string, number, (num: number) => void] => {
  const dispatch = useDispatch();
  const seconds = useSelector((state: any) => state.seconds);

  const convertSeconds = (seconds: number): string => {
    const timerDurationSeconds = moment
      .duration(seconds, 'seconds')
      .seconds()
      .toString()
      .padStart(2, '0');
    const timerDurationMinutes = moment
      .duration(seconds, 'seconds')
      .minutes()
      .toString()
      .padStart(2, '0');
    const timerDurationHours = moment
      .duration(seconds, 'hours')
      .seconds()
      .toString()
      .padStart(2, '0');
    return `${timerDurationHours}:${timerDurationMinutes}:${timerDurationSeconds}`;
  };
  const timeAsString = convertSeconds(seconds);

  const updateTimer = (num: number) => {
    if (num >= 0) {
      dispatch(setTimer(num));
    } else dispatch(setTimer(0));
  };

  return [timeAsString, seconds, updateTimer];
};

export default useTimer;
