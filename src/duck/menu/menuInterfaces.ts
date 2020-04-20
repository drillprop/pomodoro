import {
  SHOW_MENU,
  CREATE_NOTIFICATION,
  CLEAR_NOTIFICATION,
  HIDE_NOTIFICATION,
} from './menuTypes';

export interface ShowMenuAction {
  type: typeof SHOW_MENU;
  payload: boolean;
}

export interface CreateNotificationAction {
  type: typeof CREATE_NOTIFICATION;
  payload: string;
}

export interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION;
}

export interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION;
}

export type MenuActionTypes =
  | ShowMenuAction
  | CreateNotificationAction
  | HideNotificationAction
  | ClearNotificationAction;
