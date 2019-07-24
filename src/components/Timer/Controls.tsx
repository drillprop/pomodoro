import React from 'react';
import styled from 'styled-components';
import {
  secondaryBackground,
  primary,
  secondary,
  background,
  buttonColors
} from '../../utils/colors';
import { secondFont } from '../../utils/fonts';
import Icon from '../../elements/Icon';
import useTimer from '../../hooks/useTimer';
import useTimerState from '../../hooks/useTimerState';

const ControlsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: 60px;
`;
const ResetandRetryButtons = styled.button`
  border: none;
  background: ${secondaryBackground};
  width: 150px;
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
  align-self: center;
  grid-row: 1;
`;
const ResetButton = styled(ResetandRetryButtons)`
  grid-column: 1;
  border-radius: 21px 0px 0px 21px;
  padding-right: 1em;
`;
const RetryButtton = styled(ResetandRetryButtons)`
  border-radius: 0 21px 21px 0;
  grid-column: 2;
  padding-left: 1em;
`;
const PlayButton = styled.button`
  position: relative;
  height: 90px;
  justify-self: center;
  align-self: center;
  grid-column: 1/4;
  grid-row: 1;
  width: 90px;
  border: 7px solid ${buttonColors};
  background-color: ${background};
  border-radius: 100%;
`;

const Controls: React.FC = () => {
  const [startPauseTimer, resetTimer, retryTimer] = useTimer();
  const [, , , isInterval] = useTimerState();

  return (
    <ControlsWrapper>
      <ResetButton onClick={resetTimer}>
        {isInterval ? 'Reset' : 'Skip'}
      </ResetButton>
      <RetryButtton onClick={retryTimer}>Retry</RetryButtton>
      <PlayButton onClick={startPauseTimer}>
        <Icon name='play' color={buttonColors} />
      </PlayButton>
    </ControlsWrapper>
  );
};

export default Controls;
