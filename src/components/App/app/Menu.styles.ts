import styled from 'styled-components';

import { animated } from 'react-spring';

import { primary, secondaryBackground } from '../../../utils/colors';

import { secondFont } from '../../../utils/fonts';

export const StyledNavigation = styled(animated.nav)`
  position: fixed;
  z-index: 5;
  top: 0;
  height: 100%;
  width: 400px;
  background-color: ${primary};
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const LinkList = styled.ul`
  margin-top: 50px;
  padding: 0;
  margin-left: 50px;
  li,
  a {
    color: ${secondaryBackground};
  }
  li {
    margin-bottom: 20px;
    opacity: 0.6;
    cursor: pointer;
    font-family: ${secondFont};
    font-size: 16px;
    font-weight: 400;
    :hover {
      opacity: 1;
    }
    ::after {
      content: '';
      left: 0;
      margin-top: 42px;
      margin-left: 30px;
      width: calc(100% - 60px);
      height: 1px;
      position: absolute;
      opacity: 0.3;
      background-color: ${secondaryBackground};
    }
  }
`;
