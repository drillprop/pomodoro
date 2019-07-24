import React from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { secondary } from '../../utils/colors';

const Select = styled.h3`
  text-align: center;
  margin: 0;
  grid-row: 3;
  font-family: ${primFont};
  color: ${secondary};
  font-size: 2rem;
`;

const Category = () => {
  return <Select>default</Select>;
};

export default Category;
