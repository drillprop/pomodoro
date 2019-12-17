import {
  SHOW_MENU,
  CREATE_NOTIFICATION,
  CLEAR_NOTIFICATION
} from './menuTypes';

export interface ShowMenuAction {
  type: typeof SHOW_MENU;
  payload: boolean;
}

export interface CreateNotificationAction {
  type: typeof CREATE_NOTIFICATION;
  payload: string;
}
export interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION;
}

export type MenuActionTypes =
  | ShowMenuAction
  | CreateNotificationAction
  | ClearNotificationAction;
