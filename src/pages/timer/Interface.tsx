import * as React from 'react';
import Controls from '../../components/Timer/Controls/Controls';
import SelectTask from '../../components/Timer/SelectTask';
import Timer from '../../components/Timer/Timer';
import TimerFaze from '../../components/Timer/TimerFaze';
import { InterfaceWrapper } from './Interface.styles';

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
