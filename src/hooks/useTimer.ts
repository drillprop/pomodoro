import { useState } from 'react';
import moment = require('moment');

const useTimer = (inputValue = 0): [string, number, (num: number) => void] => {
  const [seconds, setSeconds] = useState(inputValue);

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
    if (num >= 0) setSeconds(num);
    else setSeconds(0);
  };

  return [timeAsString, seconds, updateTimer];
};

export default useTimer;
