import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import { selectCurrentUser } from '../../duck/users/userSelectors';
import ChangePassword from './account/ChangePassword';
import DeleteAccount from './account/DeleteAccount';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const Account = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <>
      <Heading level='h1'>account</Heading>
      {user && user.loginProvider === 'password' && <ChangePassword />}
      <DeleteAccount provider={user && user.loginProvider} />
      <GoBackLink>back</GoBackLink>
    </>
  );
};

export default Account;
