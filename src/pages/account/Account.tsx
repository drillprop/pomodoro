import React from 'react';
import { MainTitle } from '../../elements/Titles';
import { AccountWrapper } from './Account.styles';

const Account = () => {
  return (
    <AccountWrapper>
      <MainTitle>your account</MainTitle>
      <p>Change Password</p>
      <p>Reset Your Stats</p>
      <p>Delete Account</p>
    </AccountWrapper>
  );
};

export default Account;
