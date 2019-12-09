import React, { FC } from 'react';
import { StyledGoBackLink } from './GoBackLink.styles';

const GoBackLink: FC = ({ children }) => {
  return <StyledGoBackLink to='/'>{children}</StyledGoBackLink>;
};

export default GoBackLink;
