import React, { FC } from 'react';
import { SubTitle } from '../../elements/Titles';

const IntervalsOverall: FC<{ intervalsOverall: number | null }> = ({
  intervalsOverall
}) => {
  return (
    <>
      <SubTitle>overall</SubTitle>
      <div>Overall you've made {intervalsOverall || 0} </div>
    </>
  );
};

export default IntervalsOverall;
