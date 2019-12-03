import React, { FormEvent, FC, useState } from 'react';
import { SubmitButtom } from '../../../elements/Forms';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Input/Input';
import { SubTitle } from '../../../elements/Titles';
import { deleteAccountStart } from '../../../duck/users/userActions';
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
          <SubmitButtom invert type='submit'>
            delete
          </SubmitButtom>
        </StyledDeleteForm>
      ) : null}
      <SubmitButtom onClick={() => showForm(isFormVisible => !isFormVisible)}>
        {isFormVisible ? 'cancel' : 'delete account'}
      </SubmitButtom>
    </>
  );
};

export default DeleteAccount;
