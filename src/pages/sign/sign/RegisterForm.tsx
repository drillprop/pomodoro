import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { registerStart } from '../../../duck/users/userActions';
import useForm from '../../../hooks/useForm';
import Heading from '../../../components/Heading/Heading';
import { FormParagraph } from '../Sign.styles';

interface Props {
  switchForm: (arg: boolean) => void;
}

const RegisterForm: FC<Props> = ({ switchForm }) => {
  const [isPasswordMatch, setMatch] = useState(true);
  const dispatch = useDispatch();
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
    <>
      <Heading level='h1'>register</Heading>
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
        <FormParagraph onClick={() => switchForm(true)}>
          Already have an account? Sign in
        </FormParagraph>
      </form>
    </>
  );
};

export default RegisterForm;
