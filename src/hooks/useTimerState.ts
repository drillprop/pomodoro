import { useSelector } from 'react-redux';
import { convertSeconds } from '../utils/helpers';

const useTimerState = () => {
  const seconds: number = useSelector((state: any) => state.seconds);
  const isInterval: boolean = useSelector((state: any) => state.isInterval);
  const timeAsString: any = convertSeconds(seconds);
  const isTimerStart: boolean = useSelector((state: any) => state.isTimerStart);

  return [seconds, timeAsString, isTimerStart, isInterval];
};

export default useTimerState;
