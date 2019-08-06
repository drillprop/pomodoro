import styled from 'styled-components';
import { primFont, secondFont } from '../utils/fonts';
import {
  primary,
  background,
  secondary,
  secondaryBackground
} from '../utils/colors';

export const StyledForm = styled.form``;

export const StyledLabel = styled.label`
  font-family: ${primFont};
  font-size: 16px;
  text-align: center;
  margin-right: 20px;
`;

export const StyledInput = styled.input`
  display: block;
  font-family: ${primFont};
  font-size: 20px;
  margin: 0 auto;
  padding: 8px;
  margin-bottom: 32px;
  margin-top: 8px;
  color: ${primary};
  background-color: ${background};
  border: solid 1px ${secondary};
  border-radius: 5px;
  ::placeholder {
    color: ${secondary};
  }
`;

export const SubmitButtom = styled.button`
  border: none;
  margin-top: 52px;
  display: block;
  width: 100%;
  background: ${secondaryBackground};
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
  border-radius: 5px;
`;