import * as React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Controls from './Controls';
import Hamburger from './HamburgerButton';
import TimerFaze from './TimerFaze';
import Category from './Category';
import Icon from '../../elements/Icon';
import { primary } from '../../utils/colors';

const InterfaceWrapper = styled.main`
  display: grid;
  grid-template-rows: 50px 150px 100px 200px 100px;
  justify-content: center;
  height: 100vh;
`;
const FazeAndCategory = styled.section`
  grid-row: 3;
`;
const Tomato = styled.section`
  grid-row: 2;
  align-self: center;
  justify-self: center;
`;
const TimerAndControls = styled.section`
  grid-row: 4;
`;

const Interface: React.FC = () => {
  return (
    <InterfaceWrapper>
      <Hamburger />
      <FazeAndCategory>
        <TimerFaze />
        <Category />
      </FazeAndCategory>
      <Tomato>
        <Icon name='tomato' color={primary} />
      </Tomato>
      <TimerAndControls>
        <Timer />
        <Controls />
      </TimerAndControls>
    </InterfaceWrapper>
  );
};

export default Interface;
