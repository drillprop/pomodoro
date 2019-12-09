import styled from 'styled-components';
import {
  secondary,
  background,
  primary,
  secondaryBackground
} from '../../../../utils/colors';
import { primFont, secondFont } from '../../../../utils/fonts';

export const EditCreateTask = styled.form`
  border: solid 1px ${secondary};
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
    color: ${primary};
    font-size: 20px;
    border: none;
  }
  button {
    display: block;
    border: none;
    cursor: pointer;
    background: ${secondaryBackground};
    font-family: ${secondFont};
    color: ${primary};
    font-weight: 700;
    text-transform: lowercase;
    border-radius: 5px;
  }
`;
