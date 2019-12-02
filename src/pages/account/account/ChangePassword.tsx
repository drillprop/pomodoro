import React, { FormEvent } from 'react';
import Input from '../../../components/Input/Input';
import { SubTitle } from '../../../elements/Titles';
import { SubmitButtom } from '../../../elements/Forms';
import useForm from '../../../hooks/useForm';

const ChangePassword = () => {
  const [values, handleInput, submitForm] = useForm({
    oldPassword: '',
    newPassword: ''
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        <SubmitButtom>submit</SubmitButtom>
      </form>
    </>
  );
};

export default ChangePassword;
