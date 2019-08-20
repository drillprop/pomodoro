import React from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import { loginWithGoogle } from '../../utils/firebase/auth';

const RegisterForm = () => {
  return (
    <form>
      <StyledLabel htmlFor='username'>Nick</StyledLabel>
      <StyledInput type='text' id='username' placeholder='nick' />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput type='email' id='email' placeholder='email' />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput type='password' id='password' placeholder='password' />
      <SubmitButtom>register</SubmitButtom>
    </form>
  );
};

export default RegisterForm;
