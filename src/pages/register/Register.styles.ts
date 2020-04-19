import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { grays, reds } from '../../utils/colors';

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 24px;
  line-height: 1.5;
  text-decoration: none;
  color: ${grays[0]};
  span {
    color: ${reds[0]};
  }
`;
