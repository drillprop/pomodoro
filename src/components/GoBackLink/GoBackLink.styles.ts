import styled from 'styled-components';
import { primary } from '../../utils/colors';
import { Link } from 'react-router-dom';

export const StyledGoBackLink = styled(Link)`
  display: block;
  text-align: right;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${primary};
  text-decoration: none;
`;
