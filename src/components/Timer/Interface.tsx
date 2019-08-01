import * as React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Controls from './Controls';
import TimerFaze from './TimerFaze';
import Category from './Category';

const InterfaceWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 150px 200px;
  justify-content: center;
`;

const Interface: React.FC = () => {
  return (
    <InterfaceWrapper>
      <div>
        <TimerFaze />
        <Category />
      </div>
      <div>
        <Timer />
        <Controls />
      </div>
    </InterfaceWrapper>
  );
};

export default Interface;
