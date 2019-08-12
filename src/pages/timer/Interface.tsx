import * as React from 'react';
import styled from 'styled-components';
import Timer from '../../components/Timer/Timer';
import Controls from '../../components/Timer/Controls/Controls';
import TimerFaze from '../../components/Timer/TimerFaze';
import SelectTask from '../../components/Timer/SelectTask';

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
        <SelectTask />
      </div>
      <div>
        <Timer />
        <Controls />
      </div>
    </InterfaceWrapper>
  );
};

export default Interface;
