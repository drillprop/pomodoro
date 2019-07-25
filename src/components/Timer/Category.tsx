import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { secondary, background } from '../../utils/colors';

const DropDown = styled.div`
  :hover li {
    display: block;
  }
  ul {
    position: relative;
    list-style: none;
    padding: 0;
    text-align: center;
  }
  li {
    display: none;
    width: 100%;
    font-family: ${secondFont};
    font-weight: 600;
    font-size: 1.5rem;
    color: ${secondary};
  }
  button {
    width: 100%;
    text-align: center;
    border: none;
    outline: none;
    background: none;
    font-family: ${secondFont};
    font-weight: 600;
    font-size: 1.5rem;
    color: ${secondary};
    :hover {
      display: block;
    }
  }
`;

const Category = () => {
  return (
    <DropDown>
      <button>default</button>
      <ul>
        <li>default</li>
      </ul>
    </DropDown>
  );
};

export default Category;
