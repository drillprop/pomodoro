import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../elements/Titles';
import RegisterForm from '../../components/Register/RegisterForm';

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
      <RegisterForm />
    </RegisterWrapper>
  );
};

export default Register;
