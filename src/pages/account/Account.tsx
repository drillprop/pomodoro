import React from 'react';
import { MainTitle } from '../../elements/Titles';
import { AccountWrapper } from './Account.styles';
import ChangePassword from './account/ChangePassword';
import { useSelector } from 'react-redux';
import { selectProvider } from '../../duck/users/userSelectors';

const Account = () => {
  const provider = useSelector(selectProvider);
  return (
    <AccountWrapper>
      <MainTitle>account</MainTitle>
      {provider === 'password' && <ChangePassword />}
      <p>Reset Your Stats</p>
      <p>Delete Account</p>
    </AccountWrapper>
  );
};

export default Account;
