import React from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const [values, handleInput, submit] = useForm({
    email: '',
    password: ''
  });
  return (
    <form onSubmit={submit}>
      <StyledLabel htmlFor='email'>email</StyledLabel>
      <StyledInput
        value={values.email}
        onChange={handleInput}
        type='email'
        id='email'
        placeholder='email'
        required
      />
      <StyledLabel htmlFor='password'>password</StyledLabel>
      <StyledInput
        value={values.password}
        onChange={handleInput}
        type='password'
        id='password'
        placeholder='password'
        required
      />
      <SubmitButtom>login</SubmitButtom>
    </form>
  );
};

export default LoginForm;
