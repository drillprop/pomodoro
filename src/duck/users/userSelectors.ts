import { createSelector } from 'reselect';
import { ReduxState } from '../store';

export const selectUser = ({ user }: ReduxState) => user;

export const selectCurrentUser = createSelector(
  [selectUser],
  ({ currentUser }) => currentUser
);

export const selectProvider = createSelector([selectUser], ({ currentUser }) =>
  currentUser ? currentUser.loginProvider : null
);

export const selectIsGettingUser = createSelector(
  [selectUser],
  ({ isGettingUser }) => isGettingUser
);

export const selectUserError = createSelector(
  [selectUser],
  ({ error }) => error
);
