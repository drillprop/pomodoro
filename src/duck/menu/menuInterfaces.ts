import { SHOW_MENU } from './menuTypes';

export interface ShowMenuAction {
  type: typeof SHOW_MENU;
  payload: boolean;
}

export type MenuActionTypes = ShowMenuAction;
