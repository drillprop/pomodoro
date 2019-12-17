import { ShowMenuAction } from './menuInterfaces';
import { SHOW_MENU } from './menuTypes';

export const showMenu = (isMenuVisible: boolean): ShowMenuAction => {
  return {
    type: SHOW_MENU,
    payload: isMenuVisible
  };
};
