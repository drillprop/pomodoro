import styled from 'styled-components';
import { background, grays } from '../../../../utils/colors';
import { primFont, secondFont } from '../../../../utils/fonts';

export const EditCreateTask = styled.form`
  border: solid 1px ${grays[4]};
  display: grid;
  grid-template-columns: 1fr 120px;
  border-radius: 5px;
  margin-top: 20px;

  input {
    display: block;
    width: 100%;
    padding: 10px 12px;
    background-color: ${background};
    font-family: ${primFont};
    font-size: 20px;
    border: none;
  }
  button {
    display: block;
    border: none;
    cursor: pointer;
    background: ${grays[5]};
    font-family: ${secondFont};
    font-weight: 700;
    text-transform: lowercase;
    border-radius: 5px;
  }
`;
