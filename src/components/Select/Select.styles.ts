import styled from 'styled-components';
import { background, secondary } from '../../utils/colors';
import { primFont } from '../../utils/fonts';

export const StyledSelect = styled.select`
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
