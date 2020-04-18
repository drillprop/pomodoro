import React from 'react';
import { reds } from '../../utils/colors';
import TomatoIcon from '../TomatoIcon/TomatoIcon';
import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return (
    <>
      <StyledLogo>
        p &nbsp; mo
        <br />
        &nbsp; &nbsp;doro
        <TomatoIcon size='29px' fill='white' />
        <TomatoIcon size='25px' fill={reds[1]} />
      </StyledLogo>
    </>
  );
};

export default Logo;
