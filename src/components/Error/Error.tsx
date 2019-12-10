import React, { FC } from 'react';
import { ErrorWrapper } from './Error.styles';
import Icon from '../Icon/Icon';

interface Props {
  message?: string;
}

const Error: FC<Props> = ({ message = 'Something went wrong' }) => {
  return (
    <ErrorWrapper>
      <Icon
        name='error'
        size={20}
        style={{ position: 'relative', top: '0.25em', marginRight: '10px' }}
        color={'red'}
      />
      {message}
    </ErrorWrapper>
  );
};

export default Error;
