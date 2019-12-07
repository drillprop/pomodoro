import styled from 'styled-components';
import { primary } from '../../utils/colors';

export const NotificationWrapper = styled.div<{ isError?: boolean }>`
  border: 1px solid ${props => (props.isError ? 'red' : primary)};
  border-radius: 5px;
  padding: 10px;
`;
