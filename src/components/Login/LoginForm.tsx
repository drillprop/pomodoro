import React, { FormEvent } from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';
import { auth } from '../../utils/firebase/firebase';

const LoginForm = () => {
  const [values, handleInput, submit] = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    try {
      submit(e);
      auth.signInWithEmailAndPassword(values.email, values.password);
    } catch (err) {
      console.log(err);
    }
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
