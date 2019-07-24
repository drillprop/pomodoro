import * as React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Controls from './Controls';
import Hamburger from './HamburgerButton';
import TimerFaze from './TimerFaze';
import Category from './Category';

const InterfaceWrapper = styled.main`
  display: grid;
  grid-template-rows: 100px repeat(2, 1fr) 50px repeat(6, 1fr);
  justify-content: center;
  height: 100vh;
`;

const Interface: React.FC = () => {
  return (
    <InterfaceWrapper>
      <Hamburger />
      <TimerFaze />
      <Category />
      <Timer />
      <Controls />
    </InterfaceWrapper>
  );
};

export default Interface;
