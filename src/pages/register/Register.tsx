import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Error from '../../components/Error/Error';
import SignWrapper from '../../components/SignWrapper/SignWrapper';
import { registerStart, clearUserError } from '../../duck/users/userActions';
import { selectUserError } from '../../duck/users/userSelectors';
import useForm from '../../hooks/useForm';
import { StyledLink } from '../login/Login.styles';

const Register: FC = () => {
  const isError = useSelector(selectUserError);
  const dispatch = useDispatch();
  const [isPasswordMatch, setMatch] = useState(true);
  const [values, handleInput, submit] = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { email, password, confirmPassword } = values;
    if (password === confirmPassword) {
      submit(e);
      dispatch(registerStart({ email, password }));
    } else {
      e.preventDefault();
      setMatch(false);
    }
  };

  return (
    <SignWrapper>
      <Heading level='h1'>register</Heading>
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
        <Input
          placeholder='password'
          value={values.confirmPassword}
          onChange={handleInput}
          type='password'
          name='confirmPassword'
          required
        >
          confirm password
        </Input>
        {!isPasswordMatch ? <p>Passwords doesn't match</p> : null}
        <Button mtop={42} type='submit'>
          register
        </Button>
        <StyledLink to='/login' onClick={() => dispatch(clearUserError())}>
          Already have account? Sign in here
        </StyledLink>
      </form>
    </SignWrapper>
  );
};

export default Register;
