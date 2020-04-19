import styled from 'styled-components';
import { grays } from '../../../../utils/colors';
import { primFont, secondFont } from '../../../../utils/fonts';

export const StyledTask = styled.li`
  display: grid;
  grid-template-columns: 1fr 140px;
  background: ${grays[5]};
  padding-left: 12px;
  justify-content: space-between;
  align-items: center;
  font-family: ${primFont};
  border: solid 1px ${grays[4]};
  border-radius: 5px;
  font-size: 20px;
  margin-top: 16px;
`;
export const StyledTaskButton = styled.button<{ disabled: boolean }>`
  padding: 10px 12px;
  width: 50%;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${grays[5]};
  font-family: ${secondFont};
  color: ${grays[0]};
  font-weight: 700;
  text-transform: lowercase;
`;
