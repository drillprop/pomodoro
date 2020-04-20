import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../../duck/users/userSelectors';
import { LoginInfoPar } from './LoginInfo.styles';

const LoginInfo = () => {
  const { currentUser } = useSelector(selectUser);
  return !currentUser ? (
    <LoginInfoPar>
      You're using app as not logged user. <Link to='/register'>Register </Link>
      or <Link to='/login'>login</Link> to your account.
    </LoginInfoPar>
  ) : null;
};

export default LoginInfo;
