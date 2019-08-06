import React from 'react';
import styled from 'styled-components';
import { secondaryBackground, primary } from '../../../utils/colors';
import { secondFont } from '../../../utils/fonts';
import useTimerState from '../../../hooks/useTimerState';
import useTimerMethods from '../../../hooks/useTimerMethods';

const ResetandRetryButtons = styled.button`
  border: none;
  background: ${secondaryBackground};
  width: 140px;
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
  align-self: center;
  grid-row: 1;
`;

const StyledButton = styled(ResetandRetryButtons)`
  border-radius: 0 21px 21px 0;
  grid-column: 2;
  padding-left: 1em;
`;

const RetryButton = () => {
  const { retry } = useTimerMethods();
  return <StyledButton onClick={retry}>Retry</StyledButton>;
};

export default RetryButton;
