import { useSelector } from 'react-redux';
import { convertSecToStr } from '../utils/helpers';

export default () => {
  const reduxState = useSelector((state: any) => state);

  const seconds = reduxState.isInterval
    ? reduxState.intervalTime
    : reduxState.breakTime;

  const timeAsString = convertSecToStr(seconds);

  return { ...reduxState, seconds, timeAsString };
};
