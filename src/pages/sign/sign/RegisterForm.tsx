import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerStart } from '../../../duck/users/userActions';
import { SubmitButtom } from '../../../elements/Forms';
import useForm from '../../../hooks/useForm';
import Input from '../../../components/Input/Input';

const RegisterForm: FC = () => {
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
      <SubmitButtom type='submit'>login</SubmitButtom>
    </form>
  );
};

export default RegisterForm;
