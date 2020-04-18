import * as React from 'react';
import { InterfaceWrapper } from './Interface.styles';
import Controls from './interface/Controls';
import SelectTask from './interface/SelectTask';
import Timer from './interface/Timer';
import TimerFaze from './interface/TimerFaze';

const Interface: React.FC = () => {
  return (
    <InterfaceWrapper>
      <TimerFaze />
      <SelectTask />
      <Timer />
      <Controls />
    </InterfaceWrapper>
  );
};

export default Interface;
