import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { deleteAccountStart } from '../../../duck/users/userActions';
import { SubTitle } from '../../../elements/Titles';
import useForm from '../../../hooks/useForm';
import { StyledDeleteForm } from './DeleteAccount.styles';

const DeleteAccount: FC<{ provider: string | null }> = ({ provider }) => {
  const [isFormVisible, showForm] = useState(false);
  const dispatch = useDispatch();
  const [values, handleInput, sumbitForm] = useForm({ password: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    sumbitForm(e);
    dispatch(deleteAccountStart(values.password));
  };

  return (
    <>
      {isFormVisible ? (
        <StyledDeleteForm onSubmit={handleSubmit}>
          <SubTitle>delete account</SubTitle>
          {provider === 'password' && (
            <Input
              type='password'
              placeholder='password'
              name='password'
              value={values.password}
              onChange={handleInput}
              required={isFormVisible}
            >
              confirm with password
            </Input>
          )}
          <Button invert type='submit'>
            delete
          </Button>
        </StyledDeleteForm>
      ) : null}
      <Button onClick={() => showForm(isFormVisible => !isFormVisible)}>
        {isFormVisible ? 'cancel' : 'delete account'}
      </Button>
    </>
  );
};

export default DeleteAccount;
