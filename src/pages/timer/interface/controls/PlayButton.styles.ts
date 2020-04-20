import styled from 'styled-components';
import { background, reds } from '../../../../utils/colors';

export const StyledPlayButton = styled.button<{ isTimerStart: boolean }>`
  position: relative;
  height: 80px;
  justify-self: center;
  align-self: center;
  grid-column: 1/4;
  grid-row: 1;
  width: 80px;
  border: 7px solid ${reds[3]};
  background-color: ${({ isTimerStart }) =>
    isTimerStart ? background : background};
  border-radius: 100%;
`;

export const Pause = styled.div`
  width: 9px;
  position: absolute;
  top: calc(50% - 11px);
  left: calc(50% - 13px);
  height: 23px;
  background-color: ${reds[3]};
  border-radius: 3px;
  ::after {
    content: '';
    position: absolute;
    margin-left: 12px;
    background-color: ${reds[3]};
    border-radius: 3px;
    width: 9px;
    height: 23px;
  }
`;
