import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { changePasswordStart } from '../../../duck/users/userActions';
import { SubTitle } from '../../../elements/Titles';
import useForm from '../../../hooks/useForm';

const ChangePassword = () => {
  const [isPasswordMatch, setMatch] = useState(true);
  const dispatch = useDispatch();
  const [values, handleInput, submitForm] = useForm({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { newPassword, confirmPassword } = values;
    if (newPassword === confirmPassword) {
      dispatch(changePasswordStart(values));
      submitForm(e);
    } else {
      e.preventDefault();
      setMatch(false);
    }
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
        <Input
          value={values.confirmPassword}
          onChange={handleInput}
          placeholder='confirm password'
          type='password'
          name='confirmPassword'
          required
        >
          confirm password
        </Input>
        {!isPasswordMatch ? <p>Passwords doesn't match</p> : null}
        <Button type='submit'>submit</Button>
      </form>
    </>
  );
};

export default ChangePassword;
