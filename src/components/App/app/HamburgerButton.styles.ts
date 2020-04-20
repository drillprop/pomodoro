import styled from 'styled-components';
import { grays, reds, background } from '../../../utils/colors';

export const HamburgerWrapper = styled.div`
  padding: 8px;
  background-color: ${background};
  border-radius: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  right: 30px;
  div {
    z-index: 7;
    position: absolute;
    width: 30px;
    height: 6px;
    background-color: ${grays[0]};
    transition: transform 200ms;
    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 6px;
      background-color: ${grays[0]};
    }
    ::before {
      top: -12px;
      left: 0;
    }
    ::after {
      top: 12px;
      left: 0;
    }
  }
  input {
    cursor: pointer;
    z-index: 10;
    margin: 0;
    opacity: 0;
    width: 40px;
    height: 40px;
    :checked + div {
      transform: rotate(135deg);
      background-color: ${reds[0]};
    }
    :checked + div:after,
    :checked + div:before {
      top: 0;
      transform: rotate(90deg);
      background-color: ${reds[0]};
    }
  }
`;
