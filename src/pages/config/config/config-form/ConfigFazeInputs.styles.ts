import styled from 'styled-components';
import { background, grays } from '../../../../utils/colors';
import { primFont } from '../../../../utils/fonts';

export const StyledConfigInput = styled.input`
  font-family: ${primFont};
  font-size: 20px;
  margin: 0 auto;
  width: 60px;
  padding: 8px;
  color: ${grays[0]};
  background-color: ${background};
  border: solid 1px ${grays[4]};
  border-radius: 5px;
  margin-left: 16px;
`;
export const StyledConfigLabel = styled.label`
  font-size: 18px;
  margin-right: 20px;
`;

export const InputsWrapper = styled.div`
  margin-top: 28px;
`;
