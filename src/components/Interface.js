import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const InterfaceWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 100vh;
`;

const Interface = () => {
  return (
    <InterfaceWrapper>
      <Timer />
    </InterfaceWrapper>
  );
};

export default Interface;
