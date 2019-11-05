import React, { FC, useState } from 'react';
import LoginForm from '../../components/Login/LoginForm';
import RegisterForm from '../../components/Register/RegisterForm';
import { FormParagraph, FormWrapper } from '../../elements/Forms';
import { MainTitle } from '../../elements/Titles';
import { loginWithGoogle } from '../../utils/firebase/auth';

const Sign: FC = () => {
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
