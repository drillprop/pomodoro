import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../duck/users/userActions';
import { MainTitle } from '../../elements/Titles';
import LoginForm from './sign/LoginForm';
import RegisterForm from './sign/RegisterForm';
import { FormWrapper, FormParagraph } from './Sign.styles';

const Sign: FC = () => {
  const dispatch = useDispatch();
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
        <FormParagraph onClick={() => dispatch(loginWithGoogle())}>
          or sign in with Google
        </FormParagraph>
      </FormWrapper>
    </>
  );
};

export default Sign;
