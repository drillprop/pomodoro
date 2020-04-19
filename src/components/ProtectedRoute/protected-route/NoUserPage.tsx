import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { grays } from '../../../utils/colors';
import Button from '../../Button/Button';
import Error from '../../Error/Error';
import Heading from '../../Heading/Heading';
import { NoUserWrapper } from './NoUserPage.styles';

const NoUser: FC = () => {
  return (
    <NoUserWrapper>
      <Heading level='h1'>oops</Heading>
      <Error
        color={grays[0]}
        message='This section is only avalaible for signed users. Sign in or create new account'
      />
      <Link to='/login'>
        <Button invert mtop={30}>
          Login
        </Button>
      </Link>
      <Link to='/register'>
        <Button mtop={30}>Register</Button>
      </Link>
    </NoUserWrapper>
  );
};

export default NoUser;
