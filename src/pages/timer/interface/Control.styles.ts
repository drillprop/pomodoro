import styled from 'styled-components';
import { secondaryBackground, primary } from '../../../utils/colors';
import { secondFont } from '../../../utils/fonts';

export const ResetandRetryButtons = styled.button`
  border: none;
  background: ${secondaryBackground};
  width: 140px;
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
  align-self: center;
  grid-row: 1;
`;

export const ControlsWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 140px);
  grid-template-rows: 60px;
`;
