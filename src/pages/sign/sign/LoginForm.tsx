import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { loginStart } from '../../../duck/users/userActions';
import useForm from '../../../hooks/useForm';

const LoginForm: FC = () => {
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
    </form>
  );
};

export default LoginForm;
