import React, { FC } from 'react';
import { InputWrapper, StyledLabel, StyledInput } from './Input.styles';

interface Props {
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  name?: string;
  value?: string | number | string[] | undefined;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  required?: boolean;
}

const Input: FC<Props> = ({
  children,
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  required = false
}) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <StyledInput
        required={required}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;