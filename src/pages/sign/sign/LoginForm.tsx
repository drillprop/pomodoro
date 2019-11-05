import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart } from '../../../duck/users/userActions';
import {
  StyledInput,
  StyledLabel,
  SubmitButtom
} from '../../../elements/Forms';
import useForm from '../../../hooks/useForm';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [values, handleInput, submit] = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent) => {
    dispatch(loginStart(values.email, values.password));
    submit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel htmlFor='email'>email</StyledLabel>
      <StyledInput
        value={values.email}
        onChange={handleInput}
        type='email'
        name='email'
        id='email'
        placeholder='email'
        required
      />
      <StyledLabel htmlFor='password'>password</StyledLabel>
      <StyledInput
        value={values.password}
        onChange={handleInput}
        type='password'
        name='password'
        id='password'
        placeholder='password'
        required
      />
      <SubmitButtom>login</SubmitButtom>
    </form>
  );
};

export default LoginForm;
