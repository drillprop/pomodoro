import moment = require('moment');

export const convertSecToStr = (seconds: number): string => {
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

export const convertSecToObj = (seconds: number): object => {
  const timerDurationSeconds = moment.duration(seconds, 'seconds').seconds();
  const timerDurationMinutes = moment.duration(seconds, 'seconds').minutes();
  const timerDurationHours = moment.duration(seconds, 'seconds').hours();
  return {
    hours: timerDurationHours,
    minutes: timerDurationMinutes,
    seconds: timerDurationSeconds
  };
};

export const countTimeLeft = (now: number, future: number): number => {
  const momentNow = moment(now);
  const momentFuture = moment(future);

  const seconds = momentFuture.diff(momentNow, 'seconds');

  return seconds;
};
