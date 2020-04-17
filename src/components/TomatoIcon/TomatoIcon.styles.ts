import styled from 'styled-components';
import { primary } from '../../utils/colors';

interface StyledSvgProps {
  size?: string;
  fill?: string;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  fill: ${(props) => props.fill || primary};
  width: ${({ size = '50px' }) => size};
`;
