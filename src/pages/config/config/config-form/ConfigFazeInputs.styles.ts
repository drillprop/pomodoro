import styled from 'styled-components';
import { background, primary, secondary } from '../../../../utils/colors';
import { primFont } from '../../../../utils/fonts';

export const StyledConfigInput = styled.input`
  font-family: ${primFont};
  font-size: 20px;
  margin: 0 auto;
  width: 70px;
  padding: 8px;
  color: ${primary};
  background-color: ${background};
  border: solid 1px ${secondary};
  border-radius: 5px;
  margin-left: 16px;
`;
export const StyledConfigLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 20px;
`;

export const InputsWrapper = styled.div`
  margin-top: 28px;
`;
