import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledForm = styled.form<{ mtop?: number }>`
  margin-top: ${({ mtop = 32 }) => mtop}px;
`;
