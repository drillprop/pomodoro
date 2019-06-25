import React from 'react';
import styled from 'styled-components';

const InterfaceWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const Interface = () => {
  return <InterfaceWrapper />;
};

export default Interface;
