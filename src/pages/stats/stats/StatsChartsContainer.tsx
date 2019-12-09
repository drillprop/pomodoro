import React, { FC, useEffect, useMemo } from 'react';
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

  const timeStatsComponent = useMemo(() => {
    return (
      <StatsChart
        dates={timeStats.dates}
        label='minutes'
        suggestedMax={200}
        stepSize={20}
        statsValues={timeStats.values}
      />
    );
  }, [stats]);

  const intervalStatsComponent = useMemo(() => {
    return (
      <StatsChart
        dates={intervalStats.dates}
        statsValues={intervalStats.values}
        label='intervals'
        suggestedMax={15}
      />
    );
  }, [stats]);

  return (
    <>
      <Heading level='h2' mtop={28}>
        intervals
      </Heading>
      {intervalStatsComponent}
      <Heading level='h2' mtop={28}>
        time
      </Heading>
      {timeStatsComponent}
    </>
  );
};

export default StatsChartContainer;
