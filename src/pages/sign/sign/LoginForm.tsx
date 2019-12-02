import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart } from '../../../duck/users/userActions';
import { SubmitButtom } from '../../../elements/Forms';
import useForm from '../../../hooks/useForm';
import Input from '../../../components/Input/Input';

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
      <SubmitButtom>login</SubmitButtom>
    </form>
  );
};

export default LoginForm;
