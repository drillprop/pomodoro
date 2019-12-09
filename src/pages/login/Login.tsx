import React, { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { loginStart } from '../../duck/users/userActions';
import useForm from '../../hooks/useForm';
import Heading from '../../components/Heading/Heading';
import { selectUserError } from '../../duck/users/userSelectors';
import Notification from '../../components/Notification/Notification';
import { Link } from 'react-router-dom';
import SignWrapper from '../../components/SignWrapper/SignWrapper';
import { StyledLink } from './Login.styles';

const Login: FC = () => {
  const isError = useSelector(selectUserError);
  const dispatch = useDispatch();
  const [values, handleInput, submit] = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    dispatch(loginStart(values));
    submit(e);
  };

  return (
    <SignWrapper>
      <Heading level='h1'>login</Heading>
      {isError ? (
        <Notification isError message={isError.message || ''}></Notification>
      ) : null}
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
        <StyledLink to='register'>
          Dont have an account? Create new one
        </StyledLink>
      </form>
    </SignWrapper>
  );
};

export default Login;