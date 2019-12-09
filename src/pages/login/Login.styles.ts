import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary } from '../../utils/colors';

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 24px;
  text-decoration: none;
  color: ${primary};
`;
