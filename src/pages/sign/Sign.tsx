import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../duck/users/userActions';
import { FormParagraph, FormWrapper } from './Sign.styles';
import LoginForm from './sign/LoginForm';
import RegisterForm from './sign/RegisterForm';

const Sign: FC = () => {
  const dispatch = useDispatch();
  const [isLogin, switchForm] = useState(true);
  return (
    <>
      <FormWrapper>
        {isLogin ? (
          <LoginForm switchForm={switchForm} />
        ) : (
          <RegisterForm switchForm={switchForm} />
        )}
        <FormParagraph onClick={() => dispatch(loginWithGoogle())}>
          or sign in with Google
        </FormParagraph>
      </FormWrapper>
    </>
  );
};

export default Sign;
