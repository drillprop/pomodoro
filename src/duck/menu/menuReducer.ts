import { MenuActionTypes } from './menuInterfaces';
import {
  SHOW_MENU,
  CREATE_NOTIFICATION,
  CLEAR_NOTIFICATION,
  HIDE_NOTIFICATION,
} from './menuTypes';

export interface MenuState {
  isMenuVisible: boolean;
  isNotificationVisible: boolean;
  notification: string;
}

const initialState: MenuState = {
  isMenuVisible: false,
  isNotificationVisible: false,
  notification: '',
};

export default (state = initialState, action: MenuActionTypes): MenuState => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        isMenuVisible: action.payload,
      };
    case CREATE_NOTIFICATION:
      return {
        ...state,
        isNotificationVisible: true,
        notification: action.payload,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        isNotificationVisible: false,
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: '',
      };
    default:
      return { ...state };
  }
};
