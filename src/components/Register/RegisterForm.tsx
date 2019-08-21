import React, { FormEvent } from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { register } from '../../duck/users/userActions';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [values, handleInput, submit] = useForm({
    displayName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent) => {
    submit(e);
    dispatch(register({ ...values }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel htmlFor='username'>Nick</StyledLabel>
      <StyledInput
        value={values.username}
        onChange={handleInput}
        type='text'
        name='displayName'
        id='username'
        placeholder='nick'
      />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput
        value={values.email}
        onChange={handleInput}
        name='email'
        type='email'
        id='email'
        placeholder='email'
      />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput
        value={values.password}
        onChange={handleInput}
        name='password'
        type='password'
        id='password'
        placeholder='password'
      />
      <SubmitButtom>register</SubmitButtom>
    </form>
  );
};

export default RegisterForm;
