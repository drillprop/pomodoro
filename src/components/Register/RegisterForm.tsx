import React, { FormEvent, FC } from 'react';
import { StyledLabel, StyledInput, SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';
import { auth } from '../../utils/firebase/firebase';
import { addUserToFirestore } from '../../duck/users/userUtils';
import { useDispatch } from 'react-redux';
import { registerStart } from '../../duck/users/userActions';

const RegisterForm: FC = () => {
  const dispatch = useDispatch();
  const [values, handleInput, submit] = useForm({
    displayName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    const { email, password, displayName } = values;
    submit(e);
    dispatch(registerStart(email, password, displayName));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel htmlFor='username'>Nick</StyledLabel>
      <StyledInput
        value={values.username}
        onChange={handleInput}
        type='text'
        name='displayName'
        id='username'
        placeholder='nick'
      />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput
        value={values.email}
        onChange={handleInput}
        name='email'
        type='email'
        id='email'
        placeholder='email'
      />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput
        value={values.password}
        onChange={handleInput}
        name='password'
        type='password'
        id='password'
        placeholder='password'
      />
      <SubmitButtom>register</SubmitButtom>
    </form>
  );
};

export default RegisterForm;
