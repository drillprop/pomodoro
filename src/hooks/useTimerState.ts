import { useSelector } from 'react-redux';
import { ReduxState } from '../duck/store';

export default () => {
  const reduxState = useSelector(({ timer }: ReduxState) => timer);

  return { ...reduxState };
};
