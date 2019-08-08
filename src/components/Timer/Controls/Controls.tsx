import React, { useEffect } from 'react';
import styled from 'styled-components';
import ResetButton from './ResetButton';
import RetryButton from './RetryButton';
import PlayButton from './PlayButton';

const ControlsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 140px);
  grid-template-rows: 60px;
`;

const Controls: React.FC = () => {
  return (
    <ControlsWrapper>
      <ResetButton />
      <RetryButton />
      <PlayButton />
    </ControlsWrapper>
  );
};

export default Controls;
