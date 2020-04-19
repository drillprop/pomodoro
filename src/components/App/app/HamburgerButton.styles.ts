import styled from 'styled-components';
import { background, reds, grays } from '../../../utils/colors';

export const HamburgerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35px;
  right: 35px;
  div {
    z-index: 7;
    position: absolute;
    width: 35px;
    height: 7px;
    background-color: ${grays[0]};
    transition: transform 200ms;
    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 35px;
      height: 7px;
      background-color: ${grays[0]};
    }
    ::before {
      top: -14px;
      left: 0;
    }
    ::after {
      top: 14px;
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
