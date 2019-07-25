import { useSelector } from 'react-redux';
import { convertSeconds } from '../utils/helpers';

const useTimerState = () => {
  const seconds: number = useSelector((state: any) =>
    state.isInterval ? state.intervalTime : state.breakTime
  );
  const isInterval: boolean = useSelector((state: any) => state.isInterval);
  const timeAsString: any = convertSeconds(seconds);
  const isTimerStart: boolean = useSelector((state: any) => state.isTimerStart);
  const categories: string = useSelector((state: any) => state.categories);

  return [seconds, timeAsString, isTimerStart, isInterval, categories];
};

export default useTimerState;
