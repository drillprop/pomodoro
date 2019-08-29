import React, { FormEvent } from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { auth } from '../../utils/firebase/firebase';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [values, handleInput, submit] = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    submit(e);
    auth.signInWithEmailAndPassword(values.email, values.password);
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
