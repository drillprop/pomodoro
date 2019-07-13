import { useSelector } from 'react-redux';
import { convertSeconds } from '../utils/helpers';

const useTimerState = () => {
  const seconds = useSelector((state: any) => state.seconds);
  const isInterval = useSelector((state: any) => state.isInterval);
  const timeAsString = convertSeconds(seconds);
  const isTimerStart = useSelector((state: any) => state.isTimerStart);

  const faze = isInterval ? 'interval' : 'break';

  return [seconds, timeAsString, isTimerStart, faze];
};

export default useTimerState;
