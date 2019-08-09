import { useSelector } from 'react-redux';
import { convertSecToObj } from '../utils/helpers';
import { useState } from 'react';

export default (faze: string) => {
  // get seconds from config
  const initSecs = useSelector((state: any) => state.config[`${faze}Init`]);

  // convert to obj with minutes and seconds
  const timeleftAsObj: any = convertSecToObj(initSecs);
  timeleftAsObj.minutes = timeleftAsObj.minutes + timeleftAsObj.hours * 60;
  delete timeleftAsObj.hours;

  const [timeleft, setTimeleft] = useState(timeleftAsObj);

  const updateState = (e: any) => {
    let { name, max, min, value } = e.target;

    e.target.value = '';
    const maxLength = name.includes('min') ? 3 : 2;

    const spliced = parseInt(
      value
        .split('')
        .slice(-maxLength)
        .join('')
    );

    const propertyName = name.includes('min') ? 'minutes' : 'seconds';

    if (spliced <= max && spliced >= min) {
      setTimeleft({ ...timeleft, [propertyName]: spliced });
    } else if (spliced > max) {
      setTimeleft({ ...timeleft, [propertyName]: parseInt(max) });
    } else {
      setTimeleft({ ...timeleft, [propertyName]: parseInt(min) });
    }
  };

  return [timeleft, updateState];
};
