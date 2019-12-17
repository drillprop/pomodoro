import { MenuActionTypes } from './menuInterfaces';
import { SHOW_MENU } from './menuTypes';

export interface MenuState {
  isMenuVisible: boolean;
  notification: string;
}

const initialState: MenuState = {
  isMenuVisible: false,
  notification: ''
};

export default (state = initialState, action: MenuActionTypes) => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        isMenuVisible: action.payload
      };
    default:
      return { ...state };
  }
};
