import React from 'react';
import styled from 'styled-components';
import {
  secondaryBackground,
  primary,
  background,
  buttonColors
} from '../../utils/colors';
import { secondFont } from '../../utils/fonts';
import Icon from '../../elements/Icon';
import useTimer from '../../hooks/useTimer';

const ControlsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 140px);
  grid-template-rows: 60px;
`;
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
const PlayButton = styled.button<{ isTimerStart: boolean }>`
  position: relative;
  height: 90px;
  justify-self: center;
  align-self: center;
  grid-column: 1/4;
  grid-row: 1;
  width: 90px;
  border: 7px solid ${buttonColors};
  background-color: ${({ isTimerStart }) =>
    isTimerStart ? buttonColors : background};
  border-radius: 100%;
`;

const Pause = styled.div`
  width: 11px;
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 16px);
  height: 27px;
  background-color: ${background};
  border-radius: 3px;
  ::after {
    content: '';
    position: absolute;
    margin-left: 15px;
    background-color: ${background};
    border-radius: 3px;
    width: 11px;
    height: 27px;
  }
`;

const Controls: React.FC = () => {
  const [state, { startPause, reset, retry }] = useTimer();
  return (
    <ControlsWrapper>
      <ResetButton onClick={reset}>
        {state.isInterval ? 'Reset' : 'Skip'}
      </ResetButton>
      <RetryButtton onClick={retry}>Retry</RetryButtton>
      <PlayButton isTimerStart={state.isTimerStart} onClick={startPause}>
        {state.isTimerStart ? (
          <Pause />
        ) : (
          <Icon name='play' color={buttonColors} />
        )}
      </PlayButton>
    </ControlsWrapper>
  );
};

export default Controls;
