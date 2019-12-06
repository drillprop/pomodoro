import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatsStart } from '../../../duck/stats/statsActions';
import {
  selectIntervalStats,
  selectStatsByDay,
  selectTimeStats
} from '../../../duck/stats/statsSelectors';
import StatsChart from './stats-charts-container/StatsChart';
import Heading from '../../../components/Heading/Heading';

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
      <Heading level='h2' mtop={28}>
        intervals
      </Heading>
      <StatsChart
        dates={intervalStats.dates}
        statsValues={intervalStats.values}
      />
      <Heading level='h2' mtop={28}>
        time
      </Heading>
      <StatsChart dates={timeStats.dates} statsValues={timeStats.values} />
    </>
  );
};

export default StatsChartContainer;
