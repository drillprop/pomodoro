import React, { FC } from 'react';
import { ControlsWrapper } from './Control.styles';
import PlayButton from './controls/PlayButton';
import ResetButton from './controls/ResetButton';
import RetryButton from './controls/RetryButton';

const Controls: FC = () => {
  return (
    <ControlsWrapper>
      <ResetButton />
      <RetryButton />
      <PlayButton />
    </ControlsWrapper>
  );
};

export default Controls;
