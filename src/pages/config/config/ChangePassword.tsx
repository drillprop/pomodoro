import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { changePasswordStart } from '../../../duck/users/userActions';
import useForm from '../../../hooks/useForm';
import Heading from '../../../components/Heading/Heading';
import { StyledForm, ButtonGroup } from '../Config.styles';

const ChangePassword = () => {
  const [isPasswordMatch, setMatch] = useState(true);

  const [isFormVisible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const [values, handleInput, submitForm, clearForm] = useForm({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
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

  const cancel = () => {
    clearForm(values), setVisible(false);
  };

  return (
    <>
      <Heading level='h2' mtop={48}>
        change password
      </Heading>
      {!isFormVisible && (
        <Button mtop={32} onClick={() => setVisible(true)}>
          change password
        </Button>
      )}
      {isFormVisible && (
        <StyledForm mtop={32} onSubmit={handleSubmit}>
          <Input
            mtop={0}
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
          <ButtonGroup>
            <Button mtop={32} type='submit' invert>
              submit
            </Button>
            <Button mtop={32} onClick={cancel} type='reset'>
              cancel
            </Button>
          </ButtonGroup>
        </StyledForm>
      )}
    </>
  );
};

export default ChangePassword;
