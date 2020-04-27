import React, { FC } from 'react';
import {
  NotificationWrapper,
  CloseButton,
  NotificationMessage,
} from './Notification.styles';
import { useTransition } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotification } from '../../duck/menu/menuSelectors';
import { hideNotification } from '../../duck/menu/menuActions';

interface Props {
  message?: string;
}

const Notification: FC<Props> = () => {
  const dispatch = useDispatch();
  const { notification, isNotificationVisible } = useSelector(
    selectNotification
  );

  const transition = useTransition(isNotificationVisible, null, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0px)' },
    leave: { transform: 'translateY(300%)' },
  });
  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <NotificationWrapper
              key={key}
              style={props}
              onClick={() => dispatch(hideNotification())}
            >
              <>
                <NotificationMessage>{notification}</NotificationMessage>
                <CloseButton
                  aria-label='Close Notification'
                  onClick={() => dispatch(hideNotification())}
                />
              </>
            </NotificationWrapper>
          )
      )}
    </>
  );
};

export default Notification;
