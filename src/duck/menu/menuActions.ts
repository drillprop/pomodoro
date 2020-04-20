import {
  ShowMenuAction,
  CreateNotificationAction,
  ClearNotificationAction,
} from './menuInterfaces';
import {
  SHOW_MENU,
  CREATE_NOTIFICATION,
  CLEAR_NOTIFICATION,
  HIDE_NOTIFICATION,
} from './menuTypes';

export const showMenu = (isMenuVisible: boolean): ShowMenuAction => {
  return {
    type: SHOW_MENU,
    payload: isMenuVisible,
  };
};

export const createNotification = (
  notification: string
): CreateNotificationAction => ({
  type: CREATE_NOTIFICATION,
  payload: notification,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});

export const clearNotification = (): ClearNotificationAction => ({
  type: CLEAR_NOTIFICATION,
});
