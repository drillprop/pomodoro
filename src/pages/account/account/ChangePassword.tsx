import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Input/Input';
import { changePasswordStart } from '../../../duck/users/userActions';
import { SubmitButtom } from '../../../elements/Forms';
import { SubTitle } from '../../../elements/Titles';
import useForm from '../../../hooks/useForm';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [values, handleInput, submitForm] = useForm({
    oldPassword: '',
    newPassword: ''
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    dispatch(changePasswordStart(values));
    submitForm(e);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SubTitle>change password</SubTitle>
        <Input
          value={values.oldPassword}
          onChange={handleInput}
          placeholder='old password'
          type='password'
          name='oldPassword'
          required
        >
          old password
        </Input>
        <Input
          value={values.newPassword}
          onChange={handleInput}
          placeholder='new password'
          type='password'
          name='newPassword'
          required
        >
          new password
        </Input>
        <SubmitButtom type='submit'>submit</SubmitButtom>
      </form>
    </>
  );
};

export default ChangePassword;
