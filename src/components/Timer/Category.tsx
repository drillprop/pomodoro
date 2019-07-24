import React from 'react';
import styled from 'styled-components';
import { primFont, secondFont } from '../../utils/fonts';
import { secondary, background } from '../../utils/colors';

const Select = styled.select`
  display: block;
  margin: 0 auto;
  font-family: ${secondFont};
  font-weight: 600;
  color: ${secondary};
  background-color: ${background};
  font-size: 1.8rem;
  border: none;
  padding: 0.2em 2em;
  option {
    text-align: center;
  }
`;

const Category = () => {
  return (
    <Select>
      <option value='default'>default</option>
    </Select>
  );
};

export default Category;
