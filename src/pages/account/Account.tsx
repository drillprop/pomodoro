import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import { selectCurrentUser } from '../../duck/users/userSelectors';
import { AccountWrapper } from './Account.styles';
import ChangePassword from './account/ChangePassword';
import DeleteAccount from './account/DeleteAccount';

const Account = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <AccountWrapper>
      <Heading level='h1'>account</Heading>
      {user && user.loginProvider === 'password' && <ChangePassword />}
      <DeleteAccount provider={user && user.loginProvider} />
    </AccountWrapper>
  );
};

export default Account;
