import { animated } from 'react-spring';
import styled from 'styled-components';
import { grays } from '../../../utils/colors';
import { secondFont } from '../../../utils/fonts';

export const StyledNavigation = styled(animated.nav)`
  position: fixed;
  z-index: 5;
  top: 0;
  height: 100%;
  width: 400px;
  background-color: ${grays[0]};
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
    color: ${grays[5]};
  }
  li {
    margin-top: 20px;
    opacity: 0.8;
    cursor: pointer;
    font-family: ${secondFont};
    font-size: 16px;
    font-weight: 400;
    :hover {
      opacity: 1;
    }
    li,
    svg {
      vertical-align: middle;
      display: inline-block;
    }
  }
`;
