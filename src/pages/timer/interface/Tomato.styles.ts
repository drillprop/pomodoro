import styled from 'styled-components';

export const TomatoWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
