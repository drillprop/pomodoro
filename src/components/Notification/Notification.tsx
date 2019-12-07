import React, { FC } from 'react';
import { NotificationWrapper } from './Notification.styles';
import { primary } from '../../utils/colors';
import Icon from '../Icon/Icon';

interface Props {
  isError?: boolean;
  message?: string;
}

const Notification: FC<Props> = ({ isError, message }) => {
  return (
    <NotificationWrapper isError={isError}>
      <Icon
        name={isError ? 'error' : 'success'}
        size={20}
        style={{ position: 'relative', top: '0.25em', marginRight: '10px' }}
        color={isError ? 'red' : primary}
      />
      {message}
    </NotificationWrapper>
  );
};

export default Notification;
