import React from 'react';
import styled from 'styled-components';
import { primary } from '../utils/colors';
import { useDispatch } from 'react-redux';
import { showMenu } from '../duck/timer/timerActions';

const HamburgerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2em;
  right: 2em;
  div {
    z-index: -1;
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
    margin: 0;
    opacity: 0;
    width: 40px;
    height: 40px;
    :checked + div {
      transform: rotate(135deg);
    }
    :checked + div:after,
    :checked + div:before {
      top: 0;
      transform: rotate(90deg);
    }
  }
`;

const HamburgerButton = () => {
  const dispatch = useDispatch();
  return (
    <HamburgerWrapper>
      <input type='checkbox' onChange={() => dispatch(showMenu())} />
      <div />
    </HamburgerWrapper>
  );
};

export default HamburgerButton;
