import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { background, secondary, primary } from '../../utils/colors';

interface InputWrapperProps {
  mtop?: number;
  width?: number;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  margin-top: ${props => props.mtop}px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: ${primFont};
  font-size: 14px;
  margin-right: 20px;
`;

export const StyledInput = styled.input`
  margin-top: 8px;
  display: block;
  font-family: ${primFont};
  font-size: 18px;
  padding: 8px;
  color: ${primary};
  background-color: ${background};
  border: solid 1px ${secondary};
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  ::placeholder {
    color: ${secondary};
  }
`;
