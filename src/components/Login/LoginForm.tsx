import React from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';

const LoginForm = () => {
  return (
    <form>
      <StyledLabel htmlFor='email'>email</StyledLabel>
      <StyledInput type='email' id='email' placeholder='email' />
      <StyledLabel htmlFor='password'>password</StyledLabel>
      <StyledInput type='password' id='password' placeholder='password' />
      <SubmitButtom>login</SubmitButtom>
    </form>
  );
};

export default LoginForm;
