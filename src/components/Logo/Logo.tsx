import React from 'react';
import { reds } from '../../utils/colors';
import TomatoIcon from '../TomatoIcon/TomatoIcon';
import { StyledLogo } from './Logo.styles';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <StyledLogo>
        p &nbsp; mo
        <br />
        &nbsp; &nbsp;doro
        <TomatoIcon size='32px' fill='white' />
        <TomatoIcon size='30px' fill={reds[1]} />
      </StyledLogo>
    </Link>
  );
};

export default Logo;
