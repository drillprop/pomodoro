import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { ReduxState } from '../../../duck/store';
import { showMenu } from '../../../duck/timer/timerActions';
import useRouter from '../../../hooks/useRouter';
import { HamburgerWrapper } from './HamburgerButton.styles';

const selectMenu = createSelector(
  ({ timer }: ReduxState) => timer.isMenuVisible,
  isMenuVisible => isMenuVisible
);

const HamburgerButton: FC = () => {
  const isMenuVisible = useSelector(selectMenu);

  const route = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMenu(false));
  }, [route.location]);

  return (
    <HamburgerWrapper>
      <input
        type='checkbox'
        checked={isMenuVisible}
        onChange={() => dispatch(showMenu(!isMenuVisible))}
      />
      <div />
    </HamburgerWrapper>
  );
};

export default HamburgerButton;
