import React from 'react';
import styled from 'styled-components';
import {
  secondaryBackground,
  primary,
  secondary,
  background
} from '../utils/colors';
import { secondFont } from '../utils/fonts';
import Icon from '../elements/Icon';
import useTimer from '../hooks/useTimer';

const ControlsWrapper = styled.div`
  grid-column: 3;
  grid-row: 4/5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px;
`;
const ResetandRetryButtons = styled.button`
  border: none;
  background: ${secondaryBackground};
  width: 150px;
  height: 2.5em;
  font-size: 1rem;
  font-family: ${secondFont};
  font-weight: 700;
  text-transform: uppercase;
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
  grid-column: 3;
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
  border: 10px solid ${secondary};
  background-color: ${background};
  border-radius: 100%;
`;

const Controls: React.FC = () => {
  return (
    <ControlsWrapper>
      <ResetButton>Reset</ResetButton>
      <RetryButtton>Retry</RetryButtton>
      <PlayButton>
        <Icon name='play' color={primary} />
      </PlayButton>
    </ControlsWrapper>
  );
};

export default Controls;
