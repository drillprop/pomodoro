import React, { FC } from 'react';
import {
  NotificationWrapper,
  CloseButton,
  NotificationMessage
} from './Notification.styles';
import { useTransition } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotification } from '../../duck/menu/menuSelectors';
import { clearNotification } from '../../duck/menu/menuActions';

interface Props {
  message?: string;
}

const Notification: FC<Props> = () => {
  const dispatch = useDispatch();
  const notification = useSelector(selectNotification);

  const transition = useTransition(notification, null, {
    from: { transform: 'translateY(-100%)' },
    enter: { transform: 'translateY(0px)' },
    leave: { transform: 'translateY(-100%)' }
  });
  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <NotificationWrapper key={key} style={props}>
              {notification && (
                <>
                  <NotificationMessage>{notification}</NotificationMessage>
                  <CloseButton
                    aria-label='Close Notification'
                    onClick={() => dispatch(clearNotification())}
                  >
                    &times;
                  </CloseButton>
                </>
              )}
            </NotificationWrapper>
          )
      )}
    </>
  );
};

export default Notification;
