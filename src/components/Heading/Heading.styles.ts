import styled from 'styled-components';
import { grays, reds } from '../../utils/colors';
import { secondFont } from '../../utils/fonts';

interface HeadingProps {
  mtop?: number;
}

export const StyledH1 = styled.h1<HeadingProps>`
  margin: 0;
  margin-top: ${({ mtop }) => mtop}px;
  text-align: center;
  font-size: 3.5rem;
  font-family: ${secondFont};
  font-weight: 600;
  color: ${grays[0]};
  line-height: 0.9;
  ::first-letter {
    color: ${reds[0]};
  }
`;

export const StyledH2 = styled.h2<HeadingProps>`
  margin: 0;
  margin-top: ${({ mtop }) => mtop}px;
  text-align: center;
  font-size: 2rem;
  font-family: ${secondFont};
  color: ${reds[1]};
`;
