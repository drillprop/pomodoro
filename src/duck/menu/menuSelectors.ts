import { createSelector } from 'reselect';
import { ReduxState } from '../store';

export const selectTimer = ({ menu }: ReduxState) => menu;

export const selectIsMenuVisible = createSelector(
  [selectTimer],
  ({ isMenuVisible }) => isMenuVisible
);
