import styled from 'styled-components';
import { grays, reds } from '../../utils/colors';
import { secondFont } from '../../utils/fonts';

interface StyledButtonProps {
  invert?: boolean;
  mtop?: number;
  width?: number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  margin-top: ${(props) => props.mtop}px;
  border: none;
  display: block;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  background: ${({ invert = false }) => (invert ? grays[0] : grays[5])};
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${({ invert = false }) => (invert ? grays[5] : grays[0])};
  font-weight: 700;
  text-transform: lowercase;
  border-radius: 5px;
  transition: color 500ms, background-color 500ms;
`;
