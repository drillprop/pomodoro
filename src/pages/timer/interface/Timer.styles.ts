import styled from 'styled-components';
import { background, grays } from '../../../utils/colors';

export const TimerWrapper = styled.section`
  margin-top: 170px;
  text-align: center;
`;

export const Time = styled.h1`
  padding: 20px;
  display: inline-block;
  background-color: ${background};
  border-radius: 50%;
  color: ${grays[0]};
  display: center;
  font-size: 3.5rem;
  margin: 0;
`;
