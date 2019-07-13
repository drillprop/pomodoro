import { useSelector } from 'react-redux';
import { convertSeconds } from '../utils/helpers';

const useTimerState = () => {
  const seconds = useSelector((state: any) => state.seconds);
  const isInterval = useSelector((state: any) => state.isInterval);
  const timeAsString = convertSeconds(seconds);
  const isTimerStart = useSelector((state: any) => state.isTimerStart);

  return [seconds, timeAsString, isTimerStart, isInterval];
};

export default useTimerState;
