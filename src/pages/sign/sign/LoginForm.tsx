import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { loginStart } from '../../../duck/users/userActions';
import useForm from '../../../hooks/useForm';
import Heading from '../../../components/Heading/Heading';
import { FormParagraph } from '../Sign.styles';

interface Props {
  switchForm: (arg: boolean) => void;
}

const LoginForm: FC<Props> = ({ switchForm }) => {
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
    <>
      <Heading level='h1'>login</Heading>
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
        <FormParagraph onClick={() => switchForm(false)}>
          Dont have an account? Create new one
        </FormParagraph>
      </form>
    </>
  );
};

export default LoginForm;
