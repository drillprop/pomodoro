import React, { FC, MouseEventHandler } from 'react';
import { StyledButton } from './Button.styles';

export interface Props {
  disabled?: boolean;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined;
  invert?: boolean;
  children: any;
}

const Button: FC<Props> = ({ disabled, onClick, type, invert, children }) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      invert={invert}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
