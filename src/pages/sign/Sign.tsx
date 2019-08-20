import React, { useState } from 'react';
import { MainTitle } from '../../elements/Titles';
import { FormWrapper, FormParagraph } from '../../elements/Forms';
import LoginForm from '../../components/Login/LoginForm';
import RegisterForm from '../../components/Register/RegisterForm';
import { loginWithGoogle } from '../../utils/firebase/auth';

const Sign = () => {
  const [isLogin, switchForm] = useState(true);
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
        {isLogin ? (
          <FormParagraph onClick={() => switchForm(false)}>
            Dont have an account? Create new one
          </FormParagraph>
        ) : (
          <FormParagraph onClick={() => switchForm(true)}>
            Already have an account? Sign in
          </FormParagraph>
        )}
        <FormParagraph onClick={loginWithGoogle}>
          or sign in with Google
        </FormParagraph>
      </FormWrapper>
    </>
  );
};

export default Sign;
