import styled from 'styled-components';

export const AccountWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledForm = styled.form<{ mtop?: number }>`
  margin-top: ${({ mtop = 32 }) => mtop}px;
`;
