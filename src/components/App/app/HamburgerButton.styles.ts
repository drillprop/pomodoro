import styled from 'styled-components';
import { background, primary } from '../../../utils/colors';

export const HamburgerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2em;
  right: 2em;
  div {
    z-index: 7;
    position: absolute;
    width: 35px;
    height: 7px;
    background-color: ${primary};
    transition: transform 200ms;
    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 35px;
      height: 7px;
      background-color: ${primary};
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
    z-index: 10;
    margin: 0;
    opacity: 0;
    width: 40px;
    height: 40px;
    :checked + div {
      transform: rotate(135deg);
      @media (max-width: 500px) {
        background-color: ${background};
      }
    }
    :checked + div:after,
    :checked + div:before {
      top: 0;
      transform: rotate(90deg);
      @media (max-width: 500px) {
        background-color: ${background};
      }
    }
  }
`;
