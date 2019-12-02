import React from 'react';
import { MainTitle } from '../../elements/Titles';
import { AccountWrapper } from './Account.styles';
import ChangePassword from './account/ChangePassword';

const Account = () => {
  return (
    <AccountWrapper>
      <MainTitle>account</MainTitle>
      <ChangePassword />
      <p>Reset Your Stats</p>
      <p>Delete Account</p>
    </AccountWrapper>
  );
};

export default Account;
