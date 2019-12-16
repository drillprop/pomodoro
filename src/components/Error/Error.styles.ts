import styled from 'styled-components';

export const ErrorWrapper = styled.div<{ color: string }>`
  margin-top: 34px;
  line-height: 1.5;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  padding: 20px;
`;
