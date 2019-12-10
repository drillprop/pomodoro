import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import {
  selectCurrentUser,
  selectUserError
} from '../../duck/users/userSelectors';
import ChangePassword from './account/ChangePassword';
import DeleteAccount from './account/DeleteAccount';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import Error from '../../components/Error/Error';

const Account = () => {
  const user = useSelector(selectCurrentUser);
  const error = useSelector(selectUserError);
  return (
    <>
      <Heading level='h1'>account</Heading>
      {error && <Error message={error.message || ''} />}
      {user && user.loginProvider === 'password' && <ChangePassword />}
      <DeleteAccount provider={user && user.loginProvider} />
      <GoBackLink>back</GoBackLink>
    </>
  );
};

export default Account;
