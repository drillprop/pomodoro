import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { registerStart } from '../../../duck/users/userActions';
import {
  StyledInput,
  StyledLabel,
  SubmitButtom
} from '../../../elements/Forms';
import useForm from '../../../hooks/useForm';

const RegisterForm: FC = () => {
  const dispatch = useDispatch();
  const [values, handleInput, submit] = useForm({
    displayName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    submit(e);
    dispatch(registerStart(values));
  };

  return (
    <form onSubmit={handleSubmit}>
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
