import React from 'react';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  SubmitButtom
} from '../../elements/Forms';
import { loginWithGoogle } from '../../utils/firebase/auth';

const RegisterForm = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor='username'>Nick</StyledLabel>
      <StyledInput type='text' id='username' placeholder='nick' />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput type='email' id='email' placeholder='email' />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput type='password' id='password' placeholder='password' />
      <SubmitButtom>register</SubmitButtom>
      <h3>Already have account?</h3>
      <span>log in here</span>
      <br />
      <span style={{ cursor: 'pointer' }} onClick={loginWithGoogle}>
        or sign in with Google
      </span>
    </StyledForm>
  );
};

export default RegisterForm;
