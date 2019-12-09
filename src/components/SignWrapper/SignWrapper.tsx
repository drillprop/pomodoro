import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../duck/users/userActions';
import { FormParagraph, FormWrapper } from './SignWrapper.styles';

const SignWrapper: FC = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <FormWrapper>
        {children}
        <FormParagraph onClick={() => dispatch(loginWithGoogle())}>
          or sign in with Google
        </FormParagraph>
      </FormWrapper>
    </>
  );
};

export default SignWrapper;
