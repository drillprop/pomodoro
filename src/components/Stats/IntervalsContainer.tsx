import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchIntervalsByDay } from '../../duck/stats/statsActions';
import IntervalsToday from './IntervalsToday';
import IntervalsOverall from './IntervalsOverall';
import React from 'react';
import { getToday } from '../../utils/helpers';

const IntervalsContainer = () => {
  const dispatch = useDispatch();

  const today = getToday();

  useEffect(() => {
    dispatch(fetchIntervalsByDay());
  }, []);

  const intervalsToday: any = useSelector(({ stats }: any) => {
    if (stats.intervalsByDay && stats.intervalsByDay[today]) {
      const values: Array<number> = Object.values(stats.intervalsByDay[today]);
      return values.reduce((acc, item) => acc + item, 0);
    }
    return null;
  });

  return (
    <>
      <IntervalsToday intervalsToday={intervalsToday} />
      <IntervalsOverall />
    </>
  );
};

export default IntervalsContainer;
