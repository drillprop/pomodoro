import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { secondary, background } from '../../utils/colors';

const Select = styled.select`
  display: block;
  margin: 0 auto;
  font-family: ${secondFont};
  font-weight: 600;
  color: ${secondary};
  background-color: ${background};
  font-size: 1.5rem;
  border: none;
  padding: 0.2em 2em;
  option {
    text-align: center;
  }
`;

const DropDownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
const DropDownItem = styled.li`
  font-family: ${secondFont};
  font-weight: 600;
  font-size: 1.5rem;
  color: ${secondary};
  padding: 0.2em 2em;
`;

const Category = () => {
  return (
    <DropDownMenu>
      <DropDownItem>default</DropDownItem>
    </DropDownMenu>
  );
};

export default Category;
