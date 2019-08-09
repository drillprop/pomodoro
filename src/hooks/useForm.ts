import { useSelector } from 'react-redux';
import { convertSecToObj } from '../utils/helpers';

export default () => {
  const initialSeconds = useSelector(
    (state: any) => state.config.initialTimeleft
  );
  const secondsEntries = Object.entries(initialSeconds);

  const reducedToObj = secondsEntries.reduce((acc: any, item: any) => {
    return {
      ...acc,
      [item[0]]: convertSecToObj(item[1])
    };
  }, {});

  console.log(reducedToObj);
};
