import React, { FC } from 'react';
import { NoUserWrapper } from './NoUserPage.styles';
import Button from '../../Button/Button';
import Error from '../../Error/Error';
import Heading from '../../Heading/Heading';
import { primary } from '../../../utils/colors';
import { Link } from 'react-router-dom';

const NoUser: FC = () => {
  return (
    <NoUserWrapper>
      <Heading level='h1'>oops</Heading>
      <Error
        color={primary}
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
