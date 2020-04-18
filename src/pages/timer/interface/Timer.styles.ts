import styled from 'styled-components';
import { background, grays } from '../../../utils/colors';

export const TimerWrapper = styled.section`
  margin-top: 150px;
  text-align: center;
`;

export const Time = styled.h1`
  padding: 15px;
  display: inline-block;
  background-color: ${background};
  border-radius: 50% 50% 0% 0%;
  color: ${grays[0]};
  display: center;
  font-size: 4rem;
  margin: 0;
`;
