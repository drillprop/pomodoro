import styled from 'styled-components';
import { secondaryBackground, primary, background } from '../../utils/colors';
import { animated } from 'react-spring';

export const NotificationWrapper = styled(animated.div)`
  box-sizing: border-box;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 10px;
  background-color: ${secondaryBackground};
  display: flex;
  padding: 20px;
  justify-content: center;
  word-wrap: break-word;
`;

export const NotificationMessage = styled.p`
  font-size: 18px;
  margin: 0;
  max-width: 100%;
  text-align: center;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: -20px;
  right: -20px;
  padding: 15px;
  border: 5px solid ${primary};
  line-height: 1;
  border-radius: 100%;
  color: ${primary};
  background: ${background};
  display: flex;
  justify-content: center;
  align-items: center;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 4px;
    background-color: ${primary};
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;
