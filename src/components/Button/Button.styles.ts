import styled from 'styled-components';
import { primary, secondaryBackground } from '../../utils/colors';
import { secondFont } from '../../utils/fonts';

interface StyledButtonProps {
  invert?: boolean;
  mtop?: number;
  width?: number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  margin-top: ${props => props.mtop}px;
  border: none;
  display: block;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
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
