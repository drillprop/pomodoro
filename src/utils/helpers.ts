import moment = require('moment');

export const convertSeconds = (seconds: number): string => {
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
    .duration(seconds, 'seconds')
    .hours()
    .toString()
    .padStart(2, '0');
  if (seconds < 60 * 60)
    return `${timerDurationMinutes}:${timerDurationSeconds}`;
  else
    return `${timerDurationHours}:${timerDurationMinutes}:${timerDurationSeconds}`;
};
