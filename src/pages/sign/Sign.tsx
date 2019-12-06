import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../duck/users/userActions';
import { FormParagraph, FormWrapper } from './Sign.styles';
import LoginForm from './sign/LoginForm';
import RegisterForm from './sign/RegisterForm';
import Heading from '../../components/Heading/Heading';

const Sign: FC = () => {
  const dispatch = useDispatch();
  const [isLogin, switchForm] = useState(true);
  return (
    <>
      <FormWrapper>
        {isLogin ? (
          <>
            <Heading level='h1'>login</Heading>
            <LoginForm />
          </>
        ) : (
          <>
            <Heading level='h1'>register</Heading>
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
