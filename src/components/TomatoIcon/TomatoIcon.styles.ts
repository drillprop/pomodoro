import styled from 'styled-components';
import { reds } from '../../utils/colors';

interface StyledSvgProps {
  size?: string;
  fill?: string;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  fill: ${(props) => props.fill || reds[0]};
  width: ${({ size = '50px' }) => size};
`;
