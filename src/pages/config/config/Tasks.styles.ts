import styled, { css } from 'styled-components';

export const StyledUl = styled.ul<{ isLoading: boolean }>`
  padding: 0;
  ${({ isLoading }) => (isLoading ? LoadingState : null)}
`;

const LoadingState = css`
  opacity: 0.7;
  cursor: not-allowed;
`;
