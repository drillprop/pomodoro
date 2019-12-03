import styled from 'styled-components';
import { primFont, secondFont } from '../utils/fonts';
import {
  primary,
  background,
  secondary,
  secondaryBackground
} from '../utils/colors';

export const FormWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 100px 1fr;
  justify-content: center;
`;

export const FormParagraph = styled.p`
  cursor: pointer;
`;

export const SubmitButtom = styled.button<{ invert?: boolean }>`
  border: none;
  display: block;
  margin-top: 54px;
  width: 100%;
  background: ${({ invert = false }) =>
    invert ? primary : secondaryBackground};
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${({ invert = false }) => (invert ? secondaryBackground : primary)};
  font-weight: 700;
  text-transform: lowercase;
  border-radius: 5px;
`;

export const EditCreateTask = styled.form`
  border: solid 1px ${secondary};
  display: grid;
  grid-template-columns: 1fr 140px;
  border-radius: 5px;
  margin-bottom: 16px;

  input {
    padding: 10px 12px;
    background-color: ${background};
    font-family: ${primFont};
    color: ${primary};
    font-size: 20px;
    border: none;
  }
  button {
    border: none;
    width: 100%;
    cursor: pointer;
    background: ${secondaryBackground};
    font-family: ${secondFont};
    color: ${primary};
    font-weight: 700;
    text-transform: lowercase;
    border-radius: 5px;
  }
`;
