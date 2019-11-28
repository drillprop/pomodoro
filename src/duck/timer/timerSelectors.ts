import { createSelector } from 'reselect';
import { ReduxState } from '../store';

export const selectTimer = ({ timer }: ReduxState) => timer;

export const selectIsMenuVisible = createSelector(
  [selectTimer],
  ({ isMenuVisible }) => isMenuVisible
);

export const selectConfig = createSelector(
  [selectTimer],
  ({ config }) => config
);

export const selectIsTimerStart = createSelector(
  [selectTimer],
  ({ isTimerStart }) => isTimerStart
);

export const selectIsInterval = createSelector(
  [selectTimer],
  ({ isInterval }) => isInterval
);

export const selectEndTime = createSelector(
  [selectTimer],
  ({ endTime }) => endTime
);

export const selectTimeleft = createSelector(
  [selectTimer],
  ({ timeleft }) => timeleft
);

export const selectIsFetching = createSelector(
  [selectTimer],
  ({ isFetching }) => isFetching
);

export const selectError = createSelector([selectTimer], ({ error }) => error);
