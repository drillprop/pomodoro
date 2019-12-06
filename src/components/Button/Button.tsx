import React, { FC, MouseEventHandler } from 'react';
import { StyledButton } from './Button.styles';

export interface Props {
  disabled?: boolean;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined;
  invert?: boolean;
  children?: any;
  mtop?: number;
  width?: number;
}

const Button: FC<Props> = ({
  disabled,
  onClick,
  type,
  invert,
  children,
  mtop,
  width
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      invert={invert}
      mtop={mtop}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
