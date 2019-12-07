import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';
import Input from '../../../components/Input/Input';
import { deleteAccountStart } from '../../../duck/users/userActions';
import useForm from '../../../hooks/useForm';
import { ButtonGroup, StyledForm } from '../Account.styles';

const DeleteAccount: FC<{ provider: string | null }> = ({ provider }) => {
  const [isFormVisible, showForm] = useState(false);
  const dispatch = useDispatch();
  const [values, handleInput, sumbitForm, clearForm] = useForm({
    password: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    sumbitForm(e);
    dispatch(deleteAccountStart(values.password));
  };

  const cancel = () => {
    clearForm(values);
    showForm(false);
  };
  return (
    <>
      <Heading level='h2' mtop={72}>
        delete account
      </Heading>
      {!isFormVisible && (
        <Button
          mtop={32}
          onClick={() => showForm(isFormVisible => !isFormVisible)}
        >
          delete account
        </Button>
      )}
      {isFormVisible ? (
        <StyledForm mtop={32} onSubmit={handleSubmit}>
          {provider === 'password' && (
            <Input
              mtop={0}
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
          <ButtonGroup>
            <Button mtop={42} invert type='submit'>
              delete
            </Button>
            <Button type='reset' mtop={42} onClick={cancel}>
              cancel
            </Button>
          </ButtonGroup>
        </StyledForm>
      ) : null}
    </>
  );
};

export default DeleteAccount;
