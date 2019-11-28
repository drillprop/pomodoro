import { createSelector } from 'reselect';
import { ReduxState } from '../store';

export const selectStats = ({ stats }: ReduxState) => stats;

export const selectStatsByDay = createSelector(
  [selectStats],
  ({ statsByDay }) => statsByDay
);

export const selectIsStatsFetching = createSelector(
  [selectStats],
  ({ isFetching }) => isFetching
);

export const selectStatsError = createSelector(
  [selectStats],
  ({ error }) => error
);
