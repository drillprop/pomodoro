import styled from 'styled-components';
import { secondFont } from '../../../utils/fonts';

export const StyledLogo = styled.h1`
  margin: 0;
  font-weight: bold;
  line-height: 0.8;
  font-family: ${secondFont};
  font-size: 45px;
  position: absolute;
  top: 30px;
  left: 40px;
  svg {
    position: absolute;
    left: 27px;
    top: 0;
  }
`;
