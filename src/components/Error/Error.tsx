import React, { FC } from 'react';
import { ErrorWrapper } from './Error.styles';
import Icon from '../Icon/Icon';

interface Props {
  message?: string;
  color?: string;
}

const Error: FC<Props> = ({ message = 'Something went wrong', color }) => {
  return (
    <ErrorWrapper color={color || 'red'}>
      <Icon
        name='error'
        size={20}
        style={{ position: 'relative', top: '0.25em', marginRight: '10px' }}
        color={color || 'red'}
      />
      {message}
    </ErrorWrapper>
  );
};

export default Error;
