import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';

export const ConfigWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  justify-content: center;
`;

export const GoBackLink = styled.h4`
  font-family: ${secondFont};
  text-align: right;
  margin-right: 16px;
`;