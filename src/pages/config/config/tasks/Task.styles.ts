import styled from 'styled-components';
import {
  primary,
  secondary,
  secondaryBackground
} from '../../../../utils/colors';
import { primFont, secondFont } from '../../../../utils/fonts';

export const StyledTask = styled.li`
  display: grid;
  grid-template-columns: 1fr 140px;
  background: ${secondaryBackground};
  padding-left: 12px;
  justify-content: space-between;
  align-items: center;
  font-family: ${primFont};
  border: solid 1px ${secondary};
  border-radius: 5px;
  font-size: 20px;
  margin-top: 16px;
`;
export const StyledTaskButton = styled.button<{ disabled: boolean }>`
  padding: 10px 12px;
  width: 50%;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${secondaryBackground};
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
`;
