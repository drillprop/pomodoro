import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { primary } from '../../../../utils/colors';
import { useDispatch } from 'react-redux';
import { showMenu } from '../../../../duck/timer/timerActions';
import useTimerState from '../../../../hooks/useTimerState';
import useRouter from '../../../../hooks/useRouter';
import { HamburgerWrapper } from './HamburgerButton.styles';

const HamburgerButton: FC = () => {
  const { isMenuVisible } = useTimerState();

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
