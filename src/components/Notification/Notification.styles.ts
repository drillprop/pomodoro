import styled from 'styled-components';
import { secondaryBackground, primary } from '../../utils/colors';
import { animated } from 'react-spring';

export const NotificationWrapper = styled(animated.div)`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${secondaryBackground};
  display: flex;
  padding: 20px 10%;
  justify-content: center;
  word-wrap: break-word;
`;

export const NotificationMessage = styled.p`
  margin: 0;
  max-width: 100%;
  text-align: center;
`;

export const CloseButton = styled.button`
  margin: 0;
  margin-left: 10px;
  padding: 0 10px;
  color: ${primary};
  font-size: 20px;
  background: none;
  border: none;
`;
