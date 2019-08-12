import React from 'react';
import styled from 'styled-components';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  SubmitButtom
} from '../../elements/Forms';

const RegisterForm = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor='username'>Nick</StyledLabel>
      <StyledInput type='text' id='username' placeholder='nick' />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput type='email' id='email' placeholder='email' />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput type='password' id='password' placeholder='password' />
      <SubmitButtom>sign up</SubmitButtom>
    </StyledForm>
  );
};

export default RegisterForm;
