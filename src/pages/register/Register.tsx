import React from 'react';
import { MainTitle } from '../../elements/Titles';
import RegisterForm from '../../components/Register/RegisterForm';
import { FormWrapper } from '../../elements/Forms';

const Register = () => {
  return (
    <FormWrapper>
      <MainTitle>register</MainTitle>
      <RegisterForm />
    </FormWrapper>
  );
};

export default Register;
