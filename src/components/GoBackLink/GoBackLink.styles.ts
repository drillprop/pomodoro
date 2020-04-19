import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { grays } from '../../utils/colors';

export const StyledGoBackLink = styled(Link)`
  display: block;
  text-align: right;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${grays[0]};
  text-decoration: none;
`;
