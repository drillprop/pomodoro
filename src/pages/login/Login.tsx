import React, { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import {
  clearUserError,
  loginStart,
  loginWithGoogle,
} from '../../duck/users/userActions';
import { selectUserError } from '../../duck/users/userSelectors';
import useForm from '../../hooks/useForm';
import { StyledLink } from './Login.styles';

const Login: FC = () => {
  const isError = useSelector(selectUserError);
  const dispatch = useDispatch();
  const [values, handleInput, submit] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    dispatch(loginStart(values));
    submit(e);
  };

  return (
    <>
      <Heading level='h1'>login</Heading>
      {isError ? <Error message={isError.message || ''}></Error> : null}
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='email'
          value={values.email}
          onChange={handleInput}
          type='email'
          name='email'
          required
        >
          email
        </Input>
        <Input
          placeholder='password'
          value={values.password}
          onChange={handleInput}
          type='password'
          name='password'
          required
        >
          password
        </Input>
        <Button type='submit' mtop={42}>
          login
        </Button>
        <StyledLink to='register' onClick={() => dispatch(clearUserError())}>
          Dont have an account? <span>Create new one</span> or{' '}
          <span onClick={() => dispatch(loginWithGoogle())}>
            sign in with google
          </span>
        </StyledLink>
      </form>
    </>
  );
};

export default Login;
