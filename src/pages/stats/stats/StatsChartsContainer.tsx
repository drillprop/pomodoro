import React, { FC, useEffect } from 'react';
import { SubTitle } from '../../../elements/Titles';
import StatsChart from './stats-charts-container/StatsChart';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatsStart } from '../../../duck/stats/statsActions';
import {
  selectTimeStats,
  selectIntervalStats,
  selectStatsByDay
} from '../../../duck/stats/statsSelectors';

const StatsChartContainer: FC<{ days: number }> = ({ days }) => {
  const dispatch = useDispatch();
  const timeStats = useSelector(selectTimeStats(days));
  const intervalStats = useSelector(selectIntervalStats(days));
  const stats = useSelector(selectStatsByDay);

  useEffect(() => {
    if (!stats) {
      dispatch(fetchStatsStart());
    }
  }, [fetchStatsStart, stats]);

  return (
    <>
      <SubTitle>intervals</SubTitle>
      <StatsChart
        dates={intervalStats.dates}
        statsValues={intervalStats.values}
      />
      <SubTitle>time</SubTitle>
      <StatsChart dates={timeStats.dates} statsValues={timeStats.values} />
    </>
  );
};

export default StatsChartContainer;
