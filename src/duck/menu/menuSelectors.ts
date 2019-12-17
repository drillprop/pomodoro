import { createSelector } from 'reselect';
import { ReduxState } from '../store';

export const selectMenu = ({ menu }: ReduxState) => menu;

export const selectIsMenuVisible = createSelector(
  [selectMenu],
  ({ isMenuVisible }) => isMenuVisible
);

export const selectNotification = createSelector(
  [selectMenu],
  ({ notification }) => notification
);
