import styled from 'styled-components';
import { primary } from '../../utils/colors';

interface StyledSvgProps {
  size?: string;
  fill?: string;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  display: block;
  fill: ${(props) => props.fill || primary};
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(-50%, 0);
  width: ${({ size = '50px' }) => size};
  z-index: -2;
`;
