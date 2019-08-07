import React from 'react';
import styled from 'styled-components';
import useTimerState from '../../../hooks/useTimerState';
import { secondaryBackground, primary } from '../../../utils/colors';
import { secondFont } from '../../../utils/fonts';
import { useDispatch } from 'react-redux';
import { resetRetryTimer } from '../../../duck/timer/timerActions';

const ResetandRetryButtons = styled.button`
  border: none;
  background: ${secondaryBackground};
  width: 140px;
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
  align-self: center;
  grid-row: 1;
`;

const StyledButton = styled(ResetandRetryButtons)`
  grid-column: 1;
  border-radius: 21px 0px 0px 21px;
  padding-right: 1em;
`;

const ResetButton = () => {
  const dispatch = useDispatch();
  const { isInterval } = useTimerState();

  const reset = () => dispatch(resetRetryTimer(false));
  return (
    <StyledButton onClick={reset}>{isInterval ? 'Reset' : 'Skip'}</StyledButton>
  );
};

export default ResetButton;
