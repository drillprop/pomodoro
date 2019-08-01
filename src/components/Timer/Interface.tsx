import * as React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Controls from './Controls';
import TimerFaze from './TimerFaze';
import Category from './Category';

const InterfaceWrapper = styled.main`
  display: grid;
  grid-template-rows: 120px 140px 200px 100px;
  justify-content: center;
  height: 100vh;
`;
const FazeAndCategory = styled.section`
  grid-row: 2;
`;

const TimerAndControls = styled.section`
  grid-row: 3;
`;

const Interface: React.FC = () => {
  return (
    <InterfaceWrapper>
      <FazeAndCategory>
        <TimerFaze />
        <Category />
      </FazeAndCategory>
      <TimerAndControls>
        <Timer />
        <Controls />
      </TimerAndControls>
    </InterfaceWrapper>
  );
};

export default Interface;
