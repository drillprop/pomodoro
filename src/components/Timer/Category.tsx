import React, { useState } from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { secondary, background } from '../../utils/colors';

const Select = styled.select`
  font-family: ${primFont};
  font-size: 1.5rem;
  display: block;
  margin: 0 auto;
  color: ${secondary};
  background: none;
  border: none;
  padding: 0;
  text-align: center;
  padding: 0.3em 1em;
  text-align-last: center;
  :focus {
    outline-color: ${secondary};
  }

  option {
    text-align: left;
    background-color: ${background};
    border: none;
  }
`;

const Category = () => {
  const [visibleList, setVisible] = useState<boolean>(false);
  const [category, setCategory] = useState<string | any>('default');
  const handlePick = (e: any) => {
    setCategory(e.currentTarget.textContent);
    setVisible(false);
  };
  return (
    <Select>
      <option>first one</option>
      <option>second one</option>
      <option>third one</option>
    </Select>
  );
};

export default Category;
