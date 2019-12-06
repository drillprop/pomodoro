import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';

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
  color: ${primary};
  line-height: 0.9;
`;

export const StyledH2 = styled.h2<HeadingProps>`
  margin: 0;
  margin-top: ${({ mtop }) => mtop}px;
  text-align: center;
  font-size: 2rem;
  font-family: ${secondFont};
  color: ${primary};
`;
