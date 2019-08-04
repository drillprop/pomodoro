import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../elements/Titles';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  SubmitButtom
} from '../../elements/Forms';

const RegisterWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 100px 1fr;
  justify-content: center;
`;

const Register = () => {
  return (
    <RegisterWrapper>
      <MainTitle>register</MainTitle>
      <StyledForm>
        <StyledLabel htmlFor='username'>Nick</StyledLabel>
        <StyledInput type='text' id='username' placeholder='nick' />
        <StyledLabel htmlFor='email'>Email</StyledLabel>
        <StyledInput type='email' id='email' placeholder='email' />
        <StyledLabel htmlFor='password'>Password</StyledLabel>
        <StyledInput type='password' id='password' placeholder='password' />
        <SubmitButtom>sign up</SubmitButtom>
      </StyledForm>
    </RegisterWrapper>
  );
};

export default Register;
