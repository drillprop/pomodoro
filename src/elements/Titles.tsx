import styled from 'styled-components';
import { secondFont } from '../utils/fonts';
import { primary } from '../utils/colors';

export const MainTitle = styled.h1`
  font-family: ${secondFont};
  text-align: center;
  font-weight: 600;
  color: ${primary};
  font-size: 3.5rem;
  line-height: 0.9;
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-family: ${secondFont};
  color: ${primary};
  text-align: center;
`;
