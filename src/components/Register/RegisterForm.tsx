import React from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';

const RegisterForm = () => {
  const [values, handleInput, submit] = useForm({
    username: '',
    email: '',
    password: ''
  });
  return (
    <form onSubmit={submit}>
      <StyledLabel htmlFor='username'>Nick</StyledLabel>
      <StyledInput
        value={values.username}
        onChange={handleInput}
        type='text'
        id='username'
        placeholder='nick'
      />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput
        value={values.email}
        onChange={handleInput}
        type='email'
        id='email'
        placeholder='email'
      />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput
        value={values.password}
        onChange={handleInput}
        type='password'
        id='password'
        placeholder='password'
      />
      <SubmitButtom>register</SubmitButtom>
    </form>
  );
};

export default RegisterForm;
