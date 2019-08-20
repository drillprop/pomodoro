import React, { useState } from 'react';
import { MainTitle } from '../../elements/Titles';
import { FormWrapper } from '../../elements/Forms';
import LoginForm from '../../components/Login/LoginForm';
import RegisterForm from '../../components/Register/RegisterForm';
import { loginWithGoogle } from '../../utils/firebase/auth';

const Sign = () => {
  const [isLogin, switchSign] = useState(true);
  return (
    <>
      <FormWrapper>
        {isLogin ? (
          <>
            <MainTitle>login</MainTitle>
            <LoginForm />
          </>
        ) : (
          <>
            <MainTitle>register</MainTitle>
            <RegisterForm />
          </>
        )}
        <span style={{ cursor: 'pointer' }} onClick={loginWithGoogle}>
          or sign in with Google
        </span>
      </FormWrapper>
    </>
  );
};

export default Sign;
