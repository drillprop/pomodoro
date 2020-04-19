import React, { FC } from 'react';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import Heading from '../../components/Heading/Heading';
import ConfigForm from './config/ConfigForm';
import Tasks from './config/Tasks';
import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectUserError,
} from '../../duck/users/userSelectors';
import ChangePassword from './config/ChangePassword';
import DeleteAccount from './config/DeleteAccount';
import Error from '../../components/Error/Error';

const Config: FC = () => {
  const user = useSelector(selectCurrentUser);
  const error = useSelector(selectUserError);
  return (
    <>
      <Heading level='h1'>config</Heading>
      <Tasks />
      <ConfigForm />
      <Heading mtop={50} level='h1'>
        account
      </Heading>
      {error && <Error message={error.message || ''} />}
      {user && user.loginProvider === 'password' && <ChangePassword />}
      <DeleteAccount provider={user && user.loginProvider} />
      <GoBackLink>back</GoBackLink>
    </>
  );
};

export default Config;
