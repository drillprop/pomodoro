import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { background, secondary, primary } from '../../utils/colors';

export const InputWrapper = styled.div`
  width: 270px;
`;

export const StyledLabel = styled.label`
  font-family: ${primFont};
  font-size: 14px;
  margin-right: 20px;
`;

export const StyledInput = styled.input`
  display: block;
  font-family: ${primFont};
  font-size: 18px;
  margin: 0 auto;
  padding: 8px;
  margin-bottom: 32px;
  margin-top: 8px;
  color: ${primary};
  background-color: ${background};
  border: solid 1px ${secondary};
  border-radius: 5px;
  width: 100%;
  ::placeholder {
    color: ${secondary};
  }
`;
