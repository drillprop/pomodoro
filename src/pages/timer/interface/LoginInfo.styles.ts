import styled from 'styled-components';
import { grays, reds } from '../../../utils/colors';

export const LoginInfoPar = styled.p`
  width: 250px;
  margin: 0 auto;
  margin-top: 2.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
  color: ${grays[2]};
  a {
    color: ${reds[3]};
  }
`;
