import React from 'react';
import { MainTitle } from '../../elements/Titles';
import { AccountWrapper } from './Account.styles';
import ChangePassword from './account/ChangePassword';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../duck/users/userSelectors';
import DeleteAccount from './account/DeleteAccount';

const Account = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <AccountWrapper>
      <MainTitle>account</MainTitle>
      {user && user.loginProvider === 'password' && <ChangePassword />}
      <DeleteAccount provider={user && user.loginProvider} />
    </AccountWrapper>
  );
};

export default Account;
