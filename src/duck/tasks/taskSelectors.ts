import { createSelector } from 'reselect';
import { ReduxState } from '../store';

export const selectTasks = ({ tasks }: ReduxState) => tasks;

export const selectEveryTasks = createSelector(
  [selectTasks],
  ({ tasks }) => tasks
);

export const selectSelectedTask = createSelector(
  [selectTasks],
  ({ selectedTask }) => selectedTask
);

export const selectIsTasksLoading = createSelector(
  [selectTasks],
  ({ isLoading }) => isLoading
);

export const selectTasksError = createSelector(
  [selectTasks],
  ({ error }) => error
);
